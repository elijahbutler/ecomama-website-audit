// Run with PLAYWRIGHT_MODULE pointing to an existing Playwright installation.
// Serves dist through request interception; opens no local server or network port.
import { readFile, stat, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE
    ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href
    : "playwright"
);
const root = path.resolve("dist");
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_EXECUTABLE
    ? { executablePath: process.env.CHROME_EXECUTABLE }
    : {}),
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
const missing = [];
page.on("pageerror", (error) => errors.push(error.message));
await page.route("https://ecomama.test/**", async (route) => {
  const pathname = decodeURIComponent(new URL(route.request().url()).pathname);
  let file = path.resolve(root, "." + pathname);
  if (!file.startsWith(root + path.sep) && file !== root)
    return route.fulfill({ status: 403 });
  try {
    if (!(await stat(file)).isFile()) file = path.join(root, "index.html");
  } catch {
    if (path.extname(file)) {
      missing.push(pathname);
      return route.fulfill({ status: 404 });
    }
    file = path.join(root, "index.html");
  }
  const types = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".webp": "image/webp",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
  };
  await route.fulfill({
    status: 200,
    contentType: types[path.extname(file)] || "application/octet-stream",
    body: await readFile(file),
  });
});
const out = path.resolve(".impeccable/review");
await mkdir(out, { recursive: true });
const routes = [
  "/",
  "/home",
  "/venue",
  "/vignettes",
  "/services",
  "/the-farm",
  "/gatherings",
  "/floral",
  "/explore",
  "/local-recommendations",
  "/about",
  "/our-story",
  "/sustainability",
  "/contact",
  "/partner-with-us",
  "/privacy-policy",
  "/privacy-policy-1",
];
for (const mode of [
  "Field journal",
  "Previous design",
  "Original recreation",
]) {
  await page.goto("https://ecomama.test/?review=1");
  await page.getByRole("button", { name: mode, exact: true }).click();
  console.log(`Checking routes in ${mode}`);
  for (const route of routes) {
    await page.evaluate((route) => {
      window.history.pushState({}, "", route);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }, route);
    await page.locator("main").waitFor();
    await page.waitForTimeout(30);
    assert.ok(
      (await page.locator("main").innerText()).length > 5,
      `${mode} ${route} is empty`,
    );
    assert.equal(
      await page.locator("main h1").count(),
      1,
      `${mode} ${route} needs one h1`,
    );
  }
}
await page.goto("https://ecomama.test/floral");
const choices = page.locator(".rose-grid input[type=checkbox]");
for (let i = 0; i < 3; i++) await choices.nth(i).check();
assert.equal(await choices.nth(3).isDisabled(), true);
await page.getByRole("button", { name: "Winter", exact: true }).click();
await page
  .getByRole("heading", { name: "No verified seasonal entries yet" })
  .waitFor();
assert.match(await page.locator(".selection-summary").innerText(), /3 of 3/);
await page
  .getByRole("link", { name: "Carry favourites into an inquiry" })
  .click();
assert.equal(
  await page.locator(".inquiry-preferences input[type=checkbox]").count(),
  3,
);
await page.reload();
assert.equal(
  await page.locator(".inquiry-preferences input[type=checkbox]").count(),
  3,
);
await page.getByLabel("Your name, required").fill("Test & Guest");
await page.getByLabel("Email address, required").fill("guest@example.org");
await page
  .getByLabel("Your message, required")
  .fill("A dinner & flowers, please.");
await page.getByRole("button", { name: "Prepare my email" }).click();
const mailto = await page
  .getByRole("link", { name: "Open email draft" })
  .getAttribute("href");
assert.ok(mailto.startsWith("mailto:contact@ecomamafarms.com?"));
assert.match(
  decodeURIComponent(mailto),
  /Rose reference: Blush cup \[blush-cup\]/,
);
assert.match(decodeURIComponent(mailto), /Test & Guest/);
assert.match(
  await page.locator(".email-draft").innerText(),
  /Nothing has been sent/,
);
await page.getByLabel("Your message, required").fill("Changed message");
assert.equal(
  await page.locator(".email-draft").count(),
  0,
  "changing values invalidates old draft",
);
await page.getByLabel("Your name, required").fill("   ");
await page.getByRole("button", { name: "Prepare my email" }).click();
await page.getByRole("alert").waitFor();
await page.goto("https://ecomama.test/venue");
await page
  .locator(".estate-plan")
  .getByRole("button", { name: "Willow Pond" })
  .click();
assert.match(
  await page.locator("#estate-detail").innerText(),
  /under construction/,
);
await page
  .getByRole("button", { name: "Enlarge photograph of Willow Pond" })
  .click();
assert.equal(await page.locator("dialog").evaluate((el) => el.open), true);
await page.keyboard.press("Escape");
assert.equal(await page.locator("dialog").evaluate((el) => el.open), false);
await page
  .getByRole("button", { name: "Add this place to my inquiry" })
  .click();
await page.getByLabel("Dinner by candlelight").check();
await page
  .getByRole("button", { name: "Add this direction", exact: true })
  .click();
await page
  .getByRole("link", { name: "Share this direction with our team" })
  .click();
assert.equal(
  await page.getByLabel("Estate place", { exact: true }).inputValue(),
  "willow-pond",
);
assert.equal(
  await page.getByLabel("Table direction", { exact: true }).inputValue(),
  "barn-candlelight",
);
await page.goto(
  "https://ecomama.test/contact?rose=bad&rose=blush-cup&rose=blush-cup&place=bad&table=bad",
);
assert.equal(
  await page.locator(".inquiry-preferences input[type=checkbox]").count(),
  1,
);
assert.equal(
  await page.getByLabel("Estate place", { exact: true }).inputValue(),
  "",
);
await page.goto("https://ecomama.test/sustainability");
await page
  .getByRole("button", { name: "Water stewardship", exact: true })
  .click();
assert.match(
  await page.locator(".soil-layout").innerText(),
  /No water-saving percentage/,
);
await page.goto("https://ecomama.test/local-recommendations");
await page.getByLabel("Town", { exact: true }).selectOption("Ballard");
assert.equal(await page.locator(".guide-list article").count(), 1);
assert.match(
  await page.locator(".guide-links a").last().getAttribute("href"),
  /2449%20Baseline/,
);
await page.getByLabel("Category", { exact: true }).selectOption("Explore");
await page.getByRole("heading", { name: "No matches", exact: true }).waitFor();
await page.getByRole("button", { name: "Clear filters" }).click();
assert.equal(await page.locator(".guide-list article").count(), 5);
// Responsive route sweep and screenshots are batched, not iterative per edit.
for (const width of [360, 390, 768, 1440, 667]) {
  await page.setViewportSize({ width, height: width === 667 ? 375 : 1000 });
  for (const route of [
    "/",
    "/venue",
    "/vignettes",
    "/services",
    "/our-story",
    "/floral",
    "/sustainability",
    "/contact",
    "/local-recommendations",
  ]) {
    await page.goto(`https://ecomama.test${route}`);
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    );
    assert.equal(overflow, false, `${route} overflows at ${width}`);
    if ([390, 1440].includes(width)) {
      // Load below-fold photographs before capture.
      await page.evaluate(async () => {
        document.querySelectorAll("img").forEach((i) => (i.loading = "eager"));
        await Promise.all(
          [...document.images].map((i) => i.decode().catch(() => {})),
        );
      });
      await page.screenshot({
        path: path.join(
          out,
          `${width}-${route.replaceAll("/", "") || "home"}.png`,
        ),
        fullPage: true,
      });
    }
  }
}
// The full estate and floral collections remain present in the public mode.
for (const route of ["/venue", "/vignettes"]) {
  await page.goto(`https://ecomama.test${route}`);
  assert.equal(await page.getByRole("region", { name: "Six event facilities", exact: true }).locator("article").count(), 6);
  assert.equal(await page.getByRole("region", { name: "Six portrait locations", exact: true }).locator("article").count(), 6);
}
await page.goto("https://ecomama.test/floral");
assert.equal(await page.locator(".floral-photo-grid figure").count(), 8);
// Full navigation supports keyboard disclosure, dismissal, and route selection.
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto("https://ecomama.test/");
const desktopNav = page.getByRole("navigation", { name: "Main navigation", exact: true });
const venueTrigger = desktopNav.getByRole("button", { name: "Venue", exact: true });
await venueTrigger.focus();
await page.keyboard.press("Enter");
assert.equal(await venueTrigger.getAttribute("aria-expanded"), "true");
await page.keyboard.press("Tab");
assert.equal(await page.evaluate(() => document.activeElement.textContent), "Venue OverviewThe private estate in full");
await page.keyboard.press("Escape");
assert.equal(await venueTrigger.getAttribute("aria-expanded"), "false");
assert.equal(await venueTrigger.evaluate(element => element === document.activeElement), true);
await venueTrigger.click();
await desktopNav.getByRole("link", { name: "Vignettes & Locations" }).click();
assert.equal(new URL(page.url()).pathname, "/vignettes");
await desktopNav.getByRole("button", { name: "About", exact: true }).click();
await desktopNav.getByRole("link", { name: "Sustainability & Biodynamics" }).click();
assert.equal(new URL(page.url()).pathname, "/sustainability");
await page.goto("https://ecomama.test/contact");
assert.equal(await page.getByRole("link", { name: "Wedding CRM Inquiry, opens a new tab" }).getAttribute("href"), "https://crm.ecomamafarms.com/f/wedding-inquiry");
await page.getByRole("button", { name: "Prepare my email" }).click();
assert.equal(await page.locator("input:invalid").count(), 2);
await page.getByLabel("Your name, required").fill("   ");
await page.getByLabel("Email address, required").fill("guest@example.org");
await page.getByLabel("Your message, required").fill("A garden gathering");
await page.getByRole("button", { name: "Prepare my email" }).click();
assert.match(await page.getByRole("alert").innerText(), /Spaces alone cannot be sent/);
await page.getByLabel("Your name, required").fill("Garden Guest");
await page.getByRole("button", { name: "Prepare my email" }).click();
assert.match(await page.getByRole("link", { name: "Open email draft" }).getAttribute("href"), /^mailto:contact@ecomamafarms.com/);
await page.setViewportSize({ width: 390, height: 844 });
await page.goto("https://ecomama.test/");
await page.getByRole("button", { name: "Open navigation" }).click();
const mobileNav = page.getByRole("navigation", { name: "Mobile navigation" });
await mobileNav.getByRole("button", { name: "Venue", exact: true }).click();
await mobileNav.getByRole("link", { name: "Services", exact: false }).waitFor();
await mobileNav.getByRole("button", { name: "Venue", exact: true }).press("Escape");
assert.equal(await mobileNav.getByRole("button", { name: "Venue", exact: true }).getAttribute("aria-expanded"), "false");
await page
  .locator("#mobile-navigation")
  .getByRole("link", { name: "Floral", exact: true })
  .click();
await page.locator("#mobile-navigation").waitFor({ state: "hidden" });
assert.equal(await page.locator("#mobile-navigation").count(), 0);
await page.emulateMedia({ reducedMotion: "reduce" });
assert.equal(
  await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  ),
  "auto",
);
await page.goto("https://ecomama.test/floral");
await page.locator(".rose-grid input").first().focus();
await page.keyboard.press("Space");
assert.equal(await page.locator(".rose-grid input").first().isChecked(), true);
// Text remains usable when an optional photo fails.
await page.route("**/images/journal/55-*", (route) =>
  route.fulfill({ status: 404, body: "" }),
);
await page.goto("https://ecomama.test/floral");
await page.locator(".rose-grid").scrollIntoViewIfNeeded();
await page.locator(".rose-grid .photo-fallback").waitFor();
assert.match(
  await page.locator(".rose-grid .photo-fallback").innerText(),
  /Photograph unavailable/,
);
await page.locator(".rose-grid input").first().check();
assert.equal(await page.locator(".rose-grid input").first().isChecked(), true);
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto("https://ecomama.test/contact");
await page.evaluate(() => {
  document.body.style.zoom = "2";
});
assert.equal(
  await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth + 1,
  ),
  false,
  "contact overflow at 200% zoom",
);
assert.deepEqual(errors, [], "browser runtime errors");
assert.deepEqual(missing, [], "missing local assets");
await writeFile(
  path.join(out, "browser-results.json"),
  JSON.stringify(
    {
      passed: true,
      routes: routes.length,
      modes: 3,
      viewportWidths: [360, 390, 768, 1440, 667],
      errors,
      missing,
      checks: [
        "rose limit and persistence",
        "email encoding and honest status",
        "invalid inputs",
        "map selection and native dialog Escape",
        "table and place handoff",
        "URL validation",
        "soil selection",
        "guide filter and empty state",
        "mobile navigation",
        "keyboard checkbox",
        "reduced motion",
        "missing-photo fallback",
        "contact at 200% CSS zoom",
        "overflow",
      ],
    },
    null,
    2,
  ),
);
console.log(
  "PASS: all routes and modes; interaction, handoff, responsive, and keyboard checks.",
);
await browser.close();

# Ecomama Farms website Studio

This standalone Sanity Studio edits project `ocp45god`, dataset `production`. Its dependencies and configuration stay in this directory.

## Start the Studio

1. Install dependencies with `bun install --frozen-lockfile`.
2. Run `bun run dev`.
3. Open the URL printed by Sanity and sign in with an account that has access to the project.

The requested npm equivalent is `npm run dev`. Dependency installation uses Bun and the committed `bun.lock`.

## Check the schemas

Run these commands from this directory:

```sh
bun run typecheck
bun run schema:validate
bun run schema:extract
```

Extraction replaces the ignored local file `schema.json`. Validation and extraction check local schema definitions. They do not prove project access or validate production documents.

The document types are `venueGallery`, `floralGallery`, `farmPractice`, and `siteSettings`. Gallery images use `websiteImage`, which enables hotspot cropping and requires alternative text. Captions and photographer credits are optional. Site settings use `announcementEnabled` and `announcement`. The Studio edits a single settings document with ID `siteSettings`.

The frontend helpers and fallback behavior are documented in [the client guide](../src/lib/README.md).

## Deploy when authorized

Run `bun run deploy` only when deployment is authorized. The requested equivalent is `npx sanity deploy`. Sanity may prompt for authentication and a Studio hostname. Deployment publishes the Studio and can deploy its schema to the configured project.

No Studio hostname or deployment has been configured here. This setup does not create content or publish changes to the dataset.

See the [Sanity Studio configuration documentation](https://www.sanity.io/docs/studio/configuration) and [schema CLI reference](https://www.sanity.io/docs/cli-reference/cli-schemas).

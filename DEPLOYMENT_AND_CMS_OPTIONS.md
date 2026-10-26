# Ecomama Farms deployment and CMS options

Research date: October 26, 2026. Prices are in USD before tax unless stated otherwise. This report recommends an architecture and implementation plan. It does not provision services, change DNS, or cancel Squarespace.

## 1. Recommendation

Use **Cloudflare Pages for the React site and Sanity for structured gallery content and image delivery**. Start with Sanity Free only if the owner accepts its administrator-level editing permissions and public content model. This combination can cost **$0 per month and $0 per year for hosting and CMS** under the workload below. Keep a $10 monthly contingency, but understand that this reserve does not buy Sanity's paid permission model.

If staff must have restricted Editor accounts, budget Sanity Growth for every billable participant, including the administrator or developer who retains access. Three billable accounts cost $45 per month, or $540 per year, before usage charges. In that case, test TinaCMS Free for a two-person workflow before paying for Sanity. Keep Squarespace as a valid alternative if its bundled editing experience already meets the team's needs.

The reason to choose this architecture is the absence of a server or database to operate. Photo editors use a purpose-built CMS screen. Visitors receive the existing static site from a CDN. A CMS outage should leave the last published gallery visible.

Cloudflare Pages includes unmetered static requests and bandwidth. Sanity provides hosted structured content and image delivery, but its quotas remain separate. Free hosting does not make image traffic free everywhere. [Cloudflare Pages](https://www.cloudflare.com/en-gb/developer-platform/products/pages/), [Sanity pricing](https://www.sanity.io/pricing).

### Decision guide

| Priority | Best fit | Main tradeoff |
| --- | --- | --- |
| Lowest maintenance and a familiar photo-upload screen | Pages + Sanity Free | Trusted administrators only on Free. Monitor image traffic. |
| Two people editing with a Git-backed content history | Pages + TinaCMS Free | Two-user limit includes everyone needing CMS access. Integration needs a pilot. |
| Content and images kept in Git | Pages + Decap CMS | Developer owns authentication and image-size controls. |
| Learn AWS while keeping the bill small | S3 + CloudFront + Sanity | More IAM, cache, deployment, and billing configuration. |
| Use Google's managed static hosting | Firebase Hosting + Sanity | Smaller frontend transfer allowance. |
| Own the CMS, database, and media | Pages + VPS + Strapi or Payload | Someone must maintain and recover the server. |
| Restricted editing without building or maintaining a CMS integration | Keep Squarespace | $300 annual baseline, existing design constraints. |

## 2. What the current checkout needs

Inspected `/Users/elijah/.t3/projects/ecomama-website-audit` at base commit `9a249b6eeeb358a7d528e9cf8274cdb36c7feabb`, including the current working files. The checkout already has uncommitted work. This report does not change those files.

The application uses React 18, Vite 5, TypeScript, Tailwind CSS 3, and React Router. `package.json` defines a build that runs TypeScript and Vite. The expected deployment artifact is `dist/`. The site does not need server-side rendering to deploy its present implementation.

Relevant integration points are:

- `src/data/siteContent.ts` and `src/data/fieldJournal.ts` contain local content and image references.
- `src/pages/HomeAndVenuePages.tsx` and `src/pages/FarmAndFloralPages.tsx` contain venue and floral imagery. Some images are embedded directly in page components.
- `public/images/` occupies about 71 MiB on disk in the inspected checkout. This is an archive measurement, not a measured page payload or future CMS storage requirement.
- `src/features/InquiryForm.tsx` prepares a `mailto:` draft and links to an existing `crm.ecomamafarms.com` wedding inquiry form. It does not itself send or store an inquiry.
- The repository has `package-lock.json`, with no pnpm lockfile found. For future setup, follow the workspace package-manager rule and use Bun, reconcile the lockfile deliberately, and pin the working toolchain. This report installs nothing.

Hosting this app alone will not make gallery uploads populate pages. A developer must add the CMS schema, content query or export, and shared gallery component, then replace the relevant hardcoded references. The CRM remains a separate service with separate costs and operations.

Before launch, also decide whether the audit inspector and original-versus-redesign controls belong on the public site. Check route metadata, social previews, sitemap, redirects, and indexing. A client-rendered SPA can deploy cheaply, but route-specific search and social presentation may warrant prerendering later. No framework migration is required for the initial gallery integration.

## 3. Cost assumptions and comparison rules

These are reproducible planning projections, not provider quotes or measurements of current traffic. Exact totals apply only to the stated workload. Unknown traffic, commercial terms, regional prices, taxes, and service changes can alter the bill.

### Base workload

| Input | Assumption |
| --- | --- |
| Traffic | 5,000 visits each month |
| Total delivered bytes | 45 GB each month, averaging 9 MB per visit across all pages viewed |
| Split for SaaS CMS architectures | 5 GB frontend assets and existing local images, 40 GB CMS images |
| Requests to frontend host | 100,000 each month |
| CMS content requests | Approximately 5,000 visitor reads if fetched at runtime. Far fewer with a build snapshot. |
| CMS library | 1,000 images averaging 5 MB each, approximately 5 GB originals |
| Static deployment storage | 0.5 GB retained for the Amplify model. Other hosts have their own release-retention accounting. |
| Publishing | Four production deployments each month, four minutes each |
| Team | Up to three editors or administrators unless a plan limits seats |
| Container model | One CMS instance. AWS uses 730 hours each month. GCP uses ten active instance-hours unless stated otherwise. |
| Geography | Mostly North American visitors. AWS us-east-1 and GCP us-central1 for illustrative rates. Hetzner uses European regions. |

Provider units differ. Calculations use the stated billable unit; the 45 GB workload is treated as approximately 45 GiB in the GCP planning examples. This conservative simplification is not byte-exact billing.

Annual projections multiply the unrounded monthly estimate by 12, then round. Tables show rounded monthly values. No promotional signup credits are subtracted. AWS and GCP trial credits expire and do not establish a sustainable operating cost. [AWS Free Tier terms](https://aws.amazon.com/free/free-tier-faqs/), [Google Cloud trial terms](https://cloud.google.com/signup-faqs).

The common comparison excludes domain renewal, existing email, CRM, taxes, labor, and any new form-delivery service. The user supplied the $300 annual Squarespace baseline; this report does not substitute a public new-customer price for the actual renewal. If the renewal is $36 per month equivalent, its annual cost is $432 instead.

### Hosting and CMS cash comparison

| Architecture | Monthly projection | Annual projection | Difference from $300 annual baseline |
| --- | ---: | ---: | ---: |
| Current Squarespace, supplied baseline | $25.00 | $300.00 | $0 |
| Pages + Sanity Free | $0.00 | $0.00 | Saves $300.00 |
| Pages + TinaCMS Free | $0.00 | $0.00 | Saves $300.00, two users maximum |
| Pages + Decap + free-tier OAuth Worker | $0.00 | $0.00 | Saves $300.00, developer maintains OAuth |
| Pages + Sanity Growth, three billable seats | $45.00 | $540.00 | Costs $240.00 more |
| Vercel Pro, one developer seat + Sanity Free | $20.00 | $240.00 | Saves $60.00 before overages |
| Netlify Free + Sanity Free, split media traffic | $0.00 | $0.00 | Saves $300.00 if credits stay within allowance |
| Netlify Personal + Sanity Free | $9.00 | $108.00 | Saves $192.00 before extra credits |
| Pages + Strapi Cloud Starter, monthly billing | $35.00 | $420.00 | Costs $120.00 more |
| AWS S3 + CloudFront Free + Sanity Free | $0.10 allowance | $1.20 allowance | Saves about $298.80 |
| AWS Amplify + Sanity Free, after introductory benefits | $0.92 | $11.06 | Saves $288.94 |
| Firebase Hosting + Sanity Free | $0.00 | $0.00 | Saves $300.00 under frontend allowance |
| GCS + external load balancer + Cloud CDN + Sanity Free | $19.12 | $229.44 | Saves $70.56 |
| Firebase frontend + Cloud Run CMS + Cloud SQL + GCS media | $35.10 | $421.20 | Costs $121.20 more |
| AWS frontend + ECS Fargate CMS + RDS + S3 | $72.87 | $874.44 | Costs $574.44 more |
| Pages + Lightsail 4 GB CMS, snapshots and backup allowance | $27.00 | $324.00 | Costs $24.00 more |

The $0 combinations assume existing source hosting and CI remain within their account limits. CMS staff do not need paid frontend-host developer seats when they only use Sanity Studio. A paid CMS plan, a paid hosting plan, and a deployment manager are independent purchases.

## 4. The gallery workflow

### Give the team named places, not filenames

Create one `VenueSection` record per place, with permanent identifiers:

| Identifier | Staff-facing label | Initial placements |
| --- | --- | --- |
| `rose-garden` | Heart of the Rose Garden | Venue overview, vignettes, selected homepage images |
| `terraced-lawn` | Terraced Lawn | Venue overview and reception gallery |
| `rose-barn` | Rose Barn | Venue overview and barn gallery |
| `floral-atelier` | Floral atelier | Floral page and selected farm images |

Confirm the actual placements with the owner. Labels can change without changing identifiers or breaking page queries.

Each section needs a title, optional description, cover image, ordered gallery entries, and publication state. Each gallery entry needs an asset reference, required alt text, optional caption, photographer credit, crop or focal point, and a stable entry ID. Keep image order inside the section so the same photo can appear in two galleries at different positions.

Store rights and consent records privately outside a public CMS dataset. The CMS may store a public photographer credit and a non-sensitive approval indicator. Do not place inquiry details, contracts, private event records, or unpublished private photos in the public library. Image URLs may remain accessible even when a reference is removed.

Configure the editing screen around these tasks:

1. Open the CMS and select **Heart of the Rose Garden**.
2. Upload several JPG, PNG, or WebP files, or select existing library images.
3. Add alt text and public credits. Choose the cover and focal point.
4. Drag images into order and preview the page.
5. Select **Publish**. The publishing system refreshes the site without a code edit.

Reject unsupported files with a clear message. Set an application upload target of 10 MB per photo and document phone HEIC conversion. Archive camera originals elsewhere. Remove location metadata before publication and confirm photographer permissions. These are proposed workflow rules, not assertions about each provider's native controls.

### Choose how published changes reach visitors

| Delivery method | What happens after Publish | Reliability and operating cost |
| --- | --- | --- |
| Runtime CMS query | A new visit fetches published gallery JSON from the CMS CDN. | Least publishing infrastructure, but visitors depend on the CMS API. Cache results and retain a fallback. |
| Build snapshot, recommended | A publish webhook starts a deployment. A build step exports published gallery JSON into the static artifact. | Last successful content remains visible during CMS or deployment failures. Updates wait for deployment. |
| Scheduled snapshot | CI refreshes published content periodically. | Fewer webhook components, with a documented publication delay. |

For the recommended approach, add a prebuild content-export step. Vite does not automatically fetch CMS content because it is connected to a repository. Fetch validated published data, generate a gallery manifest, and then run the existing build. Images can still load from Sanity's image CDN. This protects gallery metadata during an API outage, but it does not make remote image delivery independent of Sanity.

Use Cloudflare's deploy hook with a publication filter. Keep the hook URL secret. If the receiver cannot validate Sanity's webhook signature, use a small authenticated receiver to verify it and coalesce repeated requests. Do not trigger a build for every draft keystroke. Add a manual retry path and display the last successful publish time to the team. [Cloudflare deploy hooks](https://developers.cloudflare.com/pages/configuration/deploy-hooks/).

A frontend rollback restores the previous static manifest. It does not undo deleted CMS assets. Restore content separately, and keep a grace period before permanent media deletion.

### Image delivery and performance

Generate responsive image URLs at a small set of widths, such as 480, 960, and 1600 pixels. Use `srcset`, `sizes`, explicit dimensions, and lazy loading below the first screen. Sanity supports CDN resizing and `auto=format`; use `fit=max` to avoid upscaling. [Sanity image transformations](https://www.sanity.io/docs/content-lake/image-urls).

Proposed acceptance targets are a first-page image payload below 1.5 MB on a representative mobile route, no eager loading of the full gallery, and no layout shift from missing dimensions. These targets have not been measured against a CMS integration. Video and original-resolution downloads need a separate delivery budget.

## 5. CMS options and their limits

### Sanity

The Free plan currently includes 20 seats, Administrator and Viewer roles, two public datasets, 100 GB asset storage, 100 GB monthly bandwidth, 1 million monthly API CDN requests, and 250,000 API requests. Studio hosting is included. Growth costs $15 per billable seat each month and adds Editor roles and private datasets. Viewer seats are free. [Sanity plan comparison](https://www.sanity.io/pricing).

Free-plan quota exhaustion can block requests or uploads. Growth bandwidth above its included allowance costs $0.30 per GB. Monitor both API and image delivery. [Sanity quota behavior](https://www.sanity.io/docs/platform-management/plans-and-payments).

For Ecomama, a custom Studio schema can keep editing focused on the four named sections. This requires developer setup. The ordinary image fields and section records do not require the separate enterprise Media Library product.

A public dataset should contain only content suitable for public access. Read published content without a browser token. Draft preview needs authentication, isolated from the public bundle. CORS restricts browser behavior; it does not turn public content into private content. [Sanity query authentication](https://www.sanity.io/docs/http-reference/query), [draft and published behavior](https://www.sanity.io/docs/content-lake/drafts-and-versions).

Choose Sanity when a trusted small team values hosted editing and responsive image delivery. Reconsider Free if administrators need to prevent staff from changing project settings or deleting content. Restricting the visible Studio navigation is not a security permission boundary.

### TinaCMS

TinaCMS offers Git-backed content and visual editing. Free includes two users and two roles. Team includes three users at $290 billed annually, or approximately $24.17 per month equivalent. Its monthly-billing total is higher. Use the annual total rather than multiplying a rounded headline price. [TinaCMS pricing](https://tina.io/pricing).

With Pages hosting, that annual Team price saves only $10 against the supplied Squarespace baseline. Include the developer in the seat count if the developer needs CMS access.

Tina can store media in the repository or use an external media integration. Repo media needs file-size rules and eventual cleanup. [Tina media storage](https://tina.io/docs/reference/media/overview).

Pilot upload, reorder, preview, publish, and direct page refresh against this React Router SPA. Do not assume that an attractive Next.js demonstration proves compatibility with the existing Vite setup. Self-hosting Tina adds authentication and backend operations, so it loses much of its maintenance advantage.

### Decap CMS, formerly Netlify CMS

Decap is a Git-backed editing interface. Configure JSON content files for the four sections and a media folder such as `public/uploads/`. Publishing commits content to the repository and triggers a deployment. The site reads the JSON through its shared gallery component. Decap does not edit hardcoded JSX image references automatically. [Decap configuration](https://decapcms.org/docs/configure-decap-cms/).

For Pages + GitHub, configure an OAuth application and an OAuth proxy, such as a Cloudflare Worker. GitHub-backed editors need suitable repository access. Use a farm-owned organization and review the scope granted to editors. Protect the OAuth secret on the server and validate the callback flow. `/admin` being hard to guess does not protect write access. [Decap backend authentication](https://decapcms.org/docs/backends-overview/).

The proxy can remain within Workers Free at a small team's login volume. Workers Paid starts at $5 each month if needed. [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/).

Choose Decap for portability and a small library. Avoid committing uncompressed originals. Removing files in a later commit does not remove them from Git history. Optimize before upload or add a deliberate image-processing step. Git LFS and external media services introduce separate compatibility and cost questions.

### Strapi and Payload

Both can provide named collections, upload controls, API access, and staff accounts on your own infrastructure. Strapi Community is MIT-licensed. Payload is MIT-licensed and can run as a separate CMS application while the current Vite frontend stays intact. Verify the pinned version's Node runtime and database requirements. Do not assume Bun is a supported production replacement. [Strapi self-hosting](https://strapi.io/hosting), [Payload setup](https://payloadcms.com/get-started).

The full deployment needs a CMS runtime, persistent database, persistent image storage, secrets, backups, and updates. A container's local filesystem is not durable media storage on Cloud Run, App Runner, or replaceable Fargate tasks.

Strapi Cloud Starter currently lists $35 per month with 50 GB media storage, 50 GB monthly media bandwidth, and 100,000 API requests. It sleeps when idle and lists no scheduled backups in the comparison table. Arrange exports. Paid CMS capabilities remain separate from hosting. The $420 annual projection uses monthly billing, not an assumed annual discount. [Strapi Cloud pricing](https://strapi.io/pricing-cloud), [hosting and CMS billing](https://support.strapi.io/articles/3581379360-understanding-strapi-cloud-usage-and-billing).

### Directus

Directus is worth testing if a media-library and relational-data interface matter more than a tailored Studio. Do not assume current releases have the older license terms. Its live license page identifies MSCL-1.0-GPL, and current pricing describes an Open Innovation Grant for organizations below $5 million annual revenue and fewer than 50 employees. Check the selected version, eligibility, and required license key before treating its software cost as $0. [Directus license](https://directus.com/license), [Directus pricing](https://directus.com/pricing).

For the initial Ecomama deployment, Sanity or a small Git-backed CMS avoids this additional licensing decision.

## 6. AWS architectures

### S3 + CloudFront + Sanity

Architecture: private S3 REST origin stores `dist/`, CloudFront serves the site over HTTPS, and Sanity provides gallery content and images. A CI job deploys after code changes or a content publish.

CloudFront now has flat-rate plans. Free includes 100 GB transfer and 1 million requests each month. Its bundled services include DNS and TLS, with a 5 GB S3 Standard storage credit. Pro is $15 each month. S3 requests and other resources are not universally covered by the distribution's flat fee. Sustained usage beyond allowances can lead to delivery adjustments despite the absence of CDN overage charges. [CloudFront pricing](https://aws.amazon.com/cloudfront/pricing/), [flat-rate coverage and allowances](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/flat-rate-pricing-plan.html).

For the split-media workload, 5 GB frontend traffic and 100,000 requests fit Free. Allocate $0.10 each month for small S3 request and related residual charges. This is a reserve, not a promised AWS invoice. Sanity is $0 within its own limits. CI is assumed to fit the source host's included allowance. [S3 billing dimensions](https://aws.amazon.com/s3/pricing/).

A conventional pay-as-you-go CloudFront distribution has a different pricing model. Do not mix its allowances with the flat-rate model above.

Setup path:

1. Create a farm-owned AWS account, enable MFA, and create least-privilege deployment access through CI federation.
2. Create a private S3 bucket with public access blocked. Use CloudFront Origin Access Control against its REST endpoint.
3. Create the distribution and choose its pricing plan explicitly. Associate the intended custom domain and managed TLS. If provisioning ACM separately for CloudFront, use us-east-1.
4. Implement SPA navigation fallback without returning `index.html` for missing JavaScript, images, or CMS paths. Prefer a route-aware viewer-request rewrite.
5. Deploy hashed assets with long immutable caching. Give HTML and gallery manifests a short cache lifetime. Keep previous assets long enough for open browsers and rollback.
6. Connect CMS publication to CI, deploy `dist/`, and invalidate only mutable entry points where needed.
7. Verify direct links, TLS, asset caching, publication, and rollback before changing production DNS.

This is a sound AWS choice. It requires more configuration than Pages to achieve essentially the same public-site behavior.

### Amplify Hosting + Sanity

Amplify combines Git deployment, CDN hosting, custom domains, and SPA rewrites. Model ongoing paid usage without introductory benefits at $0.01 per standard build minute, $0.15 per GB delivered, and $0.023 per GB stored. [Amplify pricing](https://aws.amazon.com/amplify/pricing/).

Base calculation:

- Build: 16 minutes × $0.01 = $0.16.
- Frontend delivery: 5 GB × $0.15 = $0.75.
- Retained deployment storage: 0.5 GB × $0.023 = $0.0115.
- Total: $0.9215 each month, or $11.06 each year.

If Amplify also delivers all 45 GB of images and frontend assets, the same model becomes $6.9215 each month, or $83.06 each year. Keep release retention bounded. Do not assume the new-account credit program pays ongoing bills forever.

Setup path: connect the repository, pin the toolchain, configure the content-export and build commands, publish `dist/`, configure SPA rewrites and a custom domain, add a publish hook, and test a rollback. Add no backend services for the current static app.

### App Runner, existing customers only

AWS states that App Runner is no longer accepting new customers and directs new workloads toward ECS Express Mode. Existing customers can continue using it. Do not make App Runner the launch plan for someone starting AWS now. [AWS availability notice](https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html).

For comparison, an existing customer's 1-vCPU, 2-GB CMS instance has $10.22 monthly provisioned memory at $0.007 per GB-hour × 2 × 730. Sixty active vCPU-hours add $3.84 at $0.064. Allocate $20 for a small database, $0.12 for 5 GB S3 media storage, $3 for logs and backups, and $0.10 for the static frontend. The planning total is $37.28 each month, or $447.36 each year, before additional networking or media delivery charges. Database and operational allocations are allowances, not selected-SKU quotes. [App Runner rates](https://aws.amazon.com/apprunner/pricing/).

Private database networking may require a VPC connector and additional egress configuration. Keep uploads in S3 and the database outside the container. There is no reason to accept these extra components for the initial gallery requirement.

### ECS Fargate + RDS + S3

Use this when there is a wider AWS application requirement and an owner for infrastructure. One CMS task is not a highly available deployment.

| Component | Monthly model |
| --- | ---: |
| One Linux x86 task, 0.5 vCPU and 2 GB, 730 hours | $21.27 |
| Application Load Balancer, $0.0225 × 730 | $16.43 |
| Low ALB capacity usage allowance | $1.00 |
| Three public IPv4 addresses, $0.005 × 730 × 3 | $10.95 |
| Small single-AZ RDS PostgreSQL and storage allowance | $20.00 |
| S3 media storage, 5 GB at approximately $0.023 | $0.12 |
| Logs, registry, backup and request allowance | $3.00 |
| Static frontend residual allowance | $0.10 |
| Total, using rounded component budgets | $72.87 |

Fargate compute uses the published per-second rates. Other allowances need a region-specific calculator estimate before purchase. The three IPv4 addresses represent one task plus a two-zone public ALB. Extra addresses, tasks, or load balancers change the result. [Fargate rates](https://aws.amazon.com/fargate/pricing/), [ALB rates](https://aws.amazon.com/elasticloadbalancing/pricing/), [public IPv4 rates](https://aws.amazon.com/vpc/pricing/), [RDS pricing](https://aws.amazon.com/rds/postgresql/pricing/).

This lean example avoids a NAT gateway by giving the task outbound access through a public address with tightly restricted inbound access. A private-task design requires pricing NAT or VPC endpoints separately. Serving 40 GB of media through a suitable CloudFront distribution can fit its Free allowance, but S3 operations and any new distribution configuration still need review.

Setup path: define infrastructure as code, create RDS and secrets, build a pinned CMS image, push it to a registry, configure the ECS service and ALB, attach S3 uploads, and restrict database access. Then configure exports, logs, health checks, CMS permissions, deployment migrations, and recovery. ECS Express Mode can automate some setup but still bills for its underlying resources.

### Lightsail

A Linux Lightsail instance with public IPv4 is $12 each month for 2 GB memory or $24 for 4 GB. The latter is the safer starting point for a CMS, PostgreSQL, and deployment tooling. Its bundle includes 80 GB disk and 4 TB transfer in the cited configuration. [Lightsail pricing](https://aws.amazon.com/lightsail/pricing/).

Use $24 server + $2 snapshot storage allowance + $1 offsite export allowance = $27 each month, or $324 each year. Snapshot charges depend on retained blocks. The two backup figures are planning reserves. Keep the public site on Pages and run the CMS on Lightsail, following the VPS setup below.

## 7. GCP architectures

### Firebase Hosting + Sanity

Use Firebase Hosting for this static Vite app, not Firebase App Hosting. Firebase Hosting includes CDN delivery and custom-domain TLS. Its usage guide describes 10 GB stored and 10 GB monthly transfer at no cost. Additional Blaze transfer is $0.15 per GB. [Hosting quota guide](https://firebase.google.com/docs/hosting/usage-quotas-pricing).

There is a documentation discrepancy: the general pricing table still expresses transfer as 360 MB per day. Check the project's current console and terms before promising how a traffic spike behaves. The base model uses only 5 GB monthly frontend transfer, spread across the month. Spark can disable serving after free limits are exceeded. [Firebase pricing table](https://firebase.google.com/pricing).

Under that model, frontend and Sanity total $0. If Firebase delivers all 45 GB, approximate monthly paid transfer is `35 × $0.15 = $5.25`, or $63 each year, using the usage guide's monthly allowance. A daily allowance can produce a different bill or interruption pattern.

Setup path: create a Firebase project, configure Hosting with `dist/` and SPA rewrites, connect CI, pin the CLI and runtime, add the custom domain, and set release retention. Keep CMS images on their image CDN. Test direct links and publishing before DNS cutover. Use Blaze only with an understood billing arrangement.

### Cloud Storage + Cloud CDN

Cloud Storage alone does not provide the complete custom-domain HTTPS and CDN setup in this architecture. Add an external Application Load Balancer, certificate, backend bucket, URL map, and Cloud CDN.

| Component | Monthly base projection |
| --- | ---: |
| Global forwarding-rule charge, $0.025 × 730 | $18.25 |
| CDN delivery, 5 GiB × $0.08 for North America | $0.40 |
| CDN lookups, 100,000 × $0.0075 per 10,000 | $0.075 |
| Frontend storage, fill, operations, and DNS allowance | $0.395 |
| Total | $19.12 |

The model allocates $0.395 to minor charges rather than pretending to know cache misses. Delivering all 45 GiB adds about $3.20 for CDN egress alone, before additional fill and requests. The fixed load-balancer charge removes much of the savings at this scale. [Load-balancer pricing](https://cloud.google.com/load-balancing/pricing), [CDN delivery and lookup pricing](https://cloud.google.com/cdn/pricing), [Storage pricing](https://cloud.google.com/storage/pricing).

Setup path: upload static files, configure the backend bucket and CDN, reserve the frontend address, attach managed TLS and the domain, and define URL handling. GCS error-page configuration is not automatically equivalent to a working React Router fallback with correct status codes. Test each deep route and missing asset. Firebase Hosting is the easier GCP choice for this SPA.

### Cloud Run + Strapi or Payload + Cloud SQL + GCS media

Architecture: Firebase serves the frontend. Cloud Run hosts the CMS. Cloud SQL holds PostgreSQL data. A separate Cloud Storage bucket holds uploads. Build snapshots keep public pages available while the CMS scales from zero.

Request-based Cloud Run has recurring free allowances of 180,000 vCPU-seconds, 360,000 GiB-seconds, and 2 million requests each month, aggregated under the applicable billing account. Ten active hours at 1 vCPU and 2 GiB use 36,000 vCPU-seconds and 72,000 GiB-seconds, inside those allowances if other workloads have not consumed them. [Cloud Run pricing](https://cloud.google.com/run/pricing).

| Component | Monthly base projection |
| --- | ---: |
| Cloud Run request-based compute, min instances 0 | $0.00 under stated free allowances |
| Cloud SQL db-g1-small, $0.035 × 730 | $25.55 |
| 10 GiB SQL SSD storage, approximately $0.17 per GiB | $1.70 |
| SQL backup storage allowance | $0.80 |
| GCS media originals, 5 GiB at approximately $0.02 | $0.10 |
| GCS generated image variants, 5 GiB at approximately $0.02 | $0.10 |
| Media egress reserve, 40 GiB × $0.12 | $4.80 |
| Storage operation allowance | $0.05 |
| Registry, build, and logging allowance | $2.00 |
| Firebase frontend, 5 GB delivery | $0.00 |
| Total | $35.10 |

The media-egress reserve is conservative and does not subtract account-specific eligible free transfer. SQL shared-core machines do not carry the Cloud SQL SLA. SQL, storage, registry, backup, and network charges do not disappear when Cloud Run scales to zero. The model is a modest single-instance deployment, not a highly available database design. [Cloud SQL shared-core and storage pricing](https://cloud.google.com/sql/pricing?hl=en), [Cloud Storage prices and free allowances](https://cloud.google.com/storage/pricing).

GCS does not resize images just because they are in a bucket. Configure the CMS to generate variants or add a bounded image-processing job. The extra 5 GiB storage above budgets variants. More transformations or larger outputs change compute, storage, and transfer usage.

Setup path:

1. Containerize a supported CMS runtime and build its admin application into the image.
2. Create Cloud SQL in the same region. Configure a supported connector and least-privilege service identity.
3. Configure the CMS upload adapter for GCS. Grant the runtime access only to the required bucket.
4. Store credentials in Secret Manager. Set min instances to zero initially, cap instances, and limit database connections per instance.
5. Configure migrations as an explicit deployment step. Do not let competing instances race schema changes.
6. Add a stable CMS domain, backups, exports, and a tested restore procedure. Price any extra load balancer used for the domain.
7. Connect publish events to the static frontend deployment and test editor login after a cold start.

A warm instance improves the editing experience but introduces idle CPU and memory charges. Reserve another $20 each month as a rough warm-instance planning amount and obtain a calculator estimate for the chosen billing mode. Do not present the cold-start configuration as equally responsive. In-memory schedules and background jobs also need explicit design under request-based CPU allocation.

## 8. Jamstack platform choices

### Cloudflare Pages

Pages is the best match for the current artifact. Free permits 500 builds each month, with a 25 MiB maximum individual asset and other project limits. Keep large originals out of the deployment. Native SPA fallback applies when no top-level `404.html` exists, but verify deep-link behavior in the actual configuration. [Pages limits](https://developers.cloudflare.com/pages/platform/limits/), [SPA serving behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/).

Pages Functions use Workers quotas. R2 storage, image transformation products, Workers compute, and paid support are separate products. A paid Cloudflare zone plan is not required merely to host this static site.

For a future self-hosted CMS, R2 is a possible media store. Standard storage includes 10 GB-months, 1 million Class A operations, and 10 million Class B operations at no charge, with no direct egress charge. Beyond that, storage is $0.015 per GB-month. It is storage, not a CMS or automatic image optimizer. Use a production custom domain and a tested compatible CMS adapter. [R2 pricing](https://developers.cloudflare.com/r2/pricing/).

### Vercel

Vercel Hobby is for non-commercial personal use, so it is not the right plan for a venue marketing site. Budget Pro at $20 each month for one developer seat, before additional usage or seats. Sanity-only editors need not be Vercel developers. [Hobby eligibility](https://vercel.com/docs/plans/hobby), [Vercel pricing](https://vercel.com/pricing).

Setup path: import the repository, select Vite, configure the content-export build and `dist/`, add React Router rewrites, set the domain, and connect a CMS deploy hook. Configure spending controls. At $240 each year before any CMS upgrades, its savings are modest for this static site.

### Netlify

New credit-based plans currently provide 300 credits for Free, 1,000 for Personal at $9 each month, and 3,000 for starting Pro at $20. Bandwidth costs 20 credits per GB, web requests cost 2 credits per 10,000, and a production deployment costs 15 credits. Do not use old 100 GB free-bandwidth assumptions for a new credit-based account. [Current credit schedule](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/).

For the base split-media workload:

- 5 GB frontend bandwidth consumes 100 credits.
- 100,000 requests consume 20 credits.
- Four production deployments consume 60 credits.
- Total is 180 credits. Free fits, with 120 credits left for other metered usage.

If Netlify serves all 45 GB, the total becomes 980 credits, barely inside Personal before other usage. Twenty production deployments would consume Free's entire 300-credit allowance before serving any traffic. Free has a hard credit limit. On paid plans, review recharge settings rather than assuming $9 is a ceiling.

Setup path: connect Git, configure build and publish directory, add SPA redirects, connect the CMS publish hook, and test the credit calculation against the dashboard. Netlify can be convenient, but frequent content deployments need a budget.

## 9. VPS and self-hosted options

Keep the public website on Pages. Run only the CMS, PostgreSQL, and management tools on the VPS. Use object storage for media where practical. A server outage then prevents editing without necessarily taking the public static site down.

The following table includes a provider VM backup. It excludes labor and an additional offsite export destination. Add a $1 monthly planning reserve for small database exports if no existing destination is available. A provider snapshot alone is not a complete backup strategy.

| Provider and size | Server | Provider backup | IPv4 | Monthly total | Annual total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Hetzner CX23, 4 GB, EU | $6.49 | $1.298 | $0.60 | $8.39 | $100.66 |
| Hetzner CX33, 8 GB, EU | $9.99 | $1.998 | $0.60 | $12.59 | $151.06 |
| DigitalOcean regular Basic, 2 GiB | $12.00 | $2.40 weekly | Included | $14.40 | $172.80 |
| DigitalOcean regular Basic, 4 GiB | $24.00 | $4.80 weekly | Included | $28.80 | $345.60 |
| Akamai/Linode shared CPU, 2 GB, North America | $12.00 | $2.50 | Included | $14.50 | $174.00 |
| Akamai/Linode shared CPU, 4 GB, North America | $24.00 | $5.00 | Included | $29.00 | $348.00 |

Hetzner figures use its published USD prices directly, not an invented exchange rate. Its current cost-optimized page marks CX23 unavailable, so the cheapest example is not a promise that it can be ordered. Confirm stock and location. The cited EU CX23 includes 40 GB disk and 20 TB transfer. US locations have different transfer allowances. [Hetzner June 2026 prices](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/), [availability and specifications](https://www.hetzner.com/cloud/cost-optimized/), [IPv4 charges](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), [backup billing](https://docs.hetzner.com/cloud/billing/faq/).

DigitalOcean's regular 2 GiB and 4 GiB plans include 50 GiB and 80 GiB disk, with 2,000 GiB and 4,000 GiB transfer. Weekly backups cost 20% of the VM. Daily backups cost 30%. [Droplet pricing](https://www.digitalocean.com/pricing/droplets), [backup pricing](https://docs.digitalocean.com/products/backups/details/pricing/).

Akamai's North American shared CPU plans include 50 GB and 80 GB disk, with 2 TB and 4 TB transfer for the sizes above. Verify the selected region and backup add-on before ordering. [CPU prices](https://www.akamai.com/cloud/pricing/cpu), [backup prices](https://www.akamai.com/cloud/pricing/backups).

The 2 GB examples show the lower cost boundary, not the recommended combined deployment. Use at least 4 GB for the CMS, PostgreSQL, and deployment manager. Build images in CI to avoid running compilers alongside the live database. Prove memory use with the selected CMS and a representative bulk upload.

### Coolify and Dokploy

Coolify self-hosting is free. Its hosted management starts at $5 each month and still requires separately rented compute. Dokploy has a free self-hosted core and separate paid editions. Pin the chosen version and review its license rather than assuming every edition has the same terms. [Coolify pricing](https://coolify.io/pricing), [Dokploy edition comparison](https://docs.dokploy.com/docs/core/differences).

Both can simplify containers, certificates, and deployments. Neither removes responsibility for Linux updates, database recovery, secrets, capacity, or a failed disk. Avoid paying for hosted management on top of a tiny VPS just to publish galleries.

### VPS setup path

1. Choose a supported Linux image and an available 4 GB or larger server. Enable MFA, key-based access, and a firewall.
2. Install either Coolify or Dokploy. Restrict its administrative interface and keep a recovery access path.
3. Deploy a pinned Strapi or Payload container and PostgreSQL. Keep PostgreSQL private to the container network.
4. Configure persistent volumes and an external media bucket, or explicitly back up local uploads if using a volume.
5. Create staff roles, publication rules, and the same section schema described above.
6. Connect the frontend through a content-export job and publish hook. Add health monitoring and disk alerts.
7. Schedule consistent database exports and media backups to a separate destination. Encrypt sensitive exports and keep recovery credentials separately.
8. Restore the CMS and a sample gallery onto a clean environment. Record the recovery steps and responsible person.
9. Schedule patches, version upgrades, backup checks, and a quarterly restore exercise.

A snapshot of a running VM is not proof that PostgreSQL can be restored consistently. Media stored in another service also needs its own recovery procedure. A single VPS and its database are one failure domain.

## 10. AWS versus GCP for a first-time user

These setup and maintenance estimates are engineering judgments for this project. They exclude the common CMS schema, gallery UI, content migration, and staff training.

| Choice | Infrastructure setup estimate | Recurring technical care | Main surprise |
| --- | --- | --- | --- |
| Pages + hosted CMS | 2 to 4 hours | 15 to 30 minutes each month | CMS quota exhaustion or an unobserved failed publish |
| Firebase Hosting + hosted CMS | 2 to 5 hours | 15 to 30 minutes each month | Transfer limits and billing-plan behavior |
| AWS Amplify + hosted CMS | 3 to 6 hours | 15 to 45 minutes each month | Build and transfer charges, retained deployment storage |
| S3 + CloudFront + hosted CMS | 4 to 8 hours | 30 to 60 minutes each month | IAM, cache policy, pricing-mode selection, uncovered resources |
| GCP Cloud Run CMS + SQL | 8 to 16 hours | 1 to 2 hours each month | Persistent database costs, cold starts, media processing |
| AWS ECS CMS + RDS | 12 to 24 hours | 1 to 3 hours each month | ALB, IPv4, NAT, logs, database and secret configuration |
| VPS CMS + database | 8 to 16 hours | 1 to 3 hours each month | Security updates, failed backups, disk exhaustion, recovery |

AWS has more separately billed building blocks to understand in the ECS path. GCP Cloud Run is easier to start with a container, but PostgreSQL and uploads still need durable services. Firebase Hosting and Amplify are much easier first deployments than assembling cloud networking manually.

Neither cloud is inherently more reliable for this site. Architecture matters. A static CDN deployment has fewer runtime dependencies than a visitor request that must reach a CMS and database. Free service tiers generally do not buy a contractual uptime guarantee or an on-call engineer.

For either cloud, configure owner notifications, budget alerts, restricted deployment credentials, capped container scaling, log retention, and resource inventory. Budget alerts notify; they are not a universal hard spending cap. Account for resources created by tutorials, including idle databases and load balancers. Do not test a production budget by automatically disabling the live site.

### Labor changes the comparison

At an illustrative $75 per technical hour, 15 to 30 minutes of monthly attention costs $225 to $450 each year. One to three hours costs $900 to $2,700. These are opportunity-cost estimates, not vendor charges. Squarespace also needs content maintenance, so compare only the additional technical work.

A $0 hosting bill therefore does not promise a $0 operating cost. At $75 per hour, replacing a $300 annual subscription saves enough to cover only four additional technical hours each year. Choose the custom site for its design and workflow benefits as well as cash savings.

## 11. Traffic sensitivity and billing limits

The 40 GB image allocation averages 8 MB per visit. At that same image weight, 100 GB represents about 12,500 visits before other bandwidth consumption. This is a planning threshold, not a request limit or measured audience size.

| Scenario | Frontend traffic | CMS image traffic | Consequence |
| --- | ---: | ---: | --- |
| Base, 5,000 visits | 5 GB | 40 GB | Pages + Sanity Free fits modeled quotas. |
| Same audience, oversized galleries | 5 GB | 160 GB | Sanity Free no longer fits. Optimize images or change the plan. |
| Four times the audience | 20 GB | 160 GB | Pages static delivery remains within its unmetered model. CMS bandwidth and other hosts need review. |

At 160 GB Sanity delivery, Growth adds about `60 × $0.30 = $18` bandwidth beyond its included amount. Three billable seats plus that bandwidth total $63 each month, or $756 each year. A Free project should not be assumed to continue serving that workload by charging only $18. [Sanity overage and blocking rules](https://www.sanity.io/docs/platform-management/plans-and-payments).

For Netlify at 20 GB frontend delivery and four times the modeled requests, credits are `400 + 80 + 60 = 540`, before other usage. Personal fits that model. If its frontend also delivers the 160 GB of images, its bandwidth credits alone become 3,600. Media placement changes the economics more than the SPA bundle does.

For Amplify, an extra 100 GB delivered adds $15 at the paid rate. For Firebase, 100 GB of transfer above its applicable free allowance also adds $15. GCP Cloud CDN's North American rate adds approximately $8 per extra 100 GiB, with requests and cache fill separate. These are marginal illustrations using the rates cited in the provider sections.

## 12. Recommended implementation roadmap

### Phase 1: Confirm ownership and scope

1. Put the domain, hosting, CMS, and source repository under farm-owned accounts with two recovery contacts.
2. Confirm the four section names, page placements, number of staff, and whether administrator-level CMS access is acceptable.
3. Inventory Squarespace dependencies: domain registration, email DNS, forms, newsletters, analytics, redirects, scheduling, and commerce.
4. Confirm whether the current CRM link remains the inquiry destination. Price a new form service only if reliable website submission is part of the scope.
5. Record the current Squarespace renewal amount and cancellation date. Keep the subscription during migration.

Deliverable: an approved account and feature inventory, with a chosen CMS permission model.

### Phase 2: Build one gallery pilot

1. Create a Sanity project and Studio schema for `VenueSection` and ordered photo entries.
2. Add ten approved Rose Garden photos with alt text, credits, cover selection, and crops.
3. Add a content-export step that validates the published schema and writes a gallery manifest.
4. Create a shared gallery component and connect one page to the manifest. Keep existing assets as a deliberate fallback.
5. Configure responsive image delivery and loading states.
6. Ask a non-technical staff member to upload, reorder, preview, publish, and remove an image.

Deliverable: a working staff workflow on a staging deployment. If permissions or editor usability fail, run the same ten-photo test in Tina before choosing a paid plan.

### Phase 3: Connect staging deployment and publication

1. Pin the package manager, Node-compatible build runtime, and dependency lockfile. Use Bun for this repository unless the project adopts pnpm.
2. Run the existing build in CI after the content export and publish `dist/` to Pages. This is a future implementation step, not a build performed for this report.
3. Add public project ID and dataset configuration. Keep write tokens, preview credentials, and deploy-hook secrets out of every `VITE_*` variable.
4. Configure the publish hook with draft filtering, retry handling, and a publish-status check.
5. Configure the production domain in staging documentation. Use a temporary hostname for acceptance testing first.

Vite embeds `VITE_*` values in public client assets. Only public read configuration belongs there. Public content does not require an editor token.

### Phase 4: Migrate and verify

1. Connect all four section records and replace each intended hardcoded gallery placement.
2. Preserve existing public URLs and prepare permanent redirects for changed paths.
3. Confirm rights, credits, alt text, crop behavior, and file sizes for imported photos. Preserve the local archive separately.
4. Verify mobile and desktop layouts, keyboard access, direct route refresh, missing assets, loading and empty galleries, and failed CMS export.
5. Confirm a publish reaches the correct section, a draft stays out of the public site, and a failed deployment retains the previous version.
6. Export content and media, restore a sample gallery, and roll back a frontend deployment.
7. Test the actual inquiry handoff. A prepared email is not a delivered inquiry. Submit and confirm receipt through the existing CRM only in an authorized acceptance test.
8. Inspect route metadata, canonical URLs, sitemap, social previews, consent requirements, and public audit controls.

Deliverable: an acceptance record with observed results, remaining limitations, and a named maintainer.

### Phase 5: Cut over and operate

1. Save the current DNS records and rollback instructions. Lower TTL in advance where useful.
2. Change only the website records after acceptance and owner authorization. Preserve MX, SPF, DKIM, DMARC, and unrelated CRM records.
3. Verify apex and `www` HTTPS, redirects, key routes, galleries, and inquiry handoff on the live domain.
4. Observe the new site through a normal publishing cycle. Keep Squarespace available for rollback until the owner accepts the cutover.
5. Cancel only the website subscription when approved. Retain domain renewal and email services where needed.
6. Review hosting usage, CMS bandwidth, failed deployments, account access, and backups each month.

A CMS publish is a deliberate public-content action. Do not treat an upload as approval to publish every photo automatically.

## 13. Budget and acceptance decision

For the recommended trusted-team configuration, approve a $0 hosting and CMS target with a $10 monthly contingency and a review trigger at 70% of the CMS's bandwidth allowance. The contingency covers small auxiliary costs. It does not remove free-plan limits or fund three Growth seats.

Allow an estimated 16 to 32 technical hours for the first CMS integration, gallery migration, deployment, recovery check, and staff handoff. At $75 per hour that is $1,200 to $2,400 in one-time labor. This estimate assumes the design remains as built and covers only the bounded gallery workflow. Additional SEO work, a new inquiry backend, and broader content editing need separate estimates.

The project is ready to choose Pages + Sanity Free if staff can complete the pilot, the owner accepts trusted-administrator access, and optimized photo delivery fits the quota. If any of those conditions fail, compare the paid CMS total with the actual Squarespace renewal before proceeding. There is no need to operate AWS containers or a VPS solely to manage four venue galleries.

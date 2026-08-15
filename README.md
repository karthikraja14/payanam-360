# Payanam 360

**Every road. One app.** · by Vystra

An India-ready, multi-energy journey intelligence product by Vystra, launching EV-first in Tamil Nadu. It recommends a primary and backup charging stop, and explains *why* each stop is trusted: source, freshness, evidence type, recent reports, compatibility, amenities and historical reliability. Petrol, diesel and CNG follow through the same journey experience once legitimate data sources are connected.

> This repository ships with illustrative demo records, not a live station directory. The UI labels them accordingly. Production ingestion requires a licensed/open source or a written operator partnership.

## What works

- Chennai-origin demo journeys to Coimbatore, Madurai and Bengaluru
- EV, petrol, diesel and CNG journey modes
- All-retailer fuel model separating retailer, COCO/CODO/DODO/CLDO ownership and branded formats such as Ghar
- Vehicle range, battery and reserve-aware stop scoring
- Primary and backup stop recommendations
- Separate operator status, observed freshness and computed confidence
- Station details, nearby amenities and persistent community-report API
- Installable/offline-friendly PWA shell
- Dependency-free Node server, tests and GitHub Actions
- PostgreSQL/PostGIS production schema and OCPI-oriented ingestion design

## Run locally

Use Node.js 20 or later:

```bash
npm start
```

Open `http://localhost:4173`. Run verification with `npm test` or `npm run check`. There are no runtime packages to install.

## Product guardrails

- “Live” is a source claim with a timestamp, never a guarantee.
- Confidence is an explainable estimate, never a substitute for a confirmed session.
- Conflicting operator and community evidence remains visible.
- Counts always include coverage, source and synchronization time.
- No scraping of closed apps or copying of proprietary place databases.
- Payments, reservations and remote start remain outside MVP until contracted APIs exist.

## Repository map

- `app/` — installable web client and demo dataset
- `server/` — static server and health endpoint
- `database/schema.sql` — Postgres/PostGIS production model
- `docs/product-spec.md` — MVP, personas, metrics and roadmap
- `docs/research.md` — August 2026 market/data-source research
- `docs/architecture.md` — trust engine and system design
- `docs/ingestion.md` — authorized source onboarding and freshness rules
- `docs/implementation-plan.md` — solo-founder delivery plan
- `tests/` — deterministic trust-scoring tests

## Near-zero-cost path

Start with this PWA, static hosting, a free Postgres tier and a scheduled ingestion worker. Use OpenStreetMap-derived services only within their licenses and usage policies; use a commercial tile/routing host or self-host once traffic grows. Add CPO/TNEV/BEE feeds only after access is explicitly granted. Keep telemetry history compact and aggregate older observations.

## Current limits

The route geometry and stations are demo fixtures. Reports persist as JSONL for a controlled single-instance pilot; deploy PostgreSQL before horizontal scaling. There is no account system, navigation provider, live telemetry, payment or CPO control. These are deliberate data/partnership boundaries, not production claims.

## License

Code is offered under MIT. Demo place facts are synthetic/illustrative and must be replaced before launch.

# Architecture

## Solo-founder shape

The MVP is a dependency-free PWA plus a small HTTP service. Production evolves into one modular backend, Postgres/PostGIS, object storage for raw authorized payloads and scheduled workers. Avoid microservices until operating load proves a boundary.

```text
Authorized CPO / TNEV / BEE / OSM-derived / user reports
                         |
                  source adapters
                         |
              validate -> normalize -> dedupe
                         |
                Postgres + PostGIS
                   /             \
          confidence engine    route engine
                   \             /
                    versioned API
                         |
                         PWA
```

## Boundaries

- Source adapters preserve raw IDs, source timestamps, receipt timestamps and licensing metadata.
- Canonical stations are separate from EVSEs and connectors.
- Observations are append-only; current status is a projection, never overwritten history.
- Trust computation is deterministic and versioned. Conflicts are data, not errors.
- Route planning requests compatible stations inside a corridor, calculates energy legs, rejects reserve violations, and returns primary plus backup.
- Amenity records retain their independent source and freshness.

## Production API

`GET /v1/stations?bbox=`, `GET /v1/stations/:id`, `POST /v1/journeys/plan`, `POST /v1/reports`, `GET /v1/coverage`, and operator-authenticated ingestion endpoints. Use idempotency keys for writes, cursor pagination, rate limits, schema validation and structured logs.

## Security/privacy

Secrets remain server-side. Encrypt transport and managed storage; rotate feed credentials; least-privilege service roles; row-level policies for user data. Store coarse location proof only long enough for anti-abuse review. Never expose OCPI tokens, session identifiers or personal movement history. Add account deletion/export before public accounts.

## Reliability

Ingestion is idempotent with quarantine for malformed records, per-source circuit breakers and observable lag. A stale-feed job downgrades UI status automatically. Cache public reads; keep route planning functional with last-known data while labelling age.

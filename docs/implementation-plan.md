# Implementation plan

## Weeks 1–2: validate the wedge

Interview 15–20 Tamil Nadu intercity EV drivers. Test whether the confidence explanation and backup stop alter decisions. Measure false-green stories and recruit five corridor verifiers. Replace demo fixtures only with permissioned data.

## Weeks 3–4: real backend

Provision a free Postgres/PostGIS project; apply the schema; add typed API validation, anonymous report persistence, moderation queue and coverage endpoint. Integrate one compliant routing service. Add privacy notice, abuse limits and automated backups.

## Weeks 5–8: first authorized corridor

Secure one CPO or official feed agreement for Chennai–Bengaluru or Chennai–Madurai. Implement its adapter, freshness monitoring and status history. Conduct physical verification; publish measured coverage rather than a statewide marketing count.

## Months 3–6

Add accounts only when retention needs them, push alerts for planned-stop degradation, offline trip packs, vehicle charging curves and operator deep links. Seek two more feeds. Pilot claimed-station updates and amenity partners. Defer universal payment.

## Fuel phase

After EV journey retention is proven, introduce an energy-mode abstraction, current official/licensed outlet and price ingestion, then time-stamped community stock reports. Never represent fuel stock as live without a verified partner feed.

## Release gates

- Legal/source register complete for every production field
- No secrets in client or repository
- 90%+ unit/API coverage for scoring and ingestion transforms
- Stale source automatically downgrades status
- Accessibility and low-bandwidth checks pass
- Restore drill and account deletion tested before accounts launch

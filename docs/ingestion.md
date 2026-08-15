# Data ingestion and provenance

## Source acceptance gate

Before connecting a source record: owner, access method, explicit authorization/open license, allowed fields, redistribution rights, retention, rate limits, attribution, refresh expectation and contact. Closed mobile/web apps are not sources merely because their data is visible.

## Priority

1. Contracted CPO OCPI/API: locations, EVSE status, tariffs and anonymized session success when granted.
2. TNEV/BEE open API or written data agreement. A public website does not automatically grant bulk reuse.
3. OpenStreetMap data under ODbL with attribution and a compliant routing/tile provider.
4. First-party user reports with consent and moderation.
5. Manually verified partner submissions.

For fuel outlets, the adapter must map brand, land/asset ownership and operator separately. COCO/CODO/DODO/CLDO is accepted only from an OMC publication/API or a verified outlet claim backed by reviewable evidence. Otherwise the canonical value remains `UNKNOWN`.

## Pipeline

Fetch with conditional requests; archive a payload hash and run metadata; validate source schema; map into canonical types; spatial/name deduplicate without deleting source identities; append observations; refresh current projections; compute confidence; publish coverage and lag metrics. Failed records go to quarantine and never silently become “unknown.”

## Freshness language

- `Live · n min ago`: contracted machine telemetry observed within the source SLA.
- `Session succeeded · n min ago`: anonymized, authorized completed-session evidence.
- `Reported · n min ago`: moderated community or station-owner report.
- `Last listed · date`: static registry record.
- `Unknown`: no evidence within its usable horizon.

Provider timestamps and our receipt timestamps are both shown internally. Clock skew, replayed timestamps and source outage trigger warnings.

## Community abuse controls

Rate limits, device/account reputation, optional coarse proximity proof, duplicate collapse, contradiction detection and human review. One report never silently overrides fresh operator telemetry; it creates a visible conflict and reduces confidence.

## Counts

Publish locations, EVSEs and connectors separately, filtered by geography and active/last-seen rule. Every count includes source set, as-of timestamp, deduplication version and percent with live/recent evidence.

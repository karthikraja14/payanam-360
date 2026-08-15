# Market and data research — 15 August 2026

## Findings

India's operator apps are no longer simple pin maps. Tata Power describes real-time availability, trip planning, reservations, session monitoring and payment inside its own network; Statiq describes live status, smart routing and payments. TNEV presents real-time charger discovery and a policy resource for mandatory CPO onboarding/data sharing. Therefore a generic map or basic trip planner is not a defensible wedge.

The unresolved user problem is cross-network truth. Availability is an assertion, not proof that a vehicle can authenticate and charge. The differentiated product is an explainable aggregation/trust layer: operator status + evidence age + recent successful sessions + community contradictions + historical reliability + a viable backup.

## Legitimate source matrix

| Source | Useful data | Access decision | MVP treatment |
|---|---|---|---|
| Contracted CPO / OCPI | locations, EVSE status, tariffs, sessions | Partner credentials and terms required | adapter interface only |
| TNEV | Tamil Nadu discovery/status | request API/data agreement; do not infer reuse rights | research lead |
| BEE EV Yatra / national database | national public charging registry | 2024 guidelines say open APIs for non-confidential data; confirm endpoint/terms | future authoritative registry |
| OpenStreetMap | roads and some POIs | ODbL attribution; public tile/Nominatim services have usage limits | suitable with compliant provider |
| User reports | observed working/slow/failed/access | first-party consent and moderation | MVP interaction |
| OMC/PPAC/data.gov.in | outlets/prices | datasets vary in freshness; no universal live inventory feed identified | phase two, source-labelled |
| Closed competitor apps/sites | visible listings/status | no bulk reuse without permission | prohibited |

## Real-time feasibility

OCPI supports locations, real-time charge-point status, tariffs and sessions. It is an interoperability standard, not a public feed: an agreement and credentials are still needed. “Used five minutes ago” should only come from an authorized successful session/CDR signal or a clearly labelled user report. Polling frequency must follow partner SLA; freshness automatically decays.

## Fuel extension

The government open-data catalog contains outlet datasets, but one located national catalog was last updated in 2014 and is unsuitable as current station truth. Public price information is not the same as station inventory. Launch fuel discovery later using current licensed/official outlet and price data; show availability only as partner telemetry or time-stamped community reporting.

HPCL's official materials distinguish DODO, CODO and COCO by ownership and operation, and its retail material also recognizes CLDO/variants. HPCL says its automated outlet systems carry inventory information to its central system, but that does not make inventory a public API. Payanam 360 therefore models these classifications while requiring an explicit OMC agreement before claiming live fuel stock.

## Competitor gap

Network apps optimize their own charging/payment ecosystem. Aggregator/community products improve coverage but may mix evidence quality. Payanam 360 wins only if it is operator-neutral, transparent about provenance, honest about unknowns, strong on backups, and locally excellent on each launch corridor's amenities and accessibility.

## Primary references

- [BEE 2024 charging infrastructure guidelines](https://beeindia.gov.in/sites/default/files/Guidelines%20and%20Standards%20for%20EVCI%20dated%2017-09-2024_compressed.pdf)
- [BEE EV charging resources and October 2025 station data](https://www.beeindia.gov.in/show_content.php?lang=1&level=2&lid=67&ls_id=345)
- [TNEV policy resources](https://tnev.tn.gov.in/resources)
- [OCPI protocol overview](https://ocpi-protocol.com/)
- [Tata Power EZ CHARGE feature overview](https://www.tatapower.com/blogs/the-top-ev-charging-app-in-india-just-got-smarter-new-features)
- [Statiq official product overview](https://www.statiq.in/)
- [OpenStreetMap copyright and licensing](https://www.openstreetmap.org/copyright)
- [Government open-data retail outlet catalog](https://www.data.gov.in/catalog/state-wise-and-company-wise-retail-outlets)
- [PPAC statewise retail-outlet resources](https://ppac.gov.in/index.php/infrastructure/retail-outlets)
- [HPCL official outlet-model description](https://www.hindustanpetroleum.com/documents/pdf/HPCL_RFQ_Asset_Monetisation_Securitization_of_SSLF.pdf)

This is product research, not legal advice. Re-check terms and obtain written permission before production ingestion.

# Product specification

## Promise

“Tell me the best place to stop—and how certain you are.” Nambikkai is one journey interface across operators, beginning with EV travel in Tamil Nadu. It does not pretend to be the charger network or promise universal payment.

## Primary user and job

An EV car owner planning an intercity journey wants compatible, reachable stops and a credible backup without juggling operator apps. The anxiety is not discovering a pin; it is arriving at a broken, blocked or occupied charger with insufficient range.

## MVP

Input: origin, destination, vehicle/range, starting state of charge and reserve. Output: route summary, primary and backup stops, expected arrival energy, compatible power, detour, amenities and a confidence explanation. Users can report working, slow, failed or inaccessible.

Each station view separates: current provider assertion; observation time; received time; evidence kind; last successful session; community reports; historical uptime; conflicts; calculated confidence. “Unknown” is a valid and preferable result.

## Not MVP

Universal payment/start-stop, guaranteed reservations, home charging, insurance/service, AI assistant, native apps, owned hardware, petrol/diesel inventory, business dashboard and predictive infrastructure siting.

## Scoring contract

Confidence uses evidence authority (35%), freshness (25%), historical reliability (30%) and corroborating reports (10%), minus a visible conflict penalty. Route rank then combines confidence, reachability, connector/power, detour and amenities. Weight changes must be versioned and back-tested; the UI must expose factors.

## Success metrics

- Planned journeys that include at least one viable backup
- Arrival verification rate
- False-green rate: recommended “available” chargers reported failed/inaccessible
- Coverage with evidence newer than 30 minutes, 24 hours and 7 days
- Repeat planners per month
- CPOs willing to provide authorized telemetry

The north-star is successfully completed intercity journeys, not station pins or registrations.

## Fuel extension

The shared model becomes an energy location with EVSEs or fuel products. Phase two adds petrol/diesel station discovery, official retail price where lawfully available, hours and amenities. Stock is shown only as “reported available” with source and age; no live-stock claim exists without a station/OMC feed. CNG and hybrid routing follow later.

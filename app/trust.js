export const freshnessWeight = minutes => minutes <= 5 ? 1 : minutes <= 30 ? .86 : minutes <= 120 ? .62 : minutes <= 1440 ? .35 : .12;
export function confidence(station) {
  const source = {operator:.95, official:.82, session:.9, community:.68, static:.3}[station.evidence] || .2;
  const freshness = freshnessWeight(station.ageMinutes);
  const reliability = station.reliability / 100;
  const reports = Math.min(station.successfulReports / 8, 1);
  const conflictPenalty = station.conflict ? .2 : 0;
  return Math.round(Math.max(0, Math.min(1, source*.35 + freshness*.25 + reliability*.3 + reports*.1 - conflictPenalty))*100);
}
export function rank(stations, rangeKm, battery, reserve) {
  const safeDistance = rangeKm * Math.max(0, battery-reserve) / 100;
  return stations.map(s => ({...s, confidence:confidence(s), reachable:s.distance <= safeDistance, score:confidence(s)*.65 + s.amenities.length*4 + Math.min(s.power,180)/18 - Math.max(0,s.detour-2)*2})).sort((a,b) => b.reachable-a.reachable || b.score-a.score);
}

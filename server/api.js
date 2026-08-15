const outcomes=new Set(['working','slow','failed','inaccessible']);
export function validateReport(input){
  if(!input||typeof input!=='object')return {ok:false,error:'JSON object required'};
  if(!/^[a-z0-9-]{2,80}$/.test(input.stationId||''))return {ok:false,error:'Invalid stationId'};
  if(!outcomes.has(input.outcome))return {ok:false,error:'Invalid outcome'};
  const observed=new Date(input.observedAt);if(Number.isNaN(observed.valueOf()))return {ok:false,error:'Invalid observedAt'};
  if(observed>Date.now()+300000||observed<Date.now()-604800000)return {ok:false,error:'observedAt outside accepted window'};
  return {ok:true,value:{stationId:input.stationId,outcome:input.outcome,observedAt:observed.toISOString()}};
}
export const outletModels={COCO:{label:'Company Owned, Company Operated',authority:'official-or-verified-only'},CODO:{label:'Company Owned, Dealer Operated',authority:'official-or-verified-only'},DODO:{label:'Dealer Owned, Dealer Operated',authority:'official-or-verified-only'},CLDO:{label:'Company Leased, Dealer Operated',authority:'official-or-verified-only'},UNKNOWN:{label:'Ownership not verified',authority:'default'}};
export const coverage={asOf:new Date().toISOString(),scope:'illustrative-demo',locations:{ev:7,fuel:7,cng:1},liveTelemetry:0,ownershipVerified:{COCO:3,CODO:3,DODO:0,CLDO:1},notice:'Counts are demo fixtures, not market coverage.'};

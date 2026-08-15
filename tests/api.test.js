import test from 'node:test';import assert from 'node:assert/strict';import {fuelRetailers,outletModels,outletPrograms,validateReport} from '../server/api.js';
test('all supported fuel outlet models are explicit',()=>assert.deepEqual(Object.keys(outletModels),['COCO','CODO','DODO','CLDO','UNKNOWN']));
test('validates a recent user report',()=>assert.equal(validateReport({stationId:'salem-coco',outcome:'working',observedAt:new Date().toISOString()}).ok,true));
test('rejects fabricated outcome values',()=>assert.equal(validateReport({stationId:'salem-coco',outcome:'live',observedAt:new Date().toISOString()}).ok,false));
test('supports public, private and joint-venture fuel retailers',()=>assert.deepEqual(new Set(fuelRetailers.map(r=>r.kind)),new Set(['public_omc','private','joint_venture','other'])));
test('keeps branded outlet programmes separate from ownership',()=>assert.ok(outletPrograms.some(p=>p.retailer==='BPCL'&&p.name==='Ghar'&&p.category==='highway_format')));

import test from 'node:test';import assert from 'node:assert/strict';import {outletModels,validateReport} from '../server/api.js';
test('all supported fuel outlet models are explicit',()=>assert.deepEqual(Object.keys(outletModels),['COCO','CODO','DODO','CLDO','UNKNOWN']));
test('validates a recent user report',()=>assert.equal(validateReport({stationId:'salem-coco',outcome:'working',observedAt:new Date().toISOString()}).ok,true));
test('rejects fabricated outcome values',()=>assert.equal(validateReport({stationId:'salem-coco',outcome:'live',observedAt:new Date().toISOString()}).ok,false));

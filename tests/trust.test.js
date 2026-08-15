import test from 'node:test';import assert from 'node:assert/strict';import {confidence,freshnessWeight,rank} from '../app/trust.js';
const base={evidence:'operator',ageMinutes:3,reliability:94,successfulReports:6,conflict:false,distance:100,amenities:[],power:60,detour:1};
test('fresh evidence outweighs stale evidence',()=>assert.ok(confidence(base)>confidence({...base,ageMinutes:2880})));
test('conflict reduces confidence by twenty points',()=>assert.equal(confidence(base)-confidence({...base,conflict:true}),20));
test('freshness buckets are deterministic',()=>assert.deepEqual([freshnessWeight(5),freshnessWeight(30),freshnessWeight(120),freshnessWeight(1440)],[1,.86,.62,.35]));
test('rank marks stops outside usable battery as unreachable',()=>assert.equal(rank([base],200,50,20)[0].reachable,false));

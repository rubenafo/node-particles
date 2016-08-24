/**
* @license
* Copyright 2016 Ruben Afonso, ruben@figurebelow.com
*
* This source code is licensed under the Apache license found in the
* LICENSE file in the root directory of this source tree.
**/

var assert = require ("assert");
var Emitter = require ("../js/Emitter.js").Emitter;
var Vector = require ("../js/Vector.js").Vector;

describe ("Emitter", function () {

  it ("initializes an emitter", function (){
    var emitter = new Emitter (new Vector(10,10), Vector.fromAngle(10,10));
  });

  it ("moves an emitter", function () {
    var emitter = new Emitter (new Vector(10,10), Vector.fromAngle(10,10));
    emitter.moveTo(new Vector(20,20));
    assert.deepEqual (emitter.position, new Vector(20,20));
  });

  it ("adds a particle", function () {
    var emitter = new Emitter (new Vector(10,10), Vector.fromAngle(10,10));
    var newParticle = emitter.addParticle();
    assert.deepEqual (newParticle.position, emitter.position);
  });
});

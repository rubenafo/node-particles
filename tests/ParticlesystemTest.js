/**
* @license
* Copyright 2016 Ruben Afonso, ruben@figurebelow.com
*
* This source code is licensed under the Apache license found in the
* LICENSE file in the root directory of this source tree.
**/

var assert = require ("assert");
var Emitter = require ("../js/Emitter.js").Emitter;
var ParticleSystem = require ("../js/ParticleSystem.js").ParticleSystem;
var Field = require ("../js/Field.js").Field;
var Vector = require ("../js/Vector.js").Vector;

describe ("ParticleSystem", function () {

  it ("Adds an emitter", function () {
    var ps = new ParticleSystem ();
    ps.addEmitter (new Emitter(new Vector(10,10), Vector.fromAngle(30,30)));
    assert.equal(ps.emitters.length, 1);
  });

  it ("Adds a field", function () {
    var ps = new ParticleSystem ();
    ps.addField (new Field(new Vector(10,10), 20));
    assert.equal(ps.fields.length, 1);
  });

  it ("Evolves given one emitter", function () {
    var ps = new ParticleSystem ();
    ps.addEmitter (new Vector(10,10), Vector.fromAngle(30,30));
    ps.addField (new Vector(10,10), 20);
    ps.evolve(1);
    assert.equal(ps.getParticleCount(), 4);
  });

});



"use strict";

let Vector = require ("./Vector.js").Vector;
let Particle = require ("./Particle.js").Particle;

  class Emitter {
   
   constructor (point,velocity) {
    this.position     = point;
    this.velocity     = velocity;
    this.size         = 15;
    this.particleLife = -1;
    this.spread       = Math.PI / 32;
    this.emissionRate = 4;
    this.jitter     = 0.05;
  }

  moveTo (point) {
    this.position = point;
  }

  addParticle() {
    var particle = new Particle (this.position.copy(),
                                 Vector.fromAngle(this.velocity.getAngle() + this.spread 
                                                  - (Math.random() * this.spread * 2), 
                                  this.velocity.getMagnitude())
    );
    particle.ttl = this.particleLife;
    return particle;
  }
};
module.exports.Emitter = Emitter;

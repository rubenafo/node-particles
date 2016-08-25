

"use strict";

let Point = require ("./Point.js").Point;
let Particle = require ("./Particle.js").Particle;

  class Emitter {
 
   // Creates a new Emitter given a point in space and emission velocity
   constructor (point,velocity) {
    this.position     = point;
    this.velocity     = velocity;
    this.size         = 15;
    this.particleLife = -1;
    this.spread       = Math.PI / 32;
    this.emissionRate = 4;
    this.jitter     = 0.05;
  }

  // Moves the Emitter position
  moveTo (point) {
    this.position = point;
  }

  // Adds a new particle using the Emitter position and velocity as starting point.
  addParticle() {
    var particle = new Particle (this.position.copy(),
                                 Point.fromAngle(this.velocity.getAngle() + this.spread 
                                                  - (Math.random() * this.spread * 2), 
                                  this.velocity.getMagnitude())
    );
    particle.ttl = this.particleLife;
    return particle;
  }
};
module.exports.Emitter = Emitter;

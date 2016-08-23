
"use strict";


let Vector = require ("./Vector.js").Vector;
let Field = require ("./Field.js").Field;
let Emitter = require ("./Emitter.js").Emitter;
let Particle = require ("./Particle.js").Particle;



class ParticleSystem {

  constructor() {
    this.maxParticles = 2000;
    this.particles = [];
    this.emitters = [];
    this.fields = [];
    this.elapsed = 0;
  };

  removeObject(type) {
  }

  addEmitter(point, velocity) {
    this.emitters.push(new Emitter(point, velocity));
  }
     
  addField (point, mass) {
    this.fields.push (new Field(point, mass));
  }
      
  addNewParticles () {
    if (this.particles.length > this.maxParticles) 
      return;
    var that = this;
    var emitParticles = function (emitter) {
      for (var i = 0; i < emitter.emissionRate; i++) 
        that.particles.push(emitter.addParticle());
      }
    this.emitters.forEach(emitParticles);   
  }
      
  getParticleCount() { 
    return this.particles.length; 
  }
      
  getEmitterCount() { 
    return this.emitters.length; 
  }

  getFieldCount() { 
    return this.fields.length; 
  }

  getParticles () { return this.particles; }
      
  evolve (steps) {
    var fields = this.fields;
    for (var step = 0; step < steps; step++) {
      this.addNewParticles();
      //this.particles.forEach (function (part, i, sourcePartList) {
        //if (part.ttl > 0 && ++part.lived >= part.ttl) 
        //  sourcePartList = sourcePartList.splice(i,1);
        //var p = part.position;
        //if (p.x < 0 || p.x > boundsX || p.y < 0 || p.y > boundsY) 
        //  sourcePartList = sourcePartList.splice(i,1);
      //});
      this.particles.forEach (function(part) {
        part.submitToFields(fields);
        part.move();
      });
    }
  }
};

module.exports.ParticleSystem = ParticleSystem;


"use strict";

let Vector = require ("./Vector.js").Vector;


  class Particle {
  
    constructor (point,velocity){
      this.position     = point;
      this.velocity     = velocity;
      this.acceleration = new Vector(0,0);
      this.ttl          = -1;
      this.lived        = 0;
      this.size = 2;
    }

  submitToFields (fields) {
    var that = this;
    var totalAccelerationX = 0;
    var totalAccelerationY = 0;
    fields.forEach (function(field) {
        // inlining what should be Vector object methods for performance reasons
        var vectorX = field.position.x - that.position.x;
        var vectorY = field.position.y - that.position.y;
        var force = field.mass / 
            Math.pow((vectorX*vectorX+field.mass/2+vectorY*vectorY+field.mass/2),1.5);
        totalAccelerationX += vectorX * force;
        totalAccelerationY += vectorY * force;
    });
    this.acceleration = new Vector(totalAccelerationX,totalAccelerationY);
  }
  
  move() {
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  getPos() { return this.position; }
};
module.exports.Particle = Particle;

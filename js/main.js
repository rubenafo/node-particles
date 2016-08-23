
"use strict";

let ParticleSystem = require ("./lib/ParticleSystem.js").ParticleSystem;
let Vector = require ("./lib/Vector.js").Vector;

function main (){

    var particleSystem = new ParticleSystem();
    particleSystem.addEmitter(new Vector(360,230),Vector.fromAngle(0,2));
    particleSystem.addField(new Vector(700,230), -140);
    for (var i = 0; i < 5; i++) {
      particleSystem.evolve(200);
      particleSystem.getParticles().forEach(function (part) {
        console.log(part);
      });
    }
    console.log("total = " + particleSystem.getParticleCount());
    console.log("emitters = " + particleSystem.getEmitterCount());
    console.log("fields = " + particleSystem.getFieldCount());
}

main ();

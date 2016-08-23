
"use strict";

let Vector = require ("./Vector.js").Vector;

  class Field {

    constructor (point, mass) {
      this.position   = point;
      this.size       = 15;
      this.mass       = mass;
    }

    moveTo (point) {
      this.position = point;
    }
}
module.exports.Field = Field;

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return this.radius * this.radius * Math.PI;
}

var a = new Circle(3),
    b = new Circle(4);

console.log(a.area().toFixed(2)); // 28.27
console.log(b.area().toFixed(2)); // 50.27


function Ninja(){
  this.swung = false;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns itself and modifies swung
Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}


console.log(ninjaA.swing().swung)      // this needs to be true
console.log(ninjaB.swing().swung)      // this needs to be true


var ninjaA = (function(){
 function Ninja(){};
 return new Ninja();
})();

// create a ninjaB object
var ninjaB = new ninjaA.constructor();

console.log(ninjaB.constructor === ninjaA.constructor)    // this should be true
function Vehicle() {};

Vehicle.prototype.doors = 4;
Vehicle.prototype.wheels = 4;

var sedan = new Vehicle();
var coupe = new Vehicle();

coupe.doors = 4;

sedan.hasOwnProperty("doors");
coupe.hasOwnProperty("doors");

function Coupe() {};
function Motorcycle() {};

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;
Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.wheels = 2;

Coupe.prototype.constructor = "Coupe";
Motorcycle.prototype.constructor = "Motorcycle";

var coupe = new Coupe();
var motorbike = new Motorcycle();

function Sedan() {};
Sedan.prototype = Object.create(Vehicle);

function toDegrees(radians) {
  return (radians / (2 * Math.PI)) * 360;
}

console.log(toDegrees(1));

var q2 = -180;
console.log(Math.abs(q2));

console.log(Math.sqrt(16777216));

var a = 50.72,
    b = 49.2,
    c = 49.86;

Math.floor(a);
Math.ceil(b);
Math.round(c);

function RandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}

RandomNumber(4, 11);
RandomNumber(1022, 1089);
console.log("Q1 -----");

function getDefiningObject(object, propKey) {
  while(object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }
  return object;
}

var foo = {a: 1, b: 2};
var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // true
console.log(getDefiningObject(qux, 'e'));             // null


console.log("\nQ2 -----");

function shallowCopy(object) {
  new_object = Object.create(Object.getPrototypeOf(object));
  Object.getOwnPropertyNames(object).forEach(function(prop) {
    new_object[prop] = object[prop];
  });
  return new_object;
};

var foo = {a: 1, b: 2};
var bar = Object.create(foo);

bar.c = 3;
bar.say = function() {
  console.log("c is " + this.c);
};


var baz = shallowCopy(bar);

console.log(baz.a);       // 1
baz.say();                // c is 3


console.log("\nQ3 -----");

function extend(destination) {
  for (var i = 1; i < arguments.length; i++) {
    var current_object = arguments[i];
    Object.getOwnPropertyNames(current_object).forEach(function(prop, index, array) {
      destination[prop] = current_object[prop];
    });
  }
  return destination;
}

var foo = {
  a: 0,
  b: {x: 1, y: 2},
};

var joe = {
  name: "Joe",
};

var funcs = {
  sayHello: function() {
    console.log("Hello, " + this.name);
  },

  sayGoodBye: function() {
    console.log("Goodbye, " + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // 1
object.sayHello();   // Hello, Joe
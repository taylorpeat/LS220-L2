var shape = {
  type: "",
  getType: function() {
    return this.type;
  }
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = "triangle";
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}
Triangle.prototype.constructor = Triangle;

var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 6
console.log(t.getType());                   // "triangle"


function User(first, last) {
  this.name = first + " " + last;
  if (!(this instanceof User)) {
    this.constructor = User;
    this.__proto__ = User.prototype;
    return this;
  }
}

var name = "Jane Doe";
var user1 = new User("John", "Doe");
var user2 = User("John", "Doe");


console.log(name);        // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe
console.log(user1.constructor);
console.log(user2.constructor);
console.log(user1.__proto__);
console.log(user2.__proto__);


function createObject(obj) {
  for (prop in obj) {
    this[prop] = obj[prop];
  }
  this.__proto__ = obj;
  return this;
};

var foo = {a: 1};
var bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true

function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};

var foo = {a: 1};
var bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true


Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F();
}

var foo = {a: 1};
var bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true


function neww(constructor, args) {
  var result = Object.create(constructor.prototype);
  constructor.apply(result, args);
  return result;
}

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
};

Person.prototype.greeting = function() {
  console.log("Hello, " + this.first_name + ' ' + this.last_name);
};

var john = neww(Person, ['John', 'Doe']);

john.greeting();          // Hello, John Doe
console.log(john.constructor);         // Person(first_name, last_name) {...}


function newPerson(name) {
  this.name = name;
  this.log = function() {
    console.log(this.name);
  }
}

var me = newPerson("Taylor Peat");

Object.defineProperties(me, {
  log: {
    writable: false
  }
});


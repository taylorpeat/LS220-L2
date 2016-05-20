(function() {
  var _ = function(array) {
    u = {
      first: function() {
        return array[0];
      },
      last: function() {
        return array[array.length - 1];
      },
      without: function() {
        var new_array = array.slice();
        var argument_arr = Array.prototype.slice.call(arguments);
        for (argument of argument_arr) {
          var idx = array.indexOf(argument);
          new_array.splice(idx, 1);
        }
        return new_array;
      },
      lastIndexOf: function(element) {
        for (var i = array.length - 1; i >= 0; i--) {
          if (array[i] == element) {
            return i;
          }
        }
        return -1;
      },
      sample: function(quantity) {
        if (quantity == undefined) { quantity = 1 }
        var new_array = array.slice();
        var random_values = [];
        for (var i = 0; i < quantity; i++) {
          var idx = Math.floor(Math.random() * array.length);
          random_values.push(new_array.splice(idx, 1)[0]);
        }
        if (random_values.length > 1) {
          return random_values;
        } else {
          return random_values[0];
        }
      },
      findWhere: function(object) {
        for (item of array) {
          if (Object.keys(object).every(function(key) {
            return item[key] === object[key];
          })) {
            return item;
          }
        }
      },
      where: function(object) {
        var matches = [];
        for (item of array) {
          if (Object.keys(object).every(function(key) {
            return item[key] === object[key];
          })) {
            matches.push(item);
          }
        }
        return matches;
      },
      pluck: function(key) {
        var values = [];
        for (item of array) {
          values.push(item[key]);
        }
        return values;
      },
      keys: function() {
        return Object.keys(array);
      },
      values: function() {
        var obj_values = [];
        for (prop in array) {
          obj_values.push(array[prop]);
        }
        return obj_values;
      },
      pick: function() {
        var args = Array.prototype.slice.call(arguments);
        var new_object = {};
        for (prop of args) {
          new_object[prop] = array[prop];
        }
        return new_object;
      },
      omit: function() {
        var args = Array.prototype.slice.call(arguments);
        var new_object = array;
        for (prop of args) {
          delete new_object[prop];
        }
        return new_object;
      },
      has: function(property) {
        return !!array[property];
      }
    };
    (["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber", "checkThis"]).forEach(function(method) {
      u[method] = function() { return _[method](array) }
    })
    // var outside_functions = ["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber", "checkThis"];
    // for (func of outside_functions) {
    //   u[func] = function() { _[func]() }
    // }
    return u;
  }
  _.range = function(start, end) {
    var array = [];
    if (end === undefined) {
      end = start;
      start = 0;
    }
    for (i = start; i < end; i++) {
      array.push(i);
    }
    return array;
  }
  _.extend = function() {
    var args = Array.prototype.slice.call(arguments);
    var original_object = args[0];
    for (object of args) {
      for (prop in object) {
        original_object[prop] = object[prop];
      }
    }
    return original_object;
  }
  _.isElement = function(object) {
    return object && object.nodeType === 1;
  }
  _.isArray = function(object) {
    return Object.getPrototypeOf(object) === Array.prototype;
  }
  _.isObject = function(object) {
    return object instanceof Object;
  }
  _.isFunction = function(object) {
    return object instanceof Function;
  }
  _.isBoolean = function(object) {
    return object instanceof Boolean || typeof object === 'boolean';
  }
  _.isString = function(object) {
    return object instanceof String || typeof object === 'string';
  }
  _.isNumber = function(object) {
    return object instanceof Number || typeof object === 'number';
  }
  _.checkThis = function() {
    console.log("HI" + this);
  }
  window._ = _;
})();
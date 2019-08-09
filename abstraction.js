function Square(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log("Hello");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    }
  });
}

const square = new Square(10);
square.defaultLocation = 1;
square.draw();

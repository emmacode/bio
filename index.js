//Factory function
//function createCircle(radius)
createCircle = radius => {
  return {
    //properties
    radius,
    //methods
    draw: function() {
      console.log("draw");
    }
  };
};
const circle = createCircle(1);
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}
//circle.draw();

//constructor function
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function() {
      console.log("draw");
    });
}
const another = new Circle(1);
another.draw();

//primitive are copied by their value
//primitives are Number,Boolean,String,Symbol,undefined,null
// let number = 10;
// function increase(number) {
//   number++;
// }
// increase(number);
// console.log(number);

//object are copied by their reference
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);

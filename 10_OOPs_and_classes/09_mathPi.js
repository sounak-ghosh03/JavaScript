// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// check if we can overwrite the value of PI,...It cannot be done because the the object is set to non writeable mode, whenever we will try to change the value it will always return the same predefined value as described in engine or node
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

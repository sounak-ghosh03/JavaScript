function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// Uncomment the line below to call the sayMyName() function
// sayMyName();

function addTwoNumbers(number1, number2) {
  // Uncomment the next two lines to store the result in a variable
  // let result = number1 + number2;
  // return result;
  return number1 + number2; // Returns the sum of number1 and number2
}

const result = addTwoNumbers(3, 5);
// Uncomment the line below to log the result function
// console.log("Result:", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username"); // Logs a message if no username is provided
    return;
  }
  return `${username} just logged in`; // Returns a string indicating the provided username logged in
}

// Uncomment the lines below to test the loginUserMessage function
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1, val2, ...num1) {
  //... => is called rest/spread operator
  return num1; // Returns an array containing all additional arguments passed
}

// Uncomment the line below to test the calculateCartPrice function
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  ); // Logs a message with username and price properties from the object
}

// Uncomment the line below to test the handleObject function
// handleObject(user);

// Alternatively, you can directly call the function with an object
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1]; // Returns the second element (index 1) from the array
}

// Uncomment the line below to test the returnSecondValue function
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

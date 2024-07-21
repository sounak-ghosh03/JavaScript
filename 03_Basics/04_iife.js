// Immediately Invoked Function Expressions (IIFE)
// functions which executes immediately where it is declared
// we use it to clean the pollution cause by global scope variables/the secret sauce for encapsulating code and maintaining a clean global scope.

(function chai() {
  // named IIFE

  console.log(`DB CONNECTED`);
})();

((name) => {
  //unnamed IIFE

  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

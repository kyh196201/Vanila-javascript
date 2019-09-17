// function sayHello(name, age) {
//   return `Hello ${name} you have ${age} years of old.`;
// }

// const greetings = sayHello("Sam", 15);

// console.log(greetings);

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multifly: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  sqrt: function sqrt(n, g) {
    if (!g) {
      // Take an initial guess at the square root
      g = n / 2.0;
    }
    var d = n / g; // Divide our guess into the number
    var ng = (d + g) / 2.0; // Use average of g and d as our new guess
    if (g == ng) {
      // The new guess is the same as the old guess; further guesses
      // can get no more accurate so we return this guess
      return g;
    }
    // Recursively solve for closer and closer approximations of the square root
    return sqrt(n, ng);
  },
  pow: function(a, b) {
    var i = 0;
    var num = 1;
    for (i = 0; i < b; i++) {
      num = num * a;
    }
    return num;
  }
};

const sum = calculator.plus(5, 5);
const minus = calculator.minus(20, 10);
const multifly = calculator.multifly(20, 10);
const divide = calculator.divide(10, 2);
const sqrt = calculator.sqrt(2);
const pow = calculator.pow(2, 5);
console.log(sum, minus, multifly, divide, sqrt, pow);

const add = function(a, b) {
 return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(a, b) {
  return a * b;
};

const power = function() {
	return Math.pow(a, b);
};

const factorial = function(n) {
  if (n === 0) return 1;
  let result = 1;
	for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

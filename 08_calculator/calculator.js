const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
  return a - b;	
};

const sum = function(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function(array) {
  return array.reduce((acc, num) => acc * num);
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
	if (num === 0)  {
    return 1;
  } else if (num < 0) {
    return -1;
  } else {
    return (num * factorial(num - 1));
  }
};
console.log(factorial(10));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

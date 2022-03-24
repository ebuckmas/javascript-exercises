const ftoc = function(temp) {
  let celsius = (temp - 32) * (5/9);
  return Math.round(celsius * 10) / 10;
  //return rounded;
};

const ctof = function(temp) {
  let fahrenheit = temp * (9/5) + 32;
  return Math.round(fahrenheit *10) / 10;
  
};

let ftocResult = ftoc(32);
console.log(ftocResult);

let ctofResult = ctof(0);
console.log(ctofResult);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

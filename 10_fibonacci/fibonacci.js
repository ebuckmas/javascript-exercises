const fibonacci = function(number) {
    let num = Number(number);
    if (num < 0) {
        return 'OOPS';
    } else if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } 
    return fibonacci(num - 2) + (fibonacci(num - 1));
    
};


console.log(fibonacci(25));

//fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)

// Do not edit below this line
module.exports = fibonacci;

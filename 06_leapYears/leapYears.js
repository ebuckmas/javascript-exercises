const leapYears = function(year) {
    if (year % 4 !== 0) {
        return false;
    } else if ((year % 100 === 0) && (year % 400 !== 0)) {
        return false;
    } else return true; 
};
let result = leapYears(1600);
console.log(result);
// Do not edit below this line
module.exports = leapYears;

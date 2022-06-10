const palindromes = function (string) {
    let cleanedString = string.replace(/\W+/g, '').toLowerCase();
    const reversedString = string.split('').reverse().join('').replace(/\W+/g, '').toLowerCase();
      
    if (cleanedString === reversedString) {
        return true;
    } else {
        return false;
    }
        
};

// Do not edit below this line
module.exports = palindromes;

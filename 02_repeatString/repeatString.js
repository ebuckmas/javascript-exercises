

const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let combinedWord = '';
    for (let i = 0; i < num; i++) {
        combinedWord+=string;
    }
return combinedWord;
}



// Do not edit below this line
module.exports = repeatString;

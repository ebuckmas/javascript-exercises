

const reverseString = function(string) {
//initialize an empty string
    let combinedWord = '';
//use split to break the string into an array and hold in new var
    let arrayFromString = string.split('');
    console.log(arrayFromString);
//use reverse to reverse the array and hold in new variable
    let reversedArray = arrayFromString.reverse();
//loop through the array, and add each element to the empty string
    for (let i = 0; i < reversedArray.length; i++) {
        combinedWord += reversedArray[i];
    }
//return the combined word
    return combinedWord;
};

let result = reverseString('evan ross buckmaster');

console.log(result);

// Do not edit below this line
module.exports = reverseString;

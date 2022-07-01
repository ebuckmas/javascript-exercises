console.log('SECOND TRY');

const findTheOldest = function(array) {
    return array.reduce((acc, current) => {
        let accAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return (accAge > currentAge) ? acc : current;
    })
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}


//Do not edit below this line
module.exports = findTheOldest;



// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

//console.log('REDO');
const findTheOldest = function(array) {
    return array.reduce((acc, current) => {
        let accAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return (accAge > currentAge) ? acc : current;
    })
}

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

//console.log(findOldest(people));

//module.exports = findTheOldest;
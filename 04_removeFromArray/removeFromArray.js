// const removeFromArray = function(mainArray, ...items) {
//     //three dots is rest, so items is now an array of items to be removed
//     //I've got two arrays now
//     //for every value in items array, check if the value also exists in
//     //mainArray. if it does, remove it from mainArray
    
//     for (let i = 0; i < items.length; i++) {
//         for (let j = 0; j < mainArray.length; j++) {
//             //console.log(`${items[i]} - ${mainArray[j]}`);
//             if (items[i] === mainArray[j]) {
//                 mainArray.splice(j, 1);
//             }
//         }
//     }   
//     return mainArray;
//     };

//     let result = removeFromArray([2,4,10], 10);
// console.log(result);

// Do not edit below this line
//module.exports = removeFromArray;


function removeFromArray(...args) {
    let mainArray = args[0];
    console.log(mainArray);

    let filtered = mainArray.filter(nums => !args.includes(nums));
return filtered;
}

let result = removeFromArray([1,2,3,4], 3, 4);
console.log(result);
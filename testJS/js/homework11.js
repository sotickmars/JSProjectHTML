
// const arr = [1, 4, 5, 3, 6, 7, 9, 2, 5];

// const returnOdd = (el, index) => {
// if(el % 2 !== 0 && arr[index-1] % 2 === 0 && index != 0){
//     return el = arr[index-1]
//     }
// else {
//     return el
//     }
// }
// let newArr = arr.map(returnOdd);
// console.log(newArr)





const arr = [1, 4, 5, 3, 6, 7, 9, 2, 5];

const returnOdd = (el, index) => {
if(el % 2 !== 0 && index != 0){
    for(i=0; i<arr.length; i--){
        if(arr[index-i] % 2 === 0){
            return el = arr[index-i]
        }
    }
}
else {
    return el
    }
}
let newArr = arr.map(returnOdd);
console.log(newArr)












//task 2

// let arr = [1, 2, -3, 4, -5];

// const newArr = arr.reduce((accumulator, currentValue, index) =>{
//     if(currentValue<0){
//         return accumulator*currentValue
//     } else {
//         return accumulator
//     }

// }, 1)

// console.log(newArr)
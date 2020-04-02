// ///////////////////ОБЪЕКТЫ

// const user = {
//     name: "John",
//     surname: "Smith"
// }
// user.name = "Pete"
// delete user.name
// console.log(user)


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (key in salaries) {
//     if (salaries[key]>0){
//         sum+=salaries[key];  
//     } 
// }
// console.log(sum);



//     let menu = {
//         width:200,
//         height: 300,
//         title: "my meny"
//     }

//    function multiplyNumeric(menu) {
//        for (let key in menu) {
//             if(typeof menu[key] === 'number') {
//                 menu[key]*=2
//             };
//         };
//         console.log(menu)
//     };
//     multiplyNumeric(menu)
    


// ///////МАССИВЫ

// let matrix = [0, 1, 15, 28, 4, 15];

// for(let num of matrix){
//     if (num>7){
//         console.log(num)
//     }
// }



// let massive = [{one: 11}, {two: 2}, {tree: 15}, {five: 5}];

// for(let num of massive){
//     for(let numb in num) {
//         if(num[numb]>7) console.log(numb)
//     }
// }

// let users = [
// {
//     userName:'John',
//     surname:'Peter',
//     age: 27
// }, {
//     userName:'Marta',
//     surname:'Peterson',
//     age: 22
// }
// ];

// let usereInfo = prompt("please enter Surname:");
// let res = usereInfo.toUpperCase();


// for(let info of users) {
//     // for(let data in info) {
//         let resData = info.surname.toUpperCase()
//         if (res === resData){
//             console.log(info)
//         }
        // if (res === resData){
        //    console.log(info)
        // } else {
        // console.log('No results found for your request')
        // }

// }



//ClassWork 5
// let name = 'Ivan'
// function show(name){
//     console.log('Hello', name)
// }
// show(name)


// let x = 7;
// function dump(x){
//     return x;
// }
// console.log(dump(x))

// const start = 9;

// let curent = start;
// let steps = 0;
// let maxValue = start;
// while (curent != 1) {
//   if (curent > maxValue) maxValue = curent;
//   if (curent % 2 === 0) {
//     const oldVal = curent;
//     curent = curent / 2;
//     console.log(`step ${steps + 1}: ${oldVal}/2 = ${curent}`);
//   } else {
//     const oldVal = curent;
//     curent = curent * 3 + 1;
//     console.log(`step ${steps + 1}: ${oldVal}*3 + 1 = ${curent}`);
//   }
//   steps++;
// }
// console.log('maxValue', maxValue);
// console.log('steps', steps);












// const start = 9;


// function hess(){
    
// let curent = start;
// let steps = 0;
// let maxValue = start;
// while (curent != 1) {
//   if (curent > maxValue) maxValue = curent;
//   if (curent % 2 === 0) {
//     const oldVal = curent;
//     curent = curent / 2;
//     console.log(`step ${steps + 1}: ${oldVal}/2 = ${curent}`);
//   } else {
//     const oldVal = curent;
//     curent = curent * 3 + 1;
//     console.log(`step ${steps + 1}: ${oldVal}*3 + 1 = ${curent}`);
//   }
//   steps++;
// }
// console.log('maxValue', maxValue);
// console.log('steps', steps);
// }

// hess()


// function getRandom() {
//     let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     for(let i of number){
//     // console.lo(Math.random()*10)
// }
// console.log(Math.random()*10)
// }
// getRandom();
















// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return console.log('Родители разрешили?');
//     }
//   }

// let age = 9;

//   function checkAge(age) {
//        return (age)>18?true : false
//     }
  
//   function checkAge(age) {
//       return (age>18) || false;
//   }
// console.log(checkAge(age))




// function min(a, b) {
//     return (a>b?b:a);
// }


// console.log(min(2, 5))
// console.log(min(3, -1))
// console.log(min(1, 1))




// let x = prompt('Введите значение Х')
// let n = prompt(`Введите степень для числа ${x}`)

// function pow(x, n) {
// let results = x;
// for (let i = 1; i < n; i++) {
//     results*=x;
//  }
//  return results;
// }
// alert(pow(x, n));



let num = [1, 10, 12, 15, 100, 15, 20, 14, 88, 97];

let num1 = num.join().replace(/0/g, 'zero');
    console.log(num1)


    function zero() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            let a = String(Math.floor((Math.random() * 1000) + 1));
    
            if (arr.indexOf(a) == -1) {
                if (a % 10 == 0) {
                    arr.push(a.replace(/0/g, 'zero'));
                } else {
                    arr.push(Number(a));
                }
            };
        };
        console.log(arr);
    };
    zero();


    function toZero(arr) {
        for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i].toString().replace(/0/g, "zero");
        }
        return arr;
      }
      
      let arr = [];
      for (let i = 0; i < 10; i++) {
        let a = Math.round(Math.random() * 1000);
        arr.push(a);
      }
      toZero(arr);
      console.log(arr);
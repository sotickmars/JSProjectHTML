
//CLASSWORK 10*
// let obj = {
//     name: 'Ivan',
//     lastName: 'Koko',

//     get fullStats(){
//         return `${this.name} ${this.lastName} ${this.age}`;
//     }
// };

// Object.defineProperty(obj, 'name',{
//     writable: false
// });

// Object.defineProperty(obj, 'age',{
//     value: 45,
//     enumerable: true
// });

// Object.defineProperty(obj, 'lastName',{
//     value: 'Hoho',
//     configurable: false
// });

// obj.name = 'Masha'

// for(let key in obj){
//     console.log(obj[key])
// }



// наследование
// let animal = {
//     eats: true
// };
// let rabbit = {
//     jump:true
// };

// rabbit.__proto__ = animal;

// console.log(rabbit.eats)


// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2
//   };
  
//   let pockets = {
//     money: 2000
//   };

//   Object.setPrototypeOf(pockets, bed);
  
//   Object.setPrototypeOf(bed, table);
  
//   Object.setPrototypeOf(pockets, bed);

//class

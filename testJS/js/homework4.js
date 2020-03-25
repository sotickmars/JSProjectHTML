///////////////////ОБЪЕКТЫ

const user = {
    name: "John",
    surname: "Smith"
}
user.name = "Pete"
delete user.name
console.log(user)


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (key in salaries) {
    if (salaries[key]>0){
        sum+=salaries[key];  
    } 
}
console.log(sum);



    let menu = {
        width:200,
        height: 300,
        title: "my meny"
    }

   function multiplyNumeric(menu) {
       for (let key in menu) {
            if(typeof menu[key] === 'number') {
                menu[key]*=2
            };
        };
        console.log(menu)
    };
    multiplyNumeric(menu)
    


///////МАССИВЫ

let matrix = [0, 1, 15, 28, 4, 15];

for(let num of matrix){
    if (num>7){
        console.log(num)
    }
}



let massive = [{one: 11}, {two: 2}, {tree: 15}, {five: 5}];

for(let num of massive){
    for(let numb in num) {
        if(num[numb]>7) console.log(numb)
    }
}







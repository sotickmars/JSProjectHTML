
//ClassWork 8
let data = [
    {
        firstName:'Ashton',
        lastName:'Kutcher',
        age:40
    }, {
        firstName:'Bradley',
        lastName:'Pit',
        age:54
    }, {
        firstName:'Hannah',
        lastName:'Dacota',
        age:24
    }
];

// for(i=0; i<data.length; i++){
//     let fn1 = document.getElementById(`first${i}`)
//     let fn2 = document.getElementById(`last${i}`)
//     let fn3 = document.getElementById(`age${i}`)
//     fn1.innerHTML = data[i].firstName
//     fn2.innerHTML = data[i].lastName
//     fn3.innerHTML = data[i].age
//     obj = data[i]
// }




function creatTD(){
    let fragmentTD = new DocumentFragment();
         
    for(i = 0; i < data.length; i++){
        let td = document.createElement('td');
        for()
        td.append(Object.values(data[0]));
        fragmentTD.append(td)
    }
    return fragmentTD;
    // td.append(data[0].lastName);
    // fragmentTD.append(td)
    // return fragmentTD;


    // for(let key in data[0]){
    //     console.log([key].firstName)
        // for(let keys in key){
          
        // }
    // }

        
}

function creatTR(){
    let fragmentTR = new DocumentFragment();
        
    for(i = 0; i < data.length; i++){
        let tr = document.createElement('tr');
        tr.append(creatTD())
        fragmentTR.append(tr)
    }
    return fragmentTR;
}

table.append(creatTR())

console.log(creatTD())
// console.log(data[0])





// try {
//     lalalalalala
// } catch (error) {
//     console.log(error)
// }

let promise = new Promise(function(resulve, reject){
    setTimeout(() => resulve('done'), 3000)
    setTimeout(reject(new Error('3sec DONE')), 5000)
});

promise.then(function(a){
    console.log(a)
})

promise.catch()
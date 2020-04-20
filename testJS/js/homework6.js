
// function mass(n, m){
//     for(i = 0; i < m; i++){
//         let random = new Array(n);
//         for(j = 0; j<n; j++){
//             if(Math.round(Math.random()*10>5)){
//                 random[j] = Math.round(Math.random()*100)
//             }else{
//             random[j] = Math.round(Math.random()*-100)
//             }
//         }
//         console.log(random)
//     }

// }


// function mass(n, m){
//     let arr = new Array(1)
//     for(i = 0; i < n; i++){
//         arr[i] = new Array(n) 
//         for(j = 0; j<m; j++){
//             if(Math.round(Math.random()*10>5)){
//                 arr[i][j] = Math.round(Math.random()*100)
//             }else{
//                 arr[i][j] = Math.round(Math.random()*-100)
//             }
//         }
//     }
//     console.log(arr)
// }

// mass(3,3)




function mass(n, m){
    let arr = new Array(n);
    let maxNum = -100;
    for(i = 0; i < n; i++){
        arr[i] = new Array(m); 
        for(j = 0; j<m; j++){
                arr[i][j] = Math.round((Math.random()*200)-100);
            if(maxNum<arr[i][j]) {
                maxNum = arr[i][j];
                maxi = i;
                maxj = j;
            }
        }
        
    }
    // maxReplace(arr, maxNum)
    console.log(maxNum);
    console.log(maxi, maxj);
    replaceNegative(arr, maxNum);
    return arr
}

// function maxReplace(arr, maxNum){
//     let maxi, maxj;
//     for(i = 0; i<arr.length; i++){
//         for(j = 0; j<arr[i].length; j++){
//             if(maxNum<arr[i][j]) {
//                     // maxNum = arr[i][j];
//                     maxi = i;
//                     maxj = j;
//                 }
//         }
//     }
// console.log(maxNum)
// console.log(maxi, maxj)

// }

function replaceNegative(arr,maxNum){
    for(i = 0; i < arr.length; i++){
        for(j = 0; j<arr[i].length; j++){
            if(arr[i][j]<0){
                arr[i][j] = maxNum
            }
        }
    }
    
}

console.log(mass(3,4))





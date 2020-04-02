function mass(n, m){
    for(i = 0; i < m; i++){
        let random = new Array(n);
        for(j = 0; j<n; j++){
            if(Math.round(Math.random()*10>5)){
                random[j] = Math.round(Math.random()*100)
            }else{
            random[j] = Math.round(Math.random()*-100)
            }
        }
        console.log(random)
    }
}

mass(5,2)
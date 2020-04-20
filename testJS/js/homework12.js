// Встроенная функция setTimeout использует колбэк-функции. 
// Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» 
// через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
     let promis = new Promise((resolve, reject) => {
        setTimeout(() => resolve('выполнилось через 3 секунды'), 3000)
    });
       return promis.then((a)=>console.log(a))
  }
  
  delay();
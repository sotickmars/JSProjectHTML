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



// Перепишите функцию showCircle, написанную в задании Анимация круга с 
// помощью колбэка таким образом, чтобы она возвращала промис,
//  вместо того чтобы принимать в аргументы функцию-callback.

function setText(div){
    div.classList.add('message-ball');
    div.append("Hello, world!");
}

function go() {
    showCircle(150, 150, 100, setText);
  }

  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
            div.addEventListener('transitionend', function handler() {
                resolve(div)
                div.removeEventListener('transitionend', hendler)
            });
          });
    })
    
    promise.then((div)=>{
        setText(div)
    })
    
  }
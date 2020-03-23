//Task 1
let a = Number(prompt("Введите начало диапазона"));
let b = Number(prompt("Введите конец диапазона"));

let sum=0;
for(n=a; n<=b; n++) {
    if (n%2===0) continue
    sum+=n;
};
alert(`Сумма нечетных чисел в диапазоне от ${a} до ${b} = ${sum}`);

// //Task 2
let i = Number(prompt("Введите факториал числа:"));
let n = 1;
for (b=1; b<(i+1); b++) {
    n*=b; 
};
alert(`Факториал числа ${i} = ${n}`);

//Task 3



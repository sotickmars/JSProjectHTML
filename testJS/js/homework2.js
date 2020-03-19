let myAge = Number(prompt('Сколько вам лет?'));
let retirementAge = (65 - myAge);

if (myAge >= 0 && myAge < 65) {
    alert(`Вам осталось ${retirementAge} до пенсии`);
} else if (myAge < 0) {
    alert(`Введите заного значение`);
}
else {
    alert('Вы уже на пенсии');
};


switch (true) {
    case myAge >= 0 && myAge < 65:
        alert(`Вам осталось ${retirementAge} до пенсии`);
        break;

    case myAge < 0:
        alert(`Введите заного значение`);
        break;
  
    default :
        alert('Вы уже на пенсии');
        break;
}
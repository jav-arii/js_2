/* First task start */

var age = +prompt('Введите свой возраст');

if(0 < age && age <= 18 && !isNaN(age)) {
    alert('Вы еще молоды. Вам нужно учиться');
}else if(18 < age && age <= 50 && !isNaN(age)) {
    alert('Вам нужно работать');
}else if(50 < age && age <=59 && !isNaN(age)) {
    alert('Вам скоро на пенсию');
}else if(59 < age && age <= 150 && !isNaN(age)) {
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так');
}

/* First task end */

/* Second task start */

var time = +prompt('Введите время в цифрах от 0 до 24');

switch (time) {
    case 1:
        alert('Час ночи');
        break;
    case 2:
        alert('Два часа ночи');
        break;
    case 3:
        alert('Три часа ночи');
        break;
    case 4:
        alert('Четыре часа ночи');
        break;
    case 5:
        alert('Пять часов утра');
        break;
    case 6:
        alert('Шесть часов утра');
        break;
    case 7:
        alert('Семь часов утра');
        break;
    case 8:
        alert('Восемь часов утра');
        break;
    case 9:
        alert('Девять часов утра');
        break;
    case 10:
        alert('Десять часов утра');
        break;
    case 11:
        alert('Одиннадцать часов утра');
        break;
    case 12:
        alert('Полдень');
        break;
    case 13:
        alert('Час дня');
        break;
    case 14:
        alert('Два часа дня');
        break;
    case 15:
        alert('Три часа дня');
        break;
    case 16:
        alert('Четыре часа дня');
        break;
    case 17:
        alert('Пять часов дня');
        break;
    case 18:
        alert('Шесть вечера');
        break;
    case 19:
        alert('Семь часов вечера');
        break;
    case 20:
        alert('Восемь часов вечера');
        break;
    case 21:
        alert('Девять часов вечера');
        break;
    case 22:
        alert('Десять ночи');
        break;
    case 23:
        alert('Одиннадцать часов ночи');
        break;
    case 24:
        alert('Полночь');
        break;
    
    default:
        alert('Что-то пошло не так');
        break;
}

/* Second task end */

/* Third task start */

var firstNum = +prompt('Введите первое число');

var secondNum = +prompt('Введите второе число');

var thirdNum = +prompt('Введите третье число');

if(secondNum < firstNum && firstNum < thirdNum && !isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum) || 
thirdNum < firstNum && firstNum < secondNum && !isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum)) {
    alert('Число находящееся между наименьшим и наибольшим числами: ' + firstNum);
}
else if(firstNum < secondNum && secondNum < thirdNum && !isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum) || 
thirdNum < secondNum && secondNum < firstNum && !isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum)) {
    alert('Число находящееся между наименьшим и наибольшим числами: ' + secondNum);
}
else if(firstNum < thirdNum && thirdNum < secondNum && !isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum) || 
secondNum < thirdNum && thirdNum < firstNum && !isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum)) {
    alert('Число находящееся между наименьшим и наибольшим числами: ' + thirdNum);
}else {
    alert('Что-то пошло не так');
}

/* Third task end */
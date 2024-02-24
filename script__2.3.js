let password = ('пароль');
let enterPassword = prompt('Введите пароль');
alert(enterPassword);
if (enterPassword === password) {
    alert('Павроль введен верно');
} else {
    alert('Пароль введен неправильно');
}

let c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 50;
let e = 150;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;
switch (monthNumber) {
    case 12 :
        case 1 :
            case 2 :
                console.log('Зима'); 
                        break;
    case 3 :
        case : 4
            case : 5
            console.log('Весна');
                        break;        
    case 6 :
        case : 7
             case : 8
             console.log('Лето');
                        break; 
    case 9 :
        case : 10
                case : 11
                console.log('Осень');
                        break;     
    default:
        console.log('Неизвестный месяц');
}



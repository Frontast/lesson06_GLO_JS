'use strict';

let game = function(min, max) {
    let numAtt = 10;

    let isNumber = function(n){         //Проверка на то, что введено число
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let randomNumber = Math.floor(Math.random() * (max - min + 1)); //Генерация случайного числа
    alert('Угадай число от ' + min + ' до ' + max);

    let verAtt = function() {
        numAtt -= 1;
        if (numAtt === 0) {
            let decision = confirm('Попытки закончились, хотите сыграть еще?');
            if (decision) {
                game(1, 100, 10);
            } else {
                return end();
            };
        };
        return numAtt;
    };

    let end = function() {
        return alert('Игра закончена!');
    };

    let attempt = function() {
        let numberUser = prompt('Введите число');
        if(isNumber(numberUser) || numberUser === null){
            if(numberUser == null) {
                end();
            } else if(randomNumber < numberUser) {
                verAtt();
                alert('Загаданное число меньше, осталось попыток - ' + numAtt);
                attempt();
            } else if(randomNumber > numberUser) {
                verAtt();
                alert('Загаданное число больше, осталось попыток - ' + numAtt);
                attempt();
            } else if(randomNumber === numberUser) {
                confirm('Поздравляю! Вы угадали! Хотите сыграть еще?');
                // if (decision1) {
                //     game(1, 100, 10);
                // }
            };
        } else {
            alert('Введите число!')
            attempt();
        };
    };
    attempt();
};
game(1, 100);
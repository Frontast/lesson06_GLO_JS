'use strict';

let game = function(min, max) {
    let isNumber = function(n){         //Проверка на конечное число 
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    let randomNumber = Math.floor(Math.random() * (max - min + 1));
    alert('Угадай число от ' + min + ' до ' + max);
    let attempt = function() {
        let numberUser = prompt('Введите число');
        if(isNumber(numberUser) || numberUser === null){
            if(numberUser == null) {
                return alert('Игра закончена');
            } else if(randomNumber < numberUser) {
                alert('Загаданное число меньше');
                attempt();
            } else if(randomNumber > numberUser) {
                alert('Загаданное число больше');
                attempt();
            } else if(randomNumber === numberUser) {
                alert('Поздравляю! Вы угадали!');
            }
        } else {
            alert('Введите число!')
            attempt();
        }
    };
    attempt();
};
game(1, 100);
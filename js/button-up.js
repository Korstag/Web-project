/* Кнопка "Наверх" с плавной анимацией*/
/*находит в DOM элемент по id*/
let buttonUp = document.getElementById('button-up'); 
/*добавляем обработчик события (сробатывает при скроле)*/
window.addEventListener('scroll', function() {
    /*Логика отображения кнопки*/
    if (window.pageYOffset > 300) {  /*если страница 
        по вертикали смещена больше, чем на 300 покселей, то*/
        buttonUp.classList.add('active');  /*добавляет класс 'active'*/
    } else {
        buttonUp.classList.remove('active');  /*удаляет  класс 'active'*/
    }
});


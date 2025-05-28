/*Получение элементов DOM*/
let menubth = document.querySelector('.menu-bth');
let Links = document.querySelector('.links');
/*Добавляем обработчик события click на кнопку меню.
  Это значит, что функция сробатывает при клике на элемент*/
menubth.addEventListener('click', function() {
    Links.classList.toggle('active'); /*переключает (добавляет/удаляет) класс active*/
    /*предотвращает прокрутку страницы, когда меню открыто*/
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

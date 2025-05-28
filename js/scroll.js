// Плавный перемещение при клике на ссылку
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    /*Для каждой ссылки с якорем добавляем обработчик события(сробатывает на клик)*/
    anchor.addEventListener('click', function (e) {
        e.preventDefault();/*Отменяет стандартный "прыжок" к якорю*/
        /* Получаем значение ссылки, например #home*/
        let targetId = this.getAttribute('href');
        /* querySelector возвращает первое вхождение элемента документа,
         который соответствует указанному тегу, селектору или группе селекторов.
         Если совпадений не найдено, метод возвращает null. */
        let targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                /* К какой точке надо перемотать страницу */
                top: targetElement.offsetTop,
                /*Активирует анимацию плавной прокрутки*/
                behavior: 'smooth'
            });
            // Закрываем мобильное меню, если оно открыто
            let Links = document.querySelector('.links');
            if (Links.classList.contains('active')) {
                Links.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});
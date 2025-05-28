// Форма обратной связи
const feedbackForm = document.getElementById('feedbackForm');
const feedbackResults = document.getElementById('feedbackResults');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Валидация
        if (!name || !email || !message) {
            showMessage('Пожалуйста, заполните все обязательные поля', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Пожалуйста, введите корректный email', 'error');
            return;
        }

        // Вывод результатов
        feedbackResults.innerHTML = `
                <div class="form-results">
                    <h3>Ваши данные:</h3>
                    <p><strong>Имя:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    ${phone ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
                    <p><strong>Сообщение:</strong> ${message}</p>
                </div>
            `;

        showMessage('Форма отправлена! Мы свяжемся с вами', 'success');
        feedbackForm.reset();
    });
}


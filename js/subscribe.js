// Форма подписки
const subscribeForm = document.getElementById('subscribeForm');
const subscribeResults = document.getElementById('subscribeResults');

if (subscribeForm) {
    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('subscribeEmail').value.trim();
        const agree = document.getElementById('agree').checked;

        if (!email) {
            showMessage('Пожалуйста, введите email', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Пожалуйста, введите корректный email', 'error');
            return;
        }

        if (!agree) {
            showMessage('Необходимо согласие на обработку данных', 'error');
            return;
        }

        // Вывод результатов
        subscribeResults.innerHTML = `
                <div class="form-results">
                    <h3>Вы подписались!</h3>
                    <p><strong>Email:</strong> ${email}</p>
                    <p>Мы отправили письмо с подтверждением</p>
                </div>
            `;

        showMessage('Спасибо за подписку!', 'success');
        subscribeForm.reset();
    });
}


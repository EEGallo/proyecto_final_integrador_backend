document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form');
    const errMessage = form.querySelector('#error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = form.username.value.trim();
        const password = form.password.value.trim();

        // Validaciones
        if (username === '' || password === '') {
            errMessage.textContent = 'Ingrese el usuario y el password';
            return;
        }

        // Simulación de DB: buscar en localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.username === username && user.password === password);

        if (existingUser) {
            // Establecer el usuario activo en localStorage
            localStorage.setItem('userActive', JSON.stringify({ username: existingUser.username, active: true }));
            // Redirigir al index
            window.location.href = 'index.html';
        } else {
            errMessage.textContent = 'Usuario o contraseña incorrectos';
        }
    });
});
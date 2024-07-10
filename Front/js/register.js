document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#register-form');
    const errMessage = form.querySelector('#error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = form.username.value.trim();
        const password = form.password.value.trim();

        // Validaciones
        if (username === '' || password === '') {
            errMessage.textContent = 'Ingrese el usuario y la contraseña';
            return;
        }

        // Simulación de DB: guardar en localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            errMessage.textContent = 'El nombre de usuario ya existe, prueba con otro';
            return;
        }

        const userNew = {
            username,
            password
        };

        users.push(userNew);
        localStorage.setItem('users', JSON.stringify(users));

        window.location.href = 'login.html';
    });
});

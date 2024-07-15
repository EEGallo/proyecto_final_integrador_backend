document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#register-form');
    const errMessage = form.querySelector('#error-message');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        // Validaciones
        if (username === '' || email === '' || password === '') {
            errMessage.textContent = 'Por favor, complete todos los campos.';
            return;
        }

        // Preparar los datos para enviar
        const userNew = {
            username,
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:8000/filmax_back/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userNew),
            });

            if (!response.ok) {
                const errorData = await response.json();
                errMessage.textContent = errorData.message || 'Error al registrar el usuario';
                return;
            }

            // Si el registro es exitoso, redirigir a login
            window.location.href = 'login.html';
        } catch (error) {
            errMessage.textContent = 'Error en la conexión con el servidor';
            console.error('Error:', error);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form');
    const errMessage = form.querySelector('#error-message');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (username === '' || password === '') {
            errMessage.textContent = 'Ingrese el usuario y la contraseña';
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/filmax_back/users?username=${username}`);

            if (response.ok) {
                const user = await response.json();

                if (user.password === password) {  // Asegúrate de que la contraseña se compare correctamente
                    localStorage.setItem('userActive', JSON.stringify({ username: user.username, active: true }));
                    alert('Inicio de sesión exitoso');
                    window.location.href = '../index.html';
                } else {
                    errMessage.textContent = 'Usuario o contraseña incorrectos';
                }
            } else {
                errMessage.textContent = 'Usuario no encontrado';
            }
        } catch (error) {
            errMessage.textContent = 'Error en la conexión con el servidor';
            console.error('Error:', error);
        }
    });
});
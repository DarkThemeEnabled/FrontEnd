document.addEventListener('DOMContentLoaded', (event) => {
    // Verifica si el usuario ya está logueado y redirige a index.html
    if(localStorage.getItem('userToken')) {
        window.location.href = '../../index.html';
        return;
    }

    const loginForm = document.querySelector('#loginForm');
    if(!loginForm) {
        console.error('El formulario de login no se encontró en el DOM.');
        return;
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');

        if (!emailInput || !passwordInput) {
            console.error('Los campos de email y/o contraseña no se encontraron en el DOM.');
            return;
        }

        const email = emailInput.value;
        const password = passwordInput.value;

        // Aquí iría la lógica de autenticación, como un fetch a la API
        // Por ejemplo:
        fetch('https://localhost:7127/api/Usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Credenciales incorrectas');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('userToken', data.token);
            window.location.href = '../../index.html';
        })
        .catch(error => {
            alert(error.message);
        });
    });
});
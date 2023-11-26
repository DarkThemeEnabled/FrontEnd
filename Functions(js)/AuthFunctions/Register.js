const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const photo = document.querySelector('#photo').value; // Asegúrate de manejar correctamente la carga de archivos si 'photo' es un archivo

    // Aquí hacemos una petición POST al backend para registrar al usuario
    try {
        const response = await fetch('https://localhost:7127/api/Usuario/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                username: username,
                email: email,
                password: password,
                photo: photo
            })
        });

        if (!response.ok) {
            throw new Error('Error al registrar al usuario');
        }

        const data = await response.json();
        alert('Registro exitoso');
        window.location.href = 'login.html'; // Redirige al usuario a la página de inicio de sesión
    } catch (error) {
        if (error.message.includes('409')) {
            alert('El usuario ya existe. Por favor, intenta con un email o nombre de usuario diferente.');
          } else {
            alert(error.message);
        }
    }
});
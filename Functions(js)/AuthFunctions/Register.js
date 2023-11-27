const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const photo = document.querySelector('#photo').value; // Asegúrate de manejar correctamente la carga de archivos si 'photo' es un archivo

    // Validación de campos
    if (!nombre.trim() || !apellido.trim() || !username.trim() || !validateEmail(email) || !validatePassword(password)) {
        alert('Por favor, rellena todos los campos con la información válida.');
        return; // Detener la ejecución si la validación falla
    }

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
            throw new Error(`Error al registrar al usuario: ${response.status}`);
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

// Función de validación de email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Función de validación de la contraseña
function validatePassword(password) {
    const minLength = 8;
    const specialCharRegex = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    return password.length >= minLength && specialCharRegex.test(password);
}
const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const username = document.querySelector('#username').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const photo = document.querySelector('#photo').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)

    if(isUserRegistered){
        return alert('El usuario ya está registrado')
    }

    Users.push({nombre: nombre, apellido: apellido, username: username, email: email, password: password, photo: photo})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro exitoso')
    // redirección a login
    window.location.href = 'login.html'
})
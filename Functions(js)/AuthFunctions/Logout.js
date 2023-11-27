window.logout = function() {
    localStorage.removeItem('userToken');
    window.location.href = '../../Pages/Auth/Login.html'; // Actualiza esta ruta si es necesario
}


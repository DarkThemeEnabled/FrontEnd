function isAuthenticated() {
    const token = localStorage.getItem('userToken');
    if (!token) {
        return false; // No hay token, el usuario no está autenticado
    }

    try {
        const decodedToken = jwt_decode(token);
        const currentDate = new Date();
        const tokenExpirationDate = new Date(decodedToken.exp * 1000); // JWT exp es en segundos, convertir a milisegundos

        if (tokenExpirationDate < currentDate) {
            // El token ha expirado
            localStorage.removeItem('userToken');
            return false; // El token no es válido porque ha expirado
        }

        return true; // El token es válido y no ha expirado
    } catch (error) {
        console.error('Error al decodificar el token:', error);
        localStorage.removeItem('userToken'); // Por seguridad, si hay un error al decodificar, eliminar el token
        return false; // El token no es válido
    }
}

function getUserData() {
    const token = localStorage.getItem('userToken');
    if (token) {
        try {
            const decodedToken = jwt_decode(token);
            return decodedToken;
        } catch (error) {
            console.error('Error al decodificar el token:', error);
            return null;
        }
    }
    return null;
}

function protectRoute() {
    if (!isAuthenticated()) {
        redirectToHome();
    }
}
function redirectToHome() {
    window.location.href = '/index.html';
}

export { getUserData, isAuthenticated, protectRoute };
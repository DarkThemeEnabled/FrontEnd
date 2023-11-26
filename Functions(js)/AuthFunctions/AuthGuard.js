function isAuthenticated() {
    return localStorage.getItem('userToken') != null;
}

function protectRoute() {
    if (!isAuthenticated()) {
        redirectToLogin();
    }
}

function redirectToLogin() {
    window.location.href = 'login.html';
}

function redirectToHome() {
    window.location.href = 'index.html';
}

// Usar esta función en páginas que sólo deben ser accesibles para usuarios no autenticados
function protectUnauthenticatedRoute() {
    if (isAuthenticated()) {
        redirectToHome();
    }
}

export { protectRoute, protectUnauthenticatedRoute };
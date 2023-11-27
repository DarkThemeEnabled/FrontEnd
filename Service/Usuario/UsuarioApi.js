async function login(email, password) {
    try {
        const response = await fetch("https://localhost:7127/api/Usuario/login", {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }

        const data = await response.json();
        console.log(data);
        return data; // Retorna los datos, que generalmente incluirían el token de autenticación
    } catch (error) {
        console.error('Error en login:', error);
        return null; // Retorna null en caso de error
    }
}
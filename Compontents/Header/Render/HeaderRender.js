function GenerarHeader() {
    const barraHeader = document.createElement('nav');
    barraHeader.className = 'row nav-principal';
    barraHeader.innerHTML = `
        <div class="col-2">
        </div>
        <div class="col-8" id="Nav">
            <div class="nav-container">
                <div class="titulo-nav">
                    <a href="../../index.html" class="quitar-color">
                        <img src="../../Assets/Img/LogoNav.png" alt="Logo Gastronet" class="logo-nav">
                        <h3 class="titulo-del-nav">GASTRONET</h3>
                    </a>
                </div>
                <div class="input-container-nav">
                <a href="../../Pages/PaginaBusqueda/BusquedaPers.html" type="button" id="icono-buscar">
                        <i class="fa-solid fa-magnifying-glass"></i>
                </a>
                    <input type="text" placeholder="¿Qué te tienta preparar?" class="input-nav" id="barra-busqueda">
                </div>
                <div class="nav-login">
                    <a class="text-acceder" href="../../Pages/Auth/Login.html">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        Acceder
                    </a>
                </div>
            </div>
        </div>
        <div class="col-2">
        </div>
    `;
    return barraHeader;
}
const contenedor = document.getElementById('Nav');
const header = GenerarHeader();
contenedor.appendChild(header);

document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencia al nuevo botón de búsqueda
    const botonBusqueda = document.getElementById('icono-buscar');

    // Obtener referencia al input de búsqueda
    const inputBusqueda = document.getElementById('barra-busqueda');

    // Agregar evento al nuevo botón de búsqueda
    if (botonBusqueda) {
        botonBusqueda.addEventListener('click', realizarBusqueda);
    }

    // Agregar evento para la tecla Enter en el input de búsqueda
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                realizarBusqueda();
            }
        });
    }

    // Función para realizar la búsqueda y redirigir
    function realizarBusqueda() {
        const textoBusqueda = inputBusqueda.value.trim();
        if (textoBusqueda !== '') {
            // Redirigir a la página BusquedaPers.html con el texto del buscador como parámetro
            window.location.href = `../../Pages/PaginaBusqueda/BusquedaPers.html?texto=${encodeURIComponent(textoBusqueda)}`;
        }
    }
});
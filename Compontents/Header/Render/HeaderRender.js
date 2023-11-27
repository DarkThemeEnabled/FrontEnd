// function GenerarHeader() {
//     const barraHeader = document.createElement('nav');
//     barraHeader.className = 'row nav-principal';
//     barraHeader.innerHTML = `
//         <div class="col-2">
//         </div>
//         <div class="col-8" id="Nav">
//             <div class="nav-container">
//                 <div class="titulo-nav">
//                     <a href="../../index.html" class="quitar-color">
//                         <img src="../../Assets/Img/LogoNav.png" alt="Logo Gastronet" class="logo-nav">
//                         <h3 class="titulo-del-nav">GASTRONET</h3>
//                     </a>
//                 </div>
//                 <div class="input-container-nav">
//                 <a href="../../Pages/PaginaBusqueda/BusquedaPers.html" type="button" id="icono-buscar">
//                         <i class="fa-solid fa-magnifying-glass"></i>
//                 </a>
//                     <input type="text" placeholder="¿Qué te tienta preparar?" class="input-nav" id="barra-busqueda">
//                 </div>
//                 <div class="nav-login">
//                     <a class="text-acceder" href="../../Pages/Auth/Login.html">
//                         <i class="fa-solid fa-right-to-bracket"></i>
//                         Acceder
//                     </a>
//                 </div>
//             </div>
//         </div>
//         <div class="col-2">
//         </div>
//     `;
//     return barraHeader;
// }
// const contenedor = document.getElementById('Nav');
// const header = GenerarHeader();
// contenedor.appendChild(header);

// document.addEventListener('DOMContentLoaded', () => {
//     // Obtener referencia al nuevo botón de búsqueda
//     const botonBusqueda = document.getElementById('icono-buscar');

//     // Obtener referencia al input de búsqueda
//     const inputBusqueda = document.getElementById('barra-busqueda');

//     // Agregar evento al nuevo botón de búsqueda
//     if (botonBusqueda) {
//         botonBusqueda.addEventListener('click', realizarBusqueda);
//     }

//     // Agregar evento para la tecla Enter en el input de búsqueda
//     if (inputBusqueda) {
//         inputBusqueda.addEventListener('keydown', (event) => {
//             if (event.key === 'Enter') {
//                 realizarBusqueda();
//             }
//         });
//     }

//     // Función para realizar la búsqueda y redirigir
//     function realizarBusqueda() {
//         const textoBusqueda = inputBusqueda.value.trim();
//         if (textoBusqueda !== '') {
//             // Redirigir a la página BusquedaPers.html con el texto del buscador como parámetro
//             window.location.href = `../../Pages/PaginaBusqueda/BusquedaPers.html?texto=${encodeURIComponent(textoBusqueda)}`;
//         }
//     }
// });

import { isAuthenticated, getUserData } from '../../../Functions(js)/AuthFunctions/AuthGuard.js';

function GenerarHeader() {
    const barraHeader = document.createElement('nav');
    barraHeader.className = 'row nav-principal';
    barraHeader.innerHTML = `
        <div class="col-2"></div>
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
        <div class="col-2"></div>
    `;
    return barraHeader;
}

function ModificarNavLogin() {
    if (isAuthenticated()) {
        const userData = getUserData();
        if (userData) {
            const navLogin = document.querySelector('.nav-login');
            navLogin.innerHTML = `
                <div class="user-info">
                    <span>${userData.name}</span>
                    <button class="dropdown-button"><i class="fa-solid fa-chevron-down"></i></button>
                    <div class="dropdown-content" style="display: none;">
                        <a href="../../Pages/PerfilUsuario/PerfilUsuario.html">Mi perfil</a>
                        <a href="../../Pages/PostearOModReceta/CrearOModReceta.html">Crear receta</a>
                        <a href="#" onclick="logout();">Cerrar sesión</a>
                    </div>
                </div>
            `;

            // Añade el controlador de eventos después de actualizar el innerHTML.
            document.querySelector('.dropdown-button').addEventListener('click', function(event) {
                // Previene cualquier acción por defecto, como navegar a un enlace.
                event.preventDefault();
                // Selecciona el contenido desplegable asociado y alterna su visibilidad.
                const dropdownContent = navLogin.querySelector('.dropdown-content');
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            });
        }
    }
}

// Asegúrate de que el DOM esté cargado antes de llamar a GenerarHeader()
document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('Nav');
    const header = GenerarHeader();
    contenedor.appendChild(header);

    ModificarNavLogin(); // Modifica la sección de 'Acceder' si el usuario está autenticado
});

function toggleDropdown(event) {
    // Previene el comportamiento por defecto del evento, que puede ser útil si el botón está dentro de un formulario o si es un enlace.
    event.preventDefault();

    // Selecciona el menú desplegable relacionado
    const dropdownContent = document.querySelector('.dropdown-content');

    // Al dar click cierra el desplegable
    dropdownContent.style.display = 'none';

    // Alterna la visibilidad del menú desplegable
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Suponiendo que tienes un botón con la clase 'dropdown-button' en tu HTML
const dropdownButton = document.querySelector('.dropdown-button');
dropdownButton.addEventListener('click', toggleDropdown);
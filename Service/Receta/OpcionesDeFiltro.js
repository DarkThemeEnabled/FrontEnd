import { visualizarTodasLasRecetas } from "./visualizarTodasLasRecetas.js";

// Declarar variables globales para almacenar el estado de los checkboxes
let dificultadSeleccionada = 0;
let tipoRecetaSeleccionada = 0;

document.addEventListener('DOMContentLoaded', () => {
    const filtroDificultad = document.getElementById('filtro-dificultad');
    const filtroTipoReceta = document.getElementById('filtro-tipo-receta');

    const opcionesDificultad = document.createElement('div');
    opcionesDificultad.classList.add('opciones-filtro');

    const opcionesTipoReceta = document.createElement('div');
    opcionesTipoReceta.classList.add('opciones-filtro');

    const dificultades = [
        { id: 1, nombre: 'Principiante' },
        { id: 2, nombre: 'Fácil' },
        { id: 3, nombre: 'Media' },
        { id: 4, nombre: 'Difícil' },
        { id: 5, nombre: 'Avanzado' }
    ];

    // Tipos de Receta
    const tiposReceta = [
        { id: 1, nombre: 'Pastas' },
        { id: 2, nombre: 'Minutas' },
        { id: 3, nombre: 'Ensaladas' },
        { id: 4, nombre: 'Pescado' },
        { id: 5, nombre: 'Carne' },
        { id: 6, nombre: 'Vegetariana' },
        { id: 7, nombre: 'Sopas' },
        { id: 8, nombre: 'Postres' },
        { id: 9, nombre: 'Desayunos' },
        { id: 10, nombre: 'Bebidas' },
        { id: 11, nombre: 'Aperitivos' }
    ];

    // Función para generar las opciones de filtro
    const generarOpcionesFiltro = (contenedor, opciones, tipoFiltro) => {
        opciones.forEach(opcion => {
            const opcionElemento = document.createElement('div');
            opcionElemento.classList.add('opcion-filtro-item');
    
            // Crear checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `checkbox-${tipoFiltro}-${opcion.id}`;
            checkbox.value = opcion.id;
    
            // Crear etiqueta para el checkbox
            const label = document.createElement('label');
            label.textContent = opcion.nombre;
            label.htmlFor = `checkbox-${tipoFiltro}-${opcion.id}`;
    
            // Agregar checkbox y etiqueta al contenedor
            opcionElemento.appendChild(checkbox);
            opcionElemento.appendChild(label);
    
            // Agregar evento al checkbox
            opcionElemento.addEventListener('click', (event) => {
                // Si el clic no fue en el checkbox, toglea el estado del checkbox
                if (!event.target.matches('input[type="checkbox"]')) {
                    checkbox.checked = !checkbox.checked;
                }
            
                // Desmarcar las opciones anteriores
                opciones.forEach(opt => {
                    if (opt.elemento !== opcionElemento) {
                        const optCheckbox = opt.elemento.querySelector('input[type="checkbox"]');
                        optCheckbox.checked = false;
                    }
                });
            
                // Actualizar las variables globales según el tipo de filtro
                if (tipoFiltro === 'dificultad') {
                    dificultadSeleccionada = checkbox.checked ? opcion.id : 0;
                } else if (tipoFiltro === 'categoria') {
                    tipoRecetaSeleccionada = checkbox.checked ? opcion.id : 0;
                }
            
                // Llamar a visualizarTodasLasRecetas con las variables globales y el texto del URL
                const params = new URLSearchParams(window.location.search);
                const textoBusqueda = params.get('texto');
                visualizarTodasLasRecetas(textoBusqueda, dificultadSeleccionada, tipoRecetaSeleccionada);
            
                // Evitar que las opciones se replieguen
                event.stopPropagation();
            });
    
            // Agregar evento al texto
            label.addEventListener('click', (event) => {
                // Evitar que el clic en el texto propague al contenedor y active el evento de clic en el contenedor
                event.stopPropagation();
            });
    
            opcionElemento.addEventListener('mouseover', () => {
                // Cambia el color de fondo al pasar el ratón por encima
                opcionElemento.style.backgroundColor = '#f0f0f0';
            });
    
            opcionElemento.addEventListener('mouseout', () => {
                // Restaura el color de fondo al salir del ratón
                opcionElemento.style.backgroundColor = 'transparent';
            });
    
            opcion.elemento = opcionElemento; // Almacena la referencia al elemento en el objeto opción
    
            contenedor.appendChild(opcionElemento);
        });
    };

    // Agregar eventos de clic a los filtros
    filtroDificultad.addEventListener('click', (event) => {
        // Evitar que las opciones se replieguen al hacer clic en los checkboxes
        if (!event.target.matches('input[type="checkbox"]')) {
            opcionesDificultad.classList.toggle('mostrar-opciones');
        }
    });
    
    filtroTipoReceta.addEventListener('click', (event) => {
        // Evitar que las opciones se replieguen al hacer clic en los checkboxes
        if (!event.target.matches('input[type="checkbox"]')) {
            opcionesTipoReceta.classList.toggle('mostrar-opciones');
        }
    });

    // Generar opciones de filtro
    generarOpcionesFiltro(opcionesDificultad, dificultades, 'dificultad');
    filtroDificultad.appendChild(opcionesDificultad);

    generarOpcionesFiltro(opcionesTipoReceta, tiposReceta, 'categoria');
    filtroTipoReceta.appendChild(opcionesTipoReceta);
});
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
    const generarOpcionesFiltro = (contenedor, opciones) => {
        opciones.forEach(opcion => {
            const opcionElemento = document.createElement('div');
            opcionElemento.textContent = opcion.nombre;
            opcionElemento.classList.add('opcion-filtro-item');

            opcionElemento.addEventListener('click', () => {
                // Lógica para filtrar recetas según la opción seleccionada
                console.log(`Filtrar por ${contenedor.id}: ${opcion.nombre} (ID: ${opcion.id})`);

                // Resalta la opción seleccionada y quita resaltado a las demás
                opciones.forEach(opt => opt.elemento.classList.remove('seleccionado'));
                opcionElemento.classList.add('seleccionado');
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
    filtroDificultad.addEventListener('click', () => {
        opcionesDificultad.classList.toggle('mostrar-opciones');
    });

    filtroTipoReceta.addEventListener('click', () => {
        opcionesTipoReceta.classList.toggle('mostrar-opciones');
    });

    // Generar opciones de filtro
    generarOpcionesFiltro(opcionesDificultad, dificultades);
    filtroDificultad.appendChild(opcionesDificultad);

    generarOpcionesFiltro(opcionesTipoReceta, tiposReceta);
    filtroTipoReceta.appendChild(opcionesTipoReceta);
});
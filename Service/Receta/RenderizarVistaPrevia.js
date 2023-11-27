function renderizarVistaPreviaReceta(receta) {
    // Crear el contenedor principal de la receta
    const contenedorReceta = document.createElement('div');
    contenedorReceta.classList.add('contenedor-receta');
    contenedorReceta.dataset.recetaId = receta.id;
    // Crear el contenedor de imagen
    const contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add('contenedor-imagen');

    // Crear la imagen
    const imagenReceta = document.createElement('img');
    imagenReceta.src = receta.fotoReceta;
    imagenReceta.alt = 'Foto de la receta';
    imagenReceta.width = 350;
    imagenReceta.height = 240;

    // Crear la categoría y su recuadro
    const categoria = document.createElement('div');
    categoria.classList.add('categoria');
    categoria.textContent = receta.categoria.nombre;

    const recuadroCategoria = document.createElement('div');
    recuadroCategoria.classList.add('recuadro-categoria');

    // Crear la dificultad y el tiempo de preparación
    const dificultad = document.createElement('div');
    dificultad.classList.add('dificultad');
    dificultad.textContent = receta.dificultad.nombre;

    // Crear el título
    const titulo = document.createElement('div');
    titulo.classList.add('titulo');
    titulo.textContent = receta.titulo;

    // Agregar elementos al contenedor de imagen
    contenedorImagen.appendChild(imagenReceta);

    // Superponer la dificultad en la parte inferior izquierda de la imagen
    dificultad.classList.add('superpuesto-dificultad');
    contenedorImagen.appendChild(dificultad);

    // Superponer la categoría en la parte superior centrada de la imagen
    categoria.classList.add('superpuesto-categoria');
    recuadroCategoria.appendChild(categoria);
    contenedorImagen.appendChild(recuadroCategoria);

    // Agregar elementos al contenedor principal
    contenedorReceta.appendChild(contenedorImagen);

    // Agregar el título debajo de la imagen
    contenedorReceta.appendChild(titulo);

    // Devolver el contenedor principal
    return contenedorReceta;
}

export { renderizarVistaPreviaReceta };
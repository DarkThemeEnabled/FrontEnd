export default function GenerarCategorias(categoria) {
    const categoriasLista = document.createElement('li');
    categoriasLista.innerHTML = `
                ${categoria.id}- ${categoria.nombre.toUpperCase()}                 
    `;

    return categoriasLista;
};
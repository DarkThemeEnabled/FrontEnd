export default function GenerarCategorias(categoria) {
    const categoriasLista = document.createElement('li');
    categoriasLista.innerHTML = `
                <span id="categoria-data" value="${categoria.id}">${categoria.nombre.toUpperCase()}</span>              
    `;

    return categoriasLista;
};
async function BorrarListaIngredientes(id) {
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML= '';
    
}

const listaIngredientes = {
    Remove: BorrarListaIngredientes
};

export default listaIngredientes;
async function BorrarIngredienteSeleccionado(id) {
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML= '';
    
}

const ingredienteSeleccionado = {
    Remove: BorrarIngredienteSeleccionado
};

export default ingredienteSeleccionado;
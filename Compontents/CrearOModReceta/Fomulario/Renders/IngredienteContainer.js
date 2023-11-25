export default function GenerarContainerIngrediente(ingrediente) {
    const containerIngrediente = document.createElement('li');
    containerIngrediente.className = 'ingrediente-seleccionado';
    containerIngrediente.innerHTML = `
    <div class="ingrediente-widht horario-container input-default-settings">
        <span class="separador-nombre">${ingrediente.name}</span>
        <span class="separador-cantidad" >CANTIDAD:</span>
        <input type="number" class="input-cantidad" placeholder="Cant">
        <span> ${ingrediente.tipoMedida.name} </span>
    </div>
    <div class="ingrediente-subir-bajar">
        <i class="fa-solid fa-trash acomodar-iconos" id="borrar"></i>
       
    </div>                        
    `;

    return containerIngrediente;
};


export default function GenerarInputBusquedaIng() {
    const ingredientesLista = document.createElement('div');
    ingredientesLista.className = 'buscador-ingredientes'; 
    ingredientesLista.innerHTML = `
        <div>
        <input type="text" placeholder="Introducí el nombre del ingrediente" class="coreccion-bordes input-texto input-tags input-default-settings" id="input-de-ingredientes">   
        <ul class="general-submenu-settings submenu-ingredientes" id="sublista-ingredientes"></ul>
        </div>
        <i class="fa-solid fa-check icono" id="confirmar-ingrediente"></i>  
    `;

    return ingredientesLista;
};
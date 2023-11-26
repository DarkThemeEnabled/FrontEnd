export default function GenerarInputBusquedaIng() {
    const ingredientesLista = document.createElement('div');
    ingredientesLista.className = 'buscador-ingredientes'; 
    ingredientesLista.innerHTML = `
        <div class="mantiene-hover">
        <input type="text" placeholder="Introducí el nombre del ingrediente" class="coreccion-bordes input-texto input-tags input-default-settings" id="input-de-ingredientes">   
        <ul class="general-submenu-settings submenu-ingredientes" id="sublista-ingredientes"></ul>
        </div>
    `;

    return ingredientesLista;
};
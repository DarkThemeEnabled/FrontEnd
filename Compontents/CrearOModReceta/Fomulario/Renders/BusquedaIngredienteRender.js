export default function GenerarInputBusquedaIng() {
    const ingredientesLista = document.createElement('div');
    ingredientesLista.className = 'buscador-ingredientes'; 
    ingredientesLista.innerHTML = `
        <input type="text" placeholder="Introducí el nombre del ingrediente" class="coreccion-bordes input-texto input-tags input-default-settings">     
        <ul class="general-submenu-settings submenu-ingredientes" id="sublista-ingredientes"></ul>
    `;

    return ingredientesLista;
};
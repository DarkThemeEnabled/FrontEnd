function GenerarPosteoReceta() {
    const barraHeader = document.createElement('div');
    barraHeader.className = 'container-receta row';
    barraHeader.innerHTML = `
        <h1> PIZZA COMO LAS QUE HACIA MI ABUELA</h1>ss="col-2">
        <div class="row container-img-car" id="foto-caracteristicas-receta"></div>
        <div class="row col-6 container-ingredientes" id="ingredientes-receta"></div>
        <div class="row" id="pasos-receta container-pasos"></div>
    `;
    return barraHeader;
}
const contenedor = document.getElementById('Nav');
const header = GenerarPosteoReceta();
contenedor.appendChild(header)
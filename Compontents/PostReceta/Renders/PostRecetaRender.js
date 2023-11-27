export default function GenerarInfoGeneral() {
    const infoGeneral = document.createElement('div');
    infoGeneral.className = 'container-receta row';
    infoGeneral.innerHTML = `
        <div class="row container-img-car" id="foto-caracteristicas-receta"></div>
        <div class="row col-6 container-ingredientes" id="ingredientes-receta"></div>
        <div class="row container-pasos" id="pasos-receta"></div>
        <div class="col-12" id="Comentarios"></div>
    `;

    return infoGeneral;
};
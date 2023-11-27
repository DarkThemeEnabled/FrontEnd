export default function GenerarInfoCaracteristicas(Receta) {
    const infoGeneral = document.getElementById('foto-caracteristicas-receta');
    infoGeneral.innerHTML = `
    <h1> ${Receta.titulo.toUpperCase()}</h1>
    <div class="col-6 container-imagen">
        <img src="${Receta.fotoReceta}" alt="imagenprincipal" id="imagen-principal">
    </div>
    <div class="col-6 container-caracteristicas" id="informacion">
        <ul id="informacion-individual"></ul>
    </div>
    `;

    return infoGeneral;
};

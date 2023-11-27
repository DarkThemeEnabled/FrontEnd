export default function GenerarPasoIndividual(receta) {
    const pasoINdividual = document.createElement('div');
    pasoINdividual.className = 'contenedorrecetas';
    pasoINdividual.innerHTML = `
        <a href="../../Pages/PostReceta/PostDeReceta.html?id=${receta.id}" class="acomodar-receta">
                <div class="row">
                <img src="${receta.fotoReceta}" alt="placeholder"">
                <span>${receta.titulo}</span>
                </div>
                <div>
                </div>
        <a>
    `;

    return pasoINdividual;
};


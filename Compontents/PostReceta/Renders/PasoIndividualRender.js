export default function GenerarPasoIndividual(paso) {
    const pasoINdividual = document.createElement('li');
    pasoINdividual.className = 'acomodar-paso-div';
    pasoINdividual.innerHTML = `
        <div class="container-del-paso row">
                    <h5> PASO ${paso.orden}</h5>
                    <div class="col-7 descripcion-paso">
                        <span> ${paso.descripcion}
                        </span>
                    </div>
                    <div class="col-3 acomodo-img">
                        <img src="${paso.foto}" class="imagen-paso" alt="imagenprincipal">
                    </div>
            </div>

    `;

    return pasoINdividual;
};
export default function GenerarPasos() {
    const pasos = document.getElementById('pasos-receta');
    pasos.innerHTML = `
        <div class="acomodar-iconos">
            <i class="fa-solid fa-list"></i>
            <H3>PASOS</H3>
        </div>
        <ul class="borrar-list-style" id="pasos-individuales">
        </ul>
    `;

    return pasos;
};
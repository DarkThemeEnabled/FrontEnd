export default function GenerarPasos() {
    const pasoContainer = document.createElement('ul');
    pasoContainer.className = 'general-container';
    pasoContainer.innerHTML = `
            <li>    
                <h3 class="subtitulos-pagina-receta">¿CÓMO SE PREPARA?</h3>
            </li>
            <li id="lista-pasos">  
            </li>
            <li class= "container-paso">
                <div class='input-default-settings div-agregar' id="agregar-paso">
                    <i class="fa-solid fa-plus" id='i-agregar'></i>
                    <span id='span-agregar'>AGREGAR PASO</span>
                </div>
            </li>
            <li>
                </div>
                <div class="cambio-formulario cambio-formulario-dos-opciones">
                <h5 > <span id="cambio-a-ingredientes"><i class="fa-solid fa-arrow-left"></i>VOLVER A PASOS</span> </h5>
                <h5 > <span id="finalizar">FINALIZAR<i class="fa-solid fa-arrow-right"></i> </span> </h5>
                </div>
            </li>       
    `;

    return pasoContainer;
};
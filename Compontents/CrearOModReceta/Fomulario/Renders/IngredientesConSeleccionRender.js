export default function GenerarIngredientes() {
    const ingredientes = document.createElement('div');
    ingredientes.className = 'general-container';
    ingredientes.innerHTML = `
    <h3 class="subtitulos-pagina-receta">¿QUÉ INGREDIENTES LLEVA?</h3>
                    <ul class="container-formulario-general">
                        <li>
                            <div class="div-tag-formulario">
                                <i class="fa-solid fa-carrot"></i>
                                <span class="div-tag-formulario">INGREDIENTE</span>
                            </div>
                            <ul class="ingredientes-lista" >
                                <li>
                                <ul class="quitar-padding" id="ingrediente-ya-seleccionado"></ul>
                                </li>
                                <li id="buscador-de-ingredientes"> </li>
                            </ul>                         
                        </li>   
                    </ul>
    <div class="cambio-formulario cambio-formulario-dos-opciones">
    <h5 > <span id="cambio-a-formulario-gen"><i class="fa-solid fa-arrow-left"></i>VOLVER A INFO GENERAL</span> </h5>
    <h5 > <span id="cambio-a-pasos">AGREGAR LOS PASOS<i class="fa-solid fa-arrow-right"></i> </span> </h5>
    </div>
    
    `;

    return ingredientes;
};
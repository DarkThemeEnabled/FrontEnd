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
                            <ul class="ingredientes-lista">
                               
                                <li id="buscador-de-ingredientes"> </li>
                            </ul>                         
                        </li>   
                    </ul>
    `;

    return ingredientes;
};
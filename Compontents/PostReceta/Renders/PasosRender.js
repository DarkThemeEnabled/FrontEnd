export default function GenerarPasos() {
    const pasos = document.getElementById('pasos-receta');
    pasos.innerHTML = `
        <div class="acomodar-iconos">
            <i class="fa-solid fa-list"></i>
            <H3>PASOS</H3>
        </div>
        <ul class="borrar-list-style">
            <li>
                <div class="container-del-paso row">
                    <h5> PASO 1</h5>
                    <div class="col-8 descripcion-paso">
                        <span>No importa si hace frío o llueve, la sopa de pasta siempre es la mejor opción para la comida y la cena, pues tiene ese sabor casero e inigualable. Además, esta receta de sopa aguada es fácil, económica y muy rendidora, ¡será un éxito en casa!

                            Si no tienes tiempo para cocinar platillos elaborados, no te preocupes y prepara esta sopa aguada y acompaña con quesadillas, ¡está para chuparse los dedos!
                            
                            ¿Sabías qué? En México, la sopa de pasta también se conoce como sopa aguada y se prepara con sopa de fideos, de municiones o de letras
                        </span>
                    </div>
                    <div class="col-2">
                        <img src="../../Assets/Img/masa-pizza-t.jpg" class="imagen-paso" alt="imagenprincipal">
                    </div>
                </div>
            </li>

        </ul>
    `;

    return pasos;
};
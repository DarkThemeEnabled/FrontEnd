import cargaDeFormularioGeneral from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarInfoGeneral.js';
import generarDificultades from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarDificultades.js';
import generarCategorias from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarCategoriaReceta.js';
import generarIngredientes from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarIngredientes.js';
import generarInputBusqueda from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarImputIngrediente.js';
import generarListaIngredientes from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarSeleccionIngredientes.js';
import generarSectionIngredientes from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarContainerIngrediente.js';

let flag=true;
let infoIngrediente=null;
let inputNombreIngrediente=null;

document.addEventListener('DOMContentLoaded', function () {
    cargarFormularioInicial();

    document.body.addEventListener('click', function (event) {
        const targetId = event.target.id;
        if (targetId === 'cambio-de-formulario') {
            if (flag) {
                cargarElementosIngredientesConSeleccion();
                flag = false;
            } else {
                cargarFormularioInicial();
                flag = true;
            }
        }
    });
    
});


async function cargarFormularioInicial() {
    eliminarContainer();
    cargaDeFormularioGeneral.Get('Formulario');
    await generarDificultades.Get('lista-dificultades');
    await generarCategorias.Get('lista-categoria');
}

function cargarElementosIngredientesSinSeleccion() {
    eliminarContainer();

    generarIngredientes.Get('Formulario', false);
    generarInputBusqueda.Get('buscador-de-ingredientes');
    busquedaInput();
    DetectorIngredienteId();
    
}

//Ver como resolver lo de que el generar sector ingredientes se haga con el primero y luego se vaya agregando. Con el fuction usando el check es una buena forma.
function cargarElementosIngredientesConSeleccion() {
    eliminarContainer();

    generarIngredientes.Get('Formulario', true);
    generarInputBusqueda.Get('buscador-de-ingredientes');
    generarSectionIngredientes.Get('ingrediente-ya-seleccionado', 277);
    busquedaInput();
    DetectorIngredienteId();

}

function busquedaInput()
{
    inputNombreIngrediente = document.getElementById('input-de-ingredientes');
    inputNombreIngrediente.addEventListener('input', function (event) {
        const textoIngresado = event.target.value;
        generarListaIngredientes.Get('sublista-ingredientes', textoIngresado);
    });  
}

function DetectorIngredienteId()
{
    const ingredientesSpan = document.querySelectorAll('.submenu-ingredientes');
    console.log(ingredientesSpan);
    ingredientesSpan.forEach(function (span) {
        span.addEventListener('click', function (event) {
            infoIngrediente = event.target.textContent;
            inputNombreIngrediente.value = SplitNombreIngrediente(infoIngrediente);
        });
    });
}

function SplitNombreIngrediente(infoIngrediente)
{
    let partes = infoIngrediente.split(' - ');
    let soloNombre = partes[1];
    return soloNombre

}

function eliminarContainer()
{
    const formularioContainer = document.getElementById('Formulario');
    formularioContainer.innerHTML = '';
}










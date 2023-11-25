import cargaDeFormularioGeneral from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarInfoGeneral.js';
import generarDificultades from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarDificultades.js';
import generarCategorias from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarCategoriaReceta.js';
import generarIngredientes from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarIngredientesGeneral.js';
import generarInputBusqueda from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarImputIngrediente.js';
import generarListaIngredientes from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarSeleccionIngredientes.js';
import generarSectionIngredientes from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarContainerIngrediente.js';
import borrarListaIngredientes from '../../Compontents/CrearOModReceta/Fomulario/Generadores/BorrarListaIngredientes.js';
import generarSectorPasos from '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarPasoGeneral.js';
import generarPasoIndividual from  '../../Compontents/CrearOModReceta/Fomulario/Generadores/GenerarPasoIndividual.js';

//Variables globales almacenadora de datos
let titulo=null;
let descripcion=null;
let categoriaId=null;
let tiempoPrep=null;
let dificultadId=null;
let fotoPortada=null;
let video=null;
let ingredientes=[];
let pasos=[];

//Variables para funcionamiento
let flag=true;
let infoElement=null;
let inputNombreIngrediente=null;
let idIngrediente=null;
let contadorIngredientes = 0;


document.addEventListener('DOMContentLoaded', async function () {
    CargarFormularioInicial();
    document.body.addEventListener('click', async function (event) {
        const targetId = event.target.id;
 
        if (targetId === 'cambio-a-ingredientes') {
                await CargarElementosIngredientesConSeleccion();
        }
        if (targetId === 'cambio-a-formulario-gen') {
                CargarFormularioInicial();
                flag = true;
        }
        if (targetId === 'cambio-a-pasos')
            {
                CargarSeccionPasos()
            }
        if(targetId === 'borrar')
        {
            const LiABorrar = DetectarIngrediente();
            BorrarIngrediente(LiABorrar); 
        }
        if(targetId === 'agregar-paso' || targetId === 'i-agregar' || targetId === 'span-agregar')
        {
            CargarPaso();
        }
        if(targetId === 'borrar-paso')
        {
            const listaPasos = DetectarPaso();
            MetodosPasos(listaPasos,1);
        }
        if(targetId === 'subir-paso')
        {
            const listaPasos = DetectarPaso();
            MetodosPasos(listaPasos,2);
        }
        if(targetId === 'bajar-paso')
        {
            const listaPasos = DetectarPaso();
            MetodosPasos(listaPasos,3);
        }
        comprobandoDatos()
        await GuardarTitulo();
        await GuardarDescripcion();
        GuardarTiempoPrer();
    });
});

//FUNCIONES

//RENDERIZADORES

async function CargarFormularioInicial() {
    eliminarContainer();
    cargaDeFormularioGeneral.Get('Formulario');
    await generarDificultades.Get('lista-dificultades');
    await generarCategorias.Get('lista-categoria');
    
    SeleccionarElementoLista('span-dificultad','.submenu-dificultad', 'dificultadId');
    SeleccionarElementoLista('span-categoria','.submenu-categoria', 'categoriaId');
}

async function CargarElementosIngredientesConSeleccion() {
    eliminarContainer();
    await generarIngredientes.Get('Formulario');
    await generarInputBusqueda.Get('buscador-de-ingredientes');
    busquedaInput();
    GenerarSeccionIngrediente();
}

function BorrarIngrediente(liABorrar) {
    liABorrar.forEach(function (li) {
        const objetoLi = event.target.closest('li');
        objetoLi.remove();
    });
}

async function CargarSeccionPasos()
{
    eliminarContainer();
    generarSectorPasos.Get('Formulario');
    CargarPaso();
}

async function CargarPaso()
{
    generarPasoIndividual.Get('lista-pasos');
}

async function MetodosPasos(pasosLista,tipo)
{
    flag= true;
    if(pasosLista.length > 1)
    {
        pasosLista.forEach(function (li) {    
            const pasoLi = event.target.closest('li');
            if(tipo == 1)
            {
                pasoLi.remove();
            }
            if(tipo == 2)
            {
                const elementoAnterior = pasoLi.previousElementSibling;
                if (elementoAnterior !== null  && flag ) {
        
                    elementoAnterior.parentNode.insertBefore(pasoLi, elementoAnterior);
                    flag=false;
                }
            }
            if(tipo == 3)
            {
                const elementoSiguiente = pasoLi.nextElementSibling;
                if (elementoSiguiente !== null && flag ) {
                    elementoSiguiente.parentNode.insertBefore(pasoLi, elementoSiguiente.nextElementSibling);
                    flag=false;
                }
            }
        });
    }
}

function busquedaInput() {
    inputNombreIngrediente = document.getElementById('input-de-ingredientes');
    const sublistaIngredientes = document.getElementById('sublista-ingredientes');
  
    inputNombreIngrediente.addEventListener('input', function (event) {
      const textoIngresado = event.target.value;
      generarListaIngredientes.Get('sublista-ingredientes', textoIngresado);
      if (textoIngresado !== '') {
        MostrarSubListaIngredientes(sublistaIngredientes,inputNombreIngrediente);
      } else {
        OcultarSubListaIngredientes(sublistaIngredientes,inputNombreIngrediente);
      }
    });

    inputNombreIngrediente.addEventListener('blur', function () {
      const textoIngresado = inputNombreIngrediente.value.trim();
      if (textoIngresado === '') {
        sublistaIngredientes.classList.remove('mostrar-sublista');
      }
    });
  }
  
  function GenerarSeccionIngrediente()
  {
      const sublistaIngredientes = document.getElementById('sublista-ingredientes');
      inputNombreIngrediente = document.getElementById('input-de-ingredientes');
      const ingredientesSpan = document.querySelectorAll('.submenu-ingredientes');
      ingredientesSpan.forEach(function (span) {
          span.addEventListener('click', function (event) {
              infoElement = event.target.textContent;
              if (inputNombreIngrediente.value != null)
              {
                  inputNombreIngrediente.value = SplitNombre(infoElement);
                  agregarSeccionIngrediente()
                  OcultarSubListaIngredientes(sublistaIngredientes,inputNombreIngrediente);
              }      
          });
      });
  }

function eliminarContainer()
{
    const formularioContainer = document.getElementById('Formulario');
    formularioContainer.innerHTML = '';
}

async function agregarSeccionIngrediente()
{
    if (contadorIngredientes < 26)
    {
        contadorIngredientes=contadorIngredientes+1;
        idIngrediente=SplitId(infoElement);
        await generarSectionIngredientes.Get('ingrediente-ya-seleccionado', idIngrediente);
        inputNombreIngrediente.value = '';
        borrarListaIngredientes.Remove('sublista-ingredientes');
        infoElement = null;
    }
    

}

function OcultarSubListaIngredientes(sublistaIngredientes,inputNombreIngrediente)
{
    sublistaIngredientes.classList.remove('mostrar-sublista');
    inputNombreIngrediente.classList.add('input-default-settings');
}

function MostrarSubListaIngredientes(sublistaIngredientes,inputNombreIngrediente)
{
    sublistaIngredientes.classList.add('mostrar-sublista');
    inputNombreIngrediente.classList.add('funciona-porfa');
    inputNombreIngrediente.classList.remove('input-default-settings');    
}

//DETECTORES Y MODIFICADORES

function DetectarIngrediente()
{
    let listalo = document.querySelectorAll('.ingrediente-seleccionado');
    return listalo;
}


function DetectarPaso()
{
    let pasosIndividual = document.querySelectorAll('.paso-individual');
    return pasosIndividual;
}




function SeleccionarElementoLista(idSubLista,classSubLista,datoGuardado)
{
    const spanElementos = document.getElementById(idSubLista);
    const listaElementosSpan = document.querySelectorAll(classSubLista)
    listaElementosSpan.forEach(function (span) {
        span.addEventListener('click', function (event) {
            infoElement = event.target.textContent;
            spanElementos.textContent = SplitNombre(infoElement);
            GuardarIdEnSuVariable(datoGuardado,SplitId(infoElement));
        });
    });
    
}

function pepe(variableDondeGuardar,datoAGuardar)
{
    if (variableDondeGuardar == 'categoriaId')
    {
        categoriaId = datoAGuardar;
    }
    if (variableDondeGuardar == 'dificultadId')
    {
        dificultadId = datoAGuardar;
    }
    if (variableDondeGuardar == 'descripcion')
    {
        descripcion == datoAGuardar;
    }
    if (variableDondeGuardar == 'titulo')
    {
        titulo == datoAGuardar;
    }
}


function SplitNombre(infoIngrediente)
{
    let partes = infoIngrediente.split(' - ');
    let soloNombre = partes[1];
    return soloNombre

}

function SplitId(infoIngrediente)
{
    let partes = infoIngrediente.split(' - ');
    let idIngrediente = partes[0];
    return idIngrediente
}

//GUARDADO DE DATOS

function GuardarIdEnSuVariable(variableDondeGuardar,datoAGuardar)
{
    if (variableDondeGuardar == 'categoriaId')
    {
        categoriaId = datoAGuardar;
    }
    if (variableDondeGuardar == 'dificultadId')
    {
        dificultadId = datoAGuardar;
    }
}

async function GuardarTitulo()
{
    const tituloRecetaInput = document.getElementById('titulo-receta');

    tituloRecetaInput.addEventListener('input', function () {
        titulo = tituloRecetaInput.value;
});

}

async function GuardarDescripcion()
{
    const DescripcionReceta = document.getElementById('descripcion-receta');

    DescripcionReceta.addEventListener('input', function () {
        descripcion = DescripcionReceta.value;  
    });
    
}

async function GuardarTiempoPrer()
{
    const HoraReceta = document.getElementById('hora-receta');
    let hora=null;
    const MinutoReceta = document.getElementById('minuto-receta');
    let minuto = null;

    HoraReceta.addEventListener('input', function () {
        hora = HoraReceta.value;  
        console.log(hora);
    });
    MinutoReceta.addEventListener('input', function () {
        minuto = MinutoReceta.value;  
        console.log(minuto);
    });

}


function comprobandoDatos()
{
    console.log(titulo + " titulo");
    console.log(descripcion + " desc");
    console.log(categoriaId + " cat");
    console.log(tiempoPrep + " tiemp");
    console.log(dificultadId + " dif");
    console.log(fotoPortada + "fot");
    console.log(video + " vid");
    console.log(ingredientes + " ing");
    console.log(pasos + " pas");
}

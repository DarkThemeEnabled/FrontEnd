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
import PostRecetaApi from '../../Service/Receta/PostRecetaApi.js'
import { protectRoute } from '../AuthFunctions/AuthGuard.js';

//Variables globales almacenadora de datos
let tituloReceta=null;
let descripcionReceta=null;
let categoriaIdReceta=null;
let tiempoPrepReceta=null;
let dificultadIdReceta=null;
let fotoPortadaReceta=null;
let videoReceta=null;
let listaResultados = [];
let ingredientesReceta=[];
let pasosReceta=[];
let listaDePasos = [];
let topicsReceta=null;

//Variables para funcionamiento
let QueCargo=1;
let infoElement=null;
let inputNombreIngrediente=null;
let idIngrediente=null;
let contadorIngredientes = 0;


document.addEventListener('DOMContentLoaded', async function () {
    // protectRoute();
    CargarFormularioInicial();
    document.body.addEventListener('click', async function (event) {
        const targetId = event.target.id;
 
        if (targetId === 'cambio-a-ingredientes') {
                await GuardadoDatosAutomatico(QueCargo);
                comprobandoDatos();
                QueCargo=2
                await CargarElementosIngredientesConSeleccion();
                CargarDatosFormulario(QueCargo);
        }
        if (targetId === 'cambio-a-formulario-gen') {
            GuardadoDatosAutomatico(QueCargo);
            QueCargo = 1;
            CargarFormularioInicial();
            CargarDatosFormulario(QueCargo);
        }
        if (targetId === 'cambio-a-pasos')
            {
                GuardadoDatosAutomatico(QueCargo);
                QueCargo=3
                CargarSeccionPasos()
                CargarDatosFormulario(QueCargo);
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
        if(targetId === 'finalizar')
        {
            GuardadoDatosAutomatico(QueCargo);
            comprobandoDatos();
            CrearReceta();
        }
    
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
    GenerarSeccionIngrediente(true);
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
    let flag= true;
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
  
  function GenerarSeccionIngrediente(flag)
  {
      const sublistaIngredientes = document.getElementById('sublista-ingredientes');
      inputNombreIngrediente = document.getElementById('input-de-ingredientes');
      const ingredientesSpan = document.querySelectorAll('.submenu-ingredientes');
      ingredientesSpan.forEach(function (span) {
          span.addEventListener('click', function (event) {
              infoElement = event.target.textContent;
              if (inputNombreIngrediente.value != null)
              {
                  inputNombreIngrediente.value = infoElement;
                  idIngrediente = event.target.getAttribute('value');
                  agregarSeccionIngrediente(idIngrediente,'ingrediente-ya-seleccionado',flag);
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

//Acpa tengo el error
async function agregarSeccionIngrediente(idIngrediente,id,flag)
{
    if (contadorIngredientes < 26)
    {
        contadorIngredientes=contadorIngredientes+1;
        await generarSectionIngredientes.Get(id, idIngrediente,flag);
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
            const idElemento= event.target.getAttribute('value');
            spanElementos.textContent = infoElement;
            GuardarIdEnSuVariable(datoGuardado,idElemento);
        });
    });
    
}

function ArmarStringTopicBack(topics)
{
    return topics.replace(/-/g, '|');
}

function ArmarStringTopicFront(topics)
{
    return topics.replace(/\|/g, '-');
}

//GUARDADO DE DATOS

function GuardarIdEnSuVariable(variableDondeGuardar,datoAGuardar)
{
    if (variableDondeGuardar == 'categoriaId')
    {
        categoriaIdReceta = datoAGuardar;
    }
    if (variableDondeGuardar == 'dificultadId')
    {
        dificultadIdReceta = datoAGuardar;
    }
}

async function GuardarInputs(id,AQueVariable)
{
    let valor=null;
    const tituloRecetaInput = document.getElementById(id);
    valor = tituloRecetaInput.value;

    if (AQueVariable == 'titulo')
    {
        tituloReceta=valor;
    }
    if (AQueVariable == 'descripcion')
    {
        descripcionReceta = valor
    }
    if (AQueVariable == 'fotoPortada')
    {
        fotoPortadaReceta = valor;
    }
    if (AQueVariable == 'video')
    {
        videoReceta = valor;
    }
    if (AQueVariable == 'topics')
    {
        topicsReceta=ArmarStringTopicBack(valor);
    }
}

async function GuardarTiempoPrer()
{
    const HoraReceta = document.getElementById('hora-receta');
    const MinutoReceta = document.getElementById('minuto-receta');
    if (HoraReceta.value != null && MinutoReceta.value != null)
    {
        tiempoPrepReceta = HoraReceta.value.toString() + ":" + MinutoReceta.value.toString();
    }

}

async function GuardarIngredientesSeleccionados()
{
    const listaContenedora = document.getElementById('ingrediente-ya-seleccionado');
    const elementosLi = listaContenedora.querySelectorAll('.ingrediente-seleccionado');

    elementosLi.forEach(elementoLi => {
        const idDelIngrediente = elementoLi.querySelector('#ingrediente-nombre').getAttribute('value');
        const cantidadIngrediente = elementoLi.querySelector('.input-cantidad').value;
        
        const infoIngrediente = {
            ingredienteId: idDelIngrediente,
            cantidad: cantidadIngrediente,
        };

        listaResultados.push(infoIngrediente);
    });

    ingredientesReceta=listaResultados;
}

async function GuardarPasosSeleccionados()
{
    const listaPasos = document.getElementById('lista-pasos');
    const elementosLi = listaPasos.querySelectorAll('.paso-individual');
    elementosLi.forEach((elementoLi, index) => {
        const descripcionPaso = elementoLi.querySelector('#descripcion-paso').value;
        const fotoPaso = elementoLi.querySelector('#foto-paso').value;
        const orden = index + 1;
        const infoPaso = {
            orden: orden,
            descripcion: descripcionPaso,
            foto: fotoPaso
        };

        listaDePasos.push(infoPaso);
    });

    pasosReceta=listaDePasos;
}

async function GuardadoDatosAutomatico(QueAlmaceno)
{
    if (QueAlmaceno == 1)
    {
        GuardarInputs('titulo-receta','titulo');
        GuardarInputs('descripcion-receta','descripcion');
        GuardarInputs('foto-portada-receta','fotoPortada');
        GuardarInputs('video-receta','video');
        GuardarInputs('topics-receta','topics');
        GuardarTiempoPrer();
    }
    if (QueAlmaceno == 2)
    {
        GuardarIngredientesSeleccionados();
    }
    if (QueAlmaceno == 3)
    {
        GuardarPasosSeleccionados();
    }
    
}

function comprobandoDatos()
{
    console.log(tituloReceta);
    console.log(descripcionReceta);
    console.log(categoriaIdReceta);
    console.log(tiempoPrepReceta);
    console.log(dificultadIdReceta);
    console.log(fotoPortadaReceta);
    console.log(videoReceta);
    console.log(ingredientesReceta);
    console.log(pasosReceta);
    console.log(topicsReceta);
}

//CARGA DE DATOS

function CargarDatosFormulario(QueCargo)
{
    if (QueCargo == 1)
    {
        CargarDatoFormularioGeneral('titulo-receta',tituloReceta);
        CargarDatoFormularioGeneral('descripcion-receta',descripcionReceta);
        
        CargarDatoFormularioGeneral('foto-portada-receta',fotoPortadaReceta);
        CargarDatoFormularioGeneral('video-receta',videoReceta);
        CargarDatoFormularioGeneral('topics-receta',ArmarStringTopicFront(topicsReceta));

        CargarDatoFormularioGeneral('hora-receta',Dividirhorario(tiempoPrepReceta,true));
        CargarDatoFormularioGeneral('minuto-receta',Dividirhorario(tiempoPrepReceta,false));
    }
    if (QueCargo == 2)
    {
        CargarDatoIngredientes(ingredientesReceta,'ingrediente-ya-seleccionado');
    }
    if (QueCargo == 3)
    {
        // GuardarPasosSeleccionados();
    }
}
function Dividirhorario(tiempoPrep,flag)
{
    let tiempoTotal=tiempoPrep.split(':');
    let tiempoDividido=null; 
    if (flag)
    {
        tiempoDividido = tiempoTotal[0]
    }
    else
    {
        tiempoDividido = tiempoTotal[1]
    }
    return tiempoDividido
}
function CargarDatoFormularioGeneral(id,valor)
{
    if (valor != null)
    {
        const ElementoACargar = document.getElementById(id);
        ElementoACargar.value=valor;
    }
}

async function CargarDatoIngredientes(ingredientes,id)
{
    if (ingredientes.length > 0) {
        ingredientes.forEach(async function(ingrediente) {
            const idIngrediente = ingrediente.id;
            await generarSectionIngredientes.Get(id, idIngrediente,false);
        });
    }
}

async function CargarPasosSeleccionados(pasos,id)
{
    // if (pasos.length > 0)
    //     {
    //         pasos.forEach(async function(paso)
    //         {
    //             generarPasoIndividual.Get('lista-pasos');
    //         });
    //     }
}

//Enviar datos al backend
async function CrearReceta()
{
    let response=null;

    const request = {
        categoriaRecetaId: categoriaIdReceta,
        dificultadId: dificultadIdReceta,
        usuarioId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        titulo: tituloReceta,
        descripcion: descripcionReceta,
        fotoReceta: fotoPortadaReceta,
        video: videoReceta,
        tiempoPreparacion: tiempoPrepReceta,
        topics: topicsReceta,
        listaPasos: pasosReceta,
        listaIngredienteReceta: ingredientesReceta,
      };
    response=await PostRecetaApi.Post(request)
    const idReceta = await response.id;
    window.location.href = `../../Pages/PostReceta/PostDeReceta.html?id=${idReceta}`;


}
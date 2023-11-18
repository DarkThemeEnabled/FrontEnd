import cargaDeFormularioGeneral from './Generadores/GenerarInfoGeneral.js';
import generarDificultades from './Generadores/GenerarDificultades.js';

cargaDeFormularioGeneral.Get('Formulario');
await generarDificultades.Get('lista-dificultades')
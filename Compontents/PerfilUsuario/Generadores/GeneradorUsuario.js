import UsuarioPerfil from '../Renders/RenderUsuario.js';
import UsuarioReceta from '../Renders/RenderRecetasUsuario.js';

async function CargarFormularioGeneral(id) {
    const contenedor = document.getElementById(id);
    const cargaFormularioGeneral = UsuarioPerfil();
    contenedor.appendChild(cargaFormularioGeneral);
    const otra = UsuarioReceta();
    contenedor.appendChild(otra);
}

const cargaDeFormularioGeneral = {
    Get: CargarFormularioGeneral
};

export default cargaDeFormularioGeneral;
const getRecetas = async (tituloOIngrediente, dificultad, categoria) => {
    let result = [];
    let url = `https://localhost:7015/api/Receta?`;

    if (tituloOIngrediente) {
        url += `tituloOIngrediente=${encodeURIComponent(tituloOIngrediente)}&`;
    }
    if (dificultad) {
        url += `dificultad=${encodeURIComponent(dificultad)}&`;
    }
    if (categoria) {
        url += `categoria=${encodeURIComponent(categoria)}&`;
    }
    
    if (url.endsWith('&')) {
        url = url.slice(0, -1);
    }

    let response = await fetch(url);

    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const Api = {
    Get: getRecetas
};

export default Api;
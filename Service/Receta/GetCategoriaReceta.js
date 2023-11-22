const getCategoriasReceta = async () => {
    let result = [];
    let response = await fetch(`https://localhost:7015/api/v1/CategoriaReceta`);
    
    if (response.ok){
        result = await response.json();
    }
    return result;
}

const ApiCategorias = {
    GetCategorias : getCategoriasReceta
};

export default ApiCategorias;
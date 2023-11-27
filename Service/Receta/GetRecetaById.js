const getRecetaById = async (id) => {
    let result = [];
    let response = await fetch(`https://localhost:7015/api/Receta/${id}`);
    if (response.ok){
        result = await response.json();
    }
    return result;
}

const ApiRecetaById = {
    GetCategorias : getRecetaById
};

export default ApiRecetaById;
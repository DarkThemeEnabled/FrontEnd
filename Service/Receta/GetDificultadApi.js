const getDificultades = async () => {
    let result = [];
    let response = await fetch(`https://localhost:7015/api/v1/Dificultad`);
    if (response.ok){
        result = await response.json();
    }
    return result;
}

const ApiDificultades = {
    GetDificultades : getDificultades
};

export default ApiDificultades;
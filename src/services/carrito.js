const BASE_URL = "http://localhost:8000"

export const getCarrito = async (id) => {
    try {
        const respuesta = await fetch(`${BASE_URL}/cart/${id}`);
         return await respuesta.json();
    } catch (error) {
        console.error(error);
    }
}

export const addToCart = async (datos) => {
    try {
        console.log(datos)
        const resp = await fetch (`${BASE_URL}/cart/add`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });
        return await resp.json()
    } catch (error) {
        throw error;
    }
}

export const deleteE = async (id) => {
    try {
        const resp = await fetch(`${BASE_URL}/cart/remove/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return respuesta.ok;
    } catch (error) {
        
    }
}
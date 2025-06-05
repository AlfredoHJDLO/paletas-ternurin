const BASE_URL = "http://localhost:8000"

export const addProducto = async (datos) => {
    const token = localStorage.getItem('token')
    try {
        console.log(datos)
        const resp = await fetch (`${BASE_URL}/paletas/`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(datos)
        });
        return await resp.json()
    } catch (error) {
        throw error;
    }
}

export const deleteProducto = async (id) => {
    const token = localStorage.getItem('token')
    try {
        const resp = await fetch(`${BASE_URL}/paletas/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        });
        return respuesta.ok;
    } catch (error) {
        
    }
}
const BASE_URL = "http://localhost:8000"

export const getCarrito = async (id) => {
    const token = localStorage.getItem('token')
    try {
        const respuesta = await fetch(`${BASE_URL}/cart/${id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        });
         return await respuesta.json();
    } catch (error) {
        console.error(error);
    }
}

export const addToCart = async (datos) => {
    const token = localStorage.getItem('token')
    try {
        console.log(datos)
        const resp = await fetch (`${BASE_URL}/cart/add`, {
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

export const actualizarUno = async (id, datos) => {
    const token = localStorage.getItem('token')
    try {
        const resp = await fetch(`${BASE_URL}/paletas/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(datos)
        });
        return await resp.json();
    } catch (error) {
        console.error("Error al actualizar movimiento:", error);
        throw error;
    }
};

export const deleteE = async (id) => {
    const token = localStorage.getItem('token')
    try {
        const resp = await fetch(`${BASE_URL}/cart/remove/${id}`, {
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

export const deleteC = async (id) => {
    const token = localStorage.getItem('token')
    try {
        const resp = await fetch(`${BASE_URL}/cart/clear/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        });
        return resp.ok;
    } catch (error) {
        
    }
}

export const addOrder = async (id) => {
    const token = localStorage.getItem('token')
    try {
        const resp = await fetch (`${BASE_URL}/orders?user_id=${id}`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        });
        return await resp.json()
    } catch (error) {
        throw error;
    }
}

export const getPedido = async (id) => {
    const token = localStorage.getItem('token')
    try {
        const respuesta = await fetch(`${BASE_URL}/orders/user/${id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        });
         return await respuesta.json();
    } catch (error) {
        console.error(error);
    }
}
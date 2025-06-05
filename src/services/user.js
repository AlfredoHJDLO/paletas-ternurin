const BASE_URL = "http://localhost:8000"

export const username_get = async (token) => {
    try {
        const respuesta = await fetch(`${BASE_URL}/users/me`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        });
        return await respuesta.json();
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        throw error;
    }
}

export const login = async (datos) => {
    try {
        const response = await fetch("http://localhost:8000/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: datos,
        });
        return await response
    } catch (error) {

    }
}

export const create_user = async (datos) => {
    try {
        const resp = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });
        return await resp.json()
    } catch (error) {
        console.error("Error al agregar movimiento:", error);
        throw error;
    }
}
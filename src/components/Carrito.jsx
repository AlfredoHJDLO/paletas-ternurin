import { useEffect, useState } from "react";
import { deleteE, getCarrito } from "../services/carrito";
import "./carrito.css"

export function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(0);

    const id_user = 0;
    const API_BASE_URL = "http://localhost:8000";

    useEffect (() => {
        const cargarCarrito = async () => {
            try {
                const data = await getCarrito(id_user);
                setCarrito(data);
            } catch (error) {
                console.error(error);
            }
        };
        cargarCarrito()
    }, [reloadTrigger])

    const eliminar = async (id) => {
        const ok = await deleteE(id);
        setReloadTrigger(prev => prev + 1);
    }

    return (
        <>
            <div className="contenedor">
                <h1>Carrito de compras</h1>
                {carrito.length > 0 ? (
                    carrito.map((item, index) => (
                        <div key={index} className="carrito-card">
                        <img
                        src={`${API_BASE_URL}${item.imagen_url}`}
                        alt={item.nombre}
                        className="carrito-card-img"
                        />
                        
                        <div className="carrito-card-info">
                        <div className="carrito-card-header">
                            <span className="nombre">{item.nombre}</span>
                            <span className="precio">${item.precio.toFixed(2)}</span>
                        </div>

                        <div className="carrito-card-body">
                            <span className="cantidad">Cantidad: {item.quantity}</span>
                            <span className="subtotal">Subtotal: ${(item.precio * item.quantity).toFixed(2)}</span>
                        </div>

                        <button
                            className="eliminar-btn"
                            onClick={() => eliminar(item.id)}
                        >
                            Eliminar
                        </button>
                        </div>
                    </div>
                    ))
                ) :(
                    <h2>No hay paletas agregadas</h2>
                )}

                {carrito.length > 0 && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Total: $
          {carrito.reduce(
            (total, item) => total + item.precio * item.quantity,
            0
          )}
        </div>
      )}
            </div>
        </>
    );
}
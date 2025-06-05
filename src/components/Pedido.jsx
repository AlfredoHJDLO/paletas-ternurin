import { useEffect, useState } from "react";
import { getPedido } from "../services/carrito";
import "./carrito.css"

export function Pedido() {
    const [carrito, setCarrito] = useState({
  user_id: null,
  id: null,
  imagen_url: '',
  created_at: '',
  attended: false,
  items: []
});
    const [reloadTrigger, setReloadTrigger] = useState(0);

    const id_user = localStorage.getItem('Id');
    const API_BASE_URL = "http://localhost:8000";

    useEffect(() => {
        const cargarCarrito = async () => {
            try {
                const data = await getPedido(id_user);
                setCarrito(data);
                
            } catch (error) {
                console.error(error);
            }
        };
        console.log(carrito)
        cargarCarrito()
    }, [reloadTrigger])


    return (
        <>
            <div className="contenedor">
                <h1>Ms pedidos</h1>
                {carrito !== null ? (
                    carrito.items.map((item, index) => (
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

                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No hay pedidios</h2>
                )}
            </div>
        </>
    );
}
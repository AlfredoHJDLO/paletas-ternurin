import { useEffect, useState } from "react";
import { addOrder, deleteC, deleteE, getCarrito } from "../services/carrito";
import "./carrito.css"
import { useNavigate } from "react-router-dom";

export function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(0);

    const id_user = localStorage.getItem('Id');
    const API_BASE_URL = "http://localhost:8000";
    const navigate = useNavigate();

    if (id_user === null){
        navigate('/login')
    }

    useEffect(() => {
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

    const comprar = async (id) => {
        const resp1 = await addOrder(id);
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
                ) : (
                    <h2>No hay paletas agregadas</h2>
                )}

                {carrito.length > 0 && (
                    <div style={{ marginTop: '20px', fontWeight: 'bold', display:'flex', alignItems:'center', justifyContent:'space-between', fontFamily:"Arial" }}>
                        Total: $
                        {carrito.reduce(
                            (total, item) => total + item.precio * item.quantity,
                            0
                        )}
                        <button className="boton-rosa" onClick={()=> {comprar(id_user)}}>Comprar</button>
                    </div>
                )}
            </div>
        </>
    );
}
import React from "react";
import { useEffect, useState } from "react"
import "./admin.css"
import { addProducto, deleteProducto } from "../../services/producto";
import { actualizarUno } from "../../services/carrito";

export function Admin() {
    const [paletas, setPaletas] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(0);
    const [modal, setModal] = useState(false);
    const [modalA, setModalA] = useState(false);
    const [paletaSeleccionada, setPaletaSeleccionada] = useState(null);
    const [error, setError] = useState(null);

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [precio, setPrecio] = useState(0);
    const [oferta, setOferta] = useState('');

    const API_BASE_URL = "http://localhost:8000";

    useEffect(() => {
        // Función asíncrona para cargar las paletas
        const fetchPaletas = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/paletas/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPaletas(data); // Actualiza el estado con los datos de las paletas
            } catch (error) {
                console.error("Error al obtener las paletas:", error);
                setError("No se pudieron cargar las paletas. Inténtalo de nuevo más tarde.");
            }
        };

        fetchPaletas(); // Llama a la función cuando el componente se monta
    }, [reloadTrigger]);

    const eliminar = async (id) => {
        const ok = await deleteProducto(id);
        setReloadTrigger(prev => prev + 1);
    }

    const actualizar = async (paletaSeleccionada) => {
        const act = await actualizarUno(paletaSeleccionada.id, paletaSeleccionada);
        setReloadTrigger(prev => prev + 1);
        setModalA(false);
    }

    const agregar = async (data) => {
        const datos = {
            "nombre": nombre,
            "descripcion": descripcion,
            "ingredientes": ingredientes,
            "precio": precio,
            "imagen_url": "/static/images/uva.jpg",
            "tiene_oferta": oferta.trim() !== "",
            "texto_oferta": oferta.trim() !== "" ? oferta : null
        }
        const add = await addProducto(datos);
        setReloadTrigger(prev => prev + 1);
        setModal(false);
    }

    return (
        <>
            <div className="contenedorAdmin">
                <h1>Bienvenido {localStorage.getItem('user')}</h1>
                <button className="boton-rosa" onClick={() => {setModal(true)}}>Agregar</button>
                {paletas.length > 0 ? (
                    paletas.map((item, index) => (
                        <div key={index} className="productosC">
                            <img src={`${API_BASE_URL}${item.imagen_url}`}
                                alt={item.nombre}
                                className="carrito-card-img"
                            />
                            <div className="carrito-card-info">
                                <div className="carrito-card-header">
                                    <span className="nombre">{item.nombre}</span>
                                    <span className="precio">${item.precio.toFixed(2)}</span>
                                </div>

                                <div className="carrito-card-body">
                                    <button
                                        className="actualizar-btn"
                                        onClick={() => { setPaletaSeleccionada(item); setModalA(true) }}
                                    >
                                        Actualizar
                                    </button>
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
                    <h2>No hay productos</h2>
                )}
            </div>
            {modalA && paletaSeleccionada && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setModalA(false)}>
                            &times;
                        </button>
                        <h2>Actualizar paleta</h2>
                        <img src={`${API_BASE_URL}${paletaSeleccionada.imagen_url}`} alt="" style={{ width: '100%', borderRadius: '8px', margin: '16px 0', aspectRatio: '1', objectFit: 'cover' }} />
                        <input
                            type="text"
                            value={paletaSeleccionada.nombre}
                            onChange={(e) =>
                                setPaletaSeleccionada(prev => ({
                                    ...prev,
                                    nombre: e.target.value,
                                }))
                            }
                            placeholder="Escribe el nombre de la paleta..."
                        />
                        <textarea
                            value={paletaSeleccionada.descripcion}
                            onChange={(e) =>
                                setPaletaSeleccionada((prev) => ({
                                    ...prev,
                                    descripcion: e.target.value,
                                }))
                            }
                            rows={4}
                            cols={40}
                            placeholder="Escribe la descripción de la paleta..."
                        />
                        <input
                            type="text"
                            value={paletaSeleccionada.ingredientes}
                            onChange={(e) =>
                                setPaletaSeleccionada(prev => ({
                                    ...prev,
                                    ingredientes: e.target.value,
                                }))
                            }
                            placeholder="Escribe los ingredientes de la paleta..."
                        />
                        <input
                            type="number"
                            value={paletaSeleccionada.precio}
                            onChange={(e) =>
                                setPaletaSeleccionada(prev => ({
                                    ...prev,
                                    precio: e.target.value,
                                }))
                            }
                        />

                        <button className="modal-button" onClick={() => {
                            //agregarAlCarrito(paletaSeleccionada, cantidad);
                            actualizar(paletaSeleccionada)
                        }}>
                            Actualizar
                        </button>
                    </div>
                </div>
            )}

            {modal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setModal(false)}>
                            &times;
                        </button>
                        <h2>Agregar paleta</h2>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) =>
                                setNombre(e.target.value)
                            }
                            placeholder="Escribe el nombre de la paleta..."
                        />
                        <textarea
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)
                            }
                            rows={4}
                            cols={40}
                            placeholder="Escribe la descripción de la paleta..."
                        />
                        <input
                            type="text"
                            value={ingredientes}
                            onChange={(e) =>
                                setIngredientes(e.target.value)
                            }
                            placeholder="Escribe los ingredientes de la paleta..."
                        />
                        <input
                            type="number"
                            value={precio}
                            onChange={(e) =>
                                setPrecio(e.target.value)
                            }
                        />

                        <input
                            type="text"
                            value={oferta}
                            onChange={(e) =>
                                setPrecio(e.target.value)
                            }
                            placeholder="Escribe alguna oferta de la paleta..."
                        />

                        <button className="modal-button" onClick={() => {
                            //agregarAlCarrito(paletaSeleccionada, cantidad);
                            agregar(paletaSeleccionada)
                        }}>
                            Agregar
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
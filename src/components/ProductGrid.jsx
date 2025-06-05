// src/components/ProductGrid.jsx
import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
import ProductCard from './ProductCard';
import { addToCart } from '../services/carrito';
import "./productGird.css"

function ProductGrid() {
  const [paletas, setPaletas] = useState([]); // Estado para almacenar las paletas
  const [carrito, setCarrito] = useState(false);
  const [loading, setLoading] = useState(true); // Estado para indicar si se están cargando datos
  const [error, setError] = useState(null); // Estado para manejar errores
  const [paletaSeleccionada, setPaletaSeleccionada] = useState(null);
  const [cantidad, setCantidad] = useState(1);


  // URL base de tu API de FastAPI
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
      } finally {
        setLoading(false); // Deja de mostrar el indicador de carga
      }
    };

    fetchPaletas(); // Llama a la función cuando el componente se monta
  }, []); // El array vacío de dependencias [] asegura que useEffect se ejecute solo una vez al montar

  const handleAddToCart = async (paleta, cantidad) => {
    const datos = {
      user_id: localStorage.getItem('Id'),
      quantity: cantidad,
      paleta_id: paleta.id,
      nombre: paleta.nombre,
      descripcion: paleta.descripcion,
      ingredientes: paleta.ingredientes,
      precio: paleta.precio,
      imagen_url: paleta.imagen_url,
      tiene_oferta: paleta.tiene_oferta,
      texto_oferta: paleta.texto_oferta
    }
    await addToCart(datos)
    console.log("agregado")
  };



  if (loading) {
    return (
      <section id="productos" style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '36px', color: '#c4978c' }}>Cargando Paletas...</h2>
        <p>Un momento, por favor.</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="productos" style={{ textAlign: 'center', padding: '40px 20px', color: 'red' }}>
        <h2 style={{ fontSize: '36px', color: '#c4978c' }}>Error al cargar</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section id="productos" style={{
      padding: '40px 0',
      backgroundColor: '#fff', // Puedes ajustar el color de fondo aquí
      color: '#333' // Ajusta el color del texto si cambias el fondo
    }}>
      <h2 style={{
        fontSize: '36px',
        color: '#c4978c',
        textAlign: 'center',
        fontFamily: 'Fredoka',
        fontWeight: '400',
        marginBottom: '40px'
      }}>
        Nuestros Productos
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {paletas.length > 0 ? (
          paletas.map((paleta) => (
            <ProductCard
              key={paleta.id}
              imageSrc={`${API_BASE_URL}${paleta.imagen_url}`} /* Construye la URL completa de la imagen */
              name={paleta.nombre}
              price={`$${paleta.precio.toFixed(2)} MXN`}
              hasOffer={paleta.tiene_oferta}
              offerText={paleta.texto_oferta}
              onAddToCart={() => {setPaletaSeleccionada(paleta); setCarrito(true);}}
            />
          ))
        ) : (
          <p>No hay paletas disponibles en este momento.</p>
        )}
      </div>
      {carrito && paletaSeleccionada && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setCarrito(false)}>
              &times;
            </button>
            <h2>{paletaSeleccionada.nombre}</h2>
            <img src={`${API_BASE_URL}${paletaSeleccionada.imagen_url}`} alt="" style={{ width: '100%', borderRadius: '8px', margin: '16px 0' }} />
            <p>{paletaSeleccionada.descripcion}</p>
            <p><strong>Ingredientes:</strong> {paletaSeleccionada.ingredientes}</p>
            <p><strong>Precio:</strong> ${paletaSeleccionada.precio}</p>
            
            <div className="quantity-selector">
              <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>&laquo;</button>
              <span>{cantidad}</span>
              <button onClick={() => setCantidad(cantidad + 1)}>&raquo;</button>
            </div>

            <button className="modal-button" onClick={() => {
              //agregarAlCarrito(paletaSeleccionada, cantidad);
              handleAddToCart(paletaSeleccionada, cantidad)
              setCarrito(false);
              setCantidad(1);
            }}>
              Agregar {cantidad} al carrito
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

export default ProductGrid;
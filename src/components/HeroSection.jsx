import React, { useState } from 'react';
import { addToCart } from '../services/carrito';
import "./productGird.css"
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const [cantidad, setCantidad] = useState(1);
    const [modalPersonalizarAbierto, setModalPersonalizarAbierto] = useState(false);
    const [forma, setForma] = useState("");
    const [sabor, setSabor] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (localStorage.getItem('Id') === null){
      navigate('/login')
    }
    e.preventDefault();

    if (!forma || !sabor) {
      alert("Selecciona forma y sabor.");
      return;
    }

    const paletaPersonalizada = {
      user_id: 0,
      quantity: cantidad,
      paleta_id: null,
      nombre: `Paleta personalizada ${forma} de ${sabor}`,
      descripcion: "N/A",
      ingredientes: sabor,
      precio: 30,
      imagen_url: `/static/images/${sabor}.jpg`,
      tiene_oferta: false,
      texto_oferta: null

    };

    await addToCart(paletaPersonalizada)// agrega al carrito como si fuera otra paleta
    setModalPersonalizarAbierto(false);
    setForma("");
    setCantidad(1);
    setSabor("");
  };
  return (
    <section style={{
      backgroundColor: '#FFFEE1', // Color de fondo similar al Header
      textAlign: 'center',
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <h1 style={{
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '96px', // Tamaño de fuente grande
        color: '#9E6D4E', // Color marrón del texto
        margin: '0 auto 30px',
        maxWidth: '700px',
        lineHeight: '1.1'
      }}>
        Dulzura en cada mordida
      </h1>
      <button onClick={() => setModalPersonalizarAbierto(true)} style={{
        fontFamily: 'Fredoka, sans-serif',
        backgroundColor: '#FA8CB1', // Rosa del botón
        color: 'white',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '25px',
        fontSize: '18px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s ease'
      }}>
        ¡Personaliza tu paleta!
      </button>

      {/* Flechas de navegación (simuladas, si fuera un carrusel) */}
      <div style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '20px',
        fontSize: '40px',
        color: '#ccc',
        cursor: 'pointer',
        userSelect: 'none'
      }}>
        &lt;
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '20px',
        fontSize: '40px',
        color: '#ccc',
        cursor: 'pointer',
        userSelect: 'none'
      }}>
        &gt;
      </div>
      {modalPersonalizarAbierto && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={() => setModalPersonalizarAbierto(false)}>&times;</button>
          <h2>Personaliza tu Paleta</h2>

          <form onSubmit={handleSubmit}>
            <label>Forma:</label>
            <select value={forma} onChange={(e) => setForma(e.target.value)}>
              <option value="">Selecciona forma</option>
              <option value="ternurin">Ternurín</option>
              <option value="labubu">Labubu</option>
              <option value="capibara">Capibara</option>
            </select>

            <label>Sabor:</label>
            <select value={sabor} onChange={(e) => setSabor(e.target.value)}>
              <option value="">Selecciona sabor</option>
              <option value="mango">Mango</option>
              <option value="uva">Uva</option>
              <option value="fresa">Fresa</option>
              <option value="yogurt">Yogurt</option>
            </select>

            <div className="quantity-selector">
              <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>&laquo;</button>
              <span>{cantidad}</span>
              <button onClick={() => setCantidad(cantidad + 1)}>&raquo;</button>
            </div>

            <button type="submit" className="modal-button">Agregar al carrito</button>
          </form>
        </div>
      </div>
    )}
    </section>
  );
}

export default HeroSection;
import React from 'react';

function HeroSection() {
  return (
    <section style={{
      backgroundColor: '#fefdf7', // Color de fondo similar al Header
      textAlign: 'center',
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <h1 style={{
        fontSize: '60px', // Tamaño de fuente grande
        color: '#c4978c', // Color marrón del texto
        margin: '0 auto 30px',
        maxWidth: '700px',
        lineHeight: '1.1'
      }}>
        Dulzura en cada mordida
      </h1>
      <button style={{
        backgroundColor: '#f8b3c3', // Rosa del botón
        color: 'white',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '25px',
        fontSize: '18px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s ease'
      }}>
        ¡Descúbrelas!
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
    </section>
  );
}

export default HeroSection;
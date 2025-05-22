import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#fefdf7', // Color de fondo claro
      fontFamily: 'Arial, sans-serif',
      //boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#c4978c' }}>
        Ternurin
      </div>
      <nav>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          gap: '30px'
        }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: '#888', fontSize: '16px' }}>inicio</Link></li>
          <li><a href="#productos" style={{ textDecoration: 'none', color: '#888', fontSize: '16px' }}>Productos</a></li>
          <li><a href="#nosotros" style={{ textDecoration: 'none', color: '#888', fontSize: '16px' }}>Sobre Nosotros</a></li>
          <li><a href="#contacto" style={{ textDecoration: 'none', color: '#888', fontSize: '16px' }}>Contacto</a></li>
        </ul>
      </nav>
      <div style={{ fontSize: '24px', color: '#888' }}>
        <Link to="/carrito" style={{ textDecoration: 'none', color: 'inherit' }}>
          🛒 {/* Icono de carrito */}
        </Link>
      </div>
    </header>
  );
}

export default Header;
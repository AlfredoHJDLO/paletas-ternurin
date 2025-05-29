import React from 'react';
import { Link } from 'react-router-dom';
import shopping from '../assets/shopping.png';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#F4EAD5', // Color de fondo claro
      fontFamily: 'Quicksand, sans-serif',
      //boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{fontFamily: 'Fredoka, sans-serif', fontSize: '3rem', fontWeight: 'bold', color: '#E94E77' }}>
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
          <li><Link to="/" style={{ textDecoration: 'none', fontWeight: '700', color: '#9E6D4E', fontSize: '24px' }}>inicio</Link></li>
          <li><a href="#productos" style={{ textDecoration: 'none', fontWeight: '700', color: '#9E6D4E', fontSize: '24px' }}>Productos</a></li>
          <li><a href="#nosotros" style={{ textDecoration: 'none', fontWeight: '700', color: '#9E6D4E', fontSize: '24px' }}>Sobre Nosotros</a></li>
          <li><a href="#contacto" style={{ textDecoration: 'none', fontWeight: '700', color: '#9E6D4E', fontSize: '24px' }}>Contacto</a></li>
        </ul>
      </nav>
      <div style={{ height: '64px', color: '#9E6D4E' }}>
        <Link to="/carrito" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={shopping} alt="Carrito" />; {/* Icono de carrito */}
        </Link>
      </div>
    </header>
  );
}

export default Header;
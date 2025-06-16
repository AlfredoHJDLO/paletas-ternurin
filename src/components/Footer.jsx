import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#F4EAD5', // Color de fondo claro similar al header
      padding: '20px 40px',
      textAlign: 'center',
      //boxShadow: '0 -2px 4px rgba(0,0,0,0.05)'
    }}>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap' // Para responsividad en pantallas pequeñas
      }}>
        <li><Link to="/privacidad" style={{ textDecoration: 'none', fontFamily: 'Quicksand', color: '#9E6D4E', fontSize: '20px', fontWeight: '700' }}>Aviso de privacidad</Link></li>
        <li><Link to="/terminos" style={{ textDecoration: 'none', fontFamily: 'Quicksand', color: '#9E6D4E', fontSize: '20px', fontWeight: '700' }}>Términos</Link></li>
        <li><Link to="/faqs" style={{ textDecoration: 'none', fontFamily: 'Quicksand', color: '#9E6D4E', fontSize: '20px', fontWeight: '700' }}>Preguntas Frecuentes</Link></li>
      </ul>
      <p style={{ color: '#777', fontSize: '14px', marginTop: '12px' }}>
        © 2025 Ternurin. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
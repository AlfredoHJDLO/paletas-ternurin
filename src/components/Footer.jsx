import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#fefdf7', // Color de fondo claro similar al header
      padding: '20px 40px',
      textAlign: 'center',
      marginTop: '50px',
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
        <li><a href="#privacidad" style={{ textDecoration: 'none', color: '#888', fontSize: '14px' }}>Aviso de privacidad</a></li>
        <li><a href="#terminos" style={{ textDecoration: 'none', color: '#888', fontSize: '14px' }}>Términos</a></li>
        <li><a href="#preguntas" style={{ textDecoration: 'none', color: '#888', fontSize: '14px' }}>Preguntas Frecuentes</a></li>
      </ul>
      <p style={{ color: '#aaa', fontSize: '12px', marginTop: '15px' }}>
        © 2025 Ternurin. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
import React from 'react';

function ProductCard({ imageSrc, name, price, hasOffer, offerText, onAddToCart }) {
  const paletaImage = {
    width: '100%',
    height: 'auto',
    maxWidth: '150px', // Ajusta el tamaño de la imagen de la paleta
    display: 'block',
    margin: '0 auto 15px'
  };

  const offerBadge = {
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    backgroundColor: '#E94E77', // Rosa de la oferta
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '24px',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '40px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const addButton = {
    backgroundColor: '#F4EAD5', // Rosa del botón
    color: '#9E6D4E',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '15px',
    width: '80%', // Ajusta el ancho del botón
    maxWidth: '150px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={{
      backgroundColor: '#FDC5C9', // Fondo de la tarjeta (blanco/claro)
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '280px', // Asegura una altura mínima para todas las tarjetas
      margin: '10px', // Margen entre tarjetas
      flex: '1 1 calc(25% - 20px)', // Para que se ajusten en la rejilla (4 por fila - margen)
      maxWidth: '280px' // Limita el ancho máximo de la tarjeta
    }}>
      {/*hasOffer && <div style={offerBadge}>{offerText}</div>*/}
      <img src={imageSrc} alt={name} style={paletaImage} />
      <h3 style={{ fontSize: '18px', color: '#9E6D4E', margin: '10px 0 5px' }}>
        {name}
      </h3>
      <p style={{ fontSize: '16px', color: '#9E6D4E', fontWeight: 'bold', margin: '0 0 15px' }}>
        {price}
      </p>
      <button onClick={onAddToCart} style={addButton}>
        Agregar
      </button>
    </div>
  );
}

export default ProductCard;
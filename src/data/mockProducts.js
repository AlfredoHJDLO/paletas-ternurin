// src/data/mockProducts.js

// Para las imágenes, podrías tenerlas en la carpeta 'public/images/'
// o importarlas directamente si usas un bundler como Webpack/Vite
import paletaImage from '../assets/paleta_generica.png'; // Asegúrate de tener una imagen en assets
// Si no tienes una imagen, puedes usar un placeholder como:
// const paletaImage = 'https://via.placeholder.com/150x150?text=Paleta';


const mockProducts = [
  { id: 'p1', name: 'Paleta Fresa Delicia', price: '$25 MXN', image: paletaImage, hasOffer: true, offerText: '3 x 2' },
  { id: 'p2', name: 'Paleta Mango Mágico', price: '$25 MXN', image: paletaImage, hasOffer: true, offerText: '3 x 2' },
  { id: 'p3', name: 'Paleta Chocolate Soñado', price: '$25 MXN', image: paletaImage, hasOffer: false },
  { id: 'p4', name: 'Paleta Frutos Rojos', price: '$25 MXN', image: paletaImage, hasOffer: false },
  { id: 'p5', name: 'Paleta Limón Celestial', price: '$25 MXN', image: paletaImage, hasOffer: true, offerText: '2 x 1' },
  { id: 'p6', name: 'Paleta Vainilla Cremosa', price: '$25 MXN', image: paletaImage, hasOffer: false },
  // Agrega más paletas si lo deseas
];

export default mockProducts;
// src/pages/HomePage.jsx (Crea una nueva carpeta 'pages' dentro de 'src')
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';

function HomePage() {
  return (
    <> {/* Fragmento de React para agrupar elementos sin añadir un div extra */}
      <HeroSection />
      <ProductGrid />
    </>
  );
}

export default HomePage;
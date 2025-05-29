import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components';
import { Carrito } from './components/Carrito';
import "./app.css"

function App() {
  return (
    <Router>
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      //boxSizing: 'border-box'
    }}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
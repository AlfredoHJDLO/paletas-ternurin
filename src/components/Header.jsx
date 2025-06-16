import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import shopping from '../assets/shopping.png';
import "./header.css"

function Header() {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Id');
    localStorage.removeItem('type');
    localStorage.removeItem('user')
    navigate('/');
  };

  return (
  <header>
    <div className='title'>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        Ternurin
      </Link>
    </div>

    {/* Botón de hamburguesa para móviles */}
    <button 
      className="menu-hamburguesa" 
      onClick={() => setMenuAbierto(!menuAbierto)}
    >
      ☰
    </button>

    {/* Añadimos la clase 'nav-abierto' cuando el estado es true */}
    <nav className={menuAbierto ? 'nav-abierto' : ''}>
      <ul className='ul1'>
        <li className='li1'><Link to="/" className="ah">Inicio</Link></li>
        <li className='li1'><a className="ah" href="#productos">Productos</a></li>
        <li className='li1'><Link to="/nosotros" className="ah">Sobre nosotros</Link></li>
        <li className='li1'><Link to="/contacto" className="ah">Contacto</Link></li>
        
        {localStorage.getItem('Id') !== null ? (
          <li className="dropdown li1">
            <span>{localStorage.getItem('user')} ▾</span>
            <ul className="dropdown-menu ul1">
              <li className='li1'>Mi cuenta</li>
              <li className='li1'><Link to='/pedidos' className="ah">Mis pedidos</Link></li>
              <li className='li1' onClick={logout}>Cerrar sesión</li>
            </ul>
          </li>
        ) : (
          <li className='li1'><Link to='/login' className="ah">Iniciar sesión</Link></li>
        )}
      </ul>
    </nav>

    <div className="carrito-container">
      <Link to="/carrito" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={shopping} alt="Carrito" />
      </Link>
    </div>
  </header>
);
}

export default Header;
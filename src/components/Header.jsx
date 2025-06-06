import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import shopping from '../assets/shopping.png';
import "./header.css"

function Header() {
  const navigate = useNavigate();

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
          <li ><Link to="/" className="ah">Inicio</Link></li>
          <li><a className="ah" href="#productos" >Productos</a></li>
          <li><a className="ah" href="#nosotros" >Sobre Nosotros</a></li>
          <li><a className="ah" href="#contacto" >Contacto</a></li>
          {localStorage.getItem('Id') !== null ? (
            <li className="dropdown">
            <span>{localStorage.getItem('user')} ▾</span>
            <ul className="dropdown-menu">
              <li>Mi cuenta</li>
              <li><Link to='/pedidos' className="ah">Mis pedidos</Link></li>
              <li onClick={logout}>Cerrar sesión</li>
            </ul>
          </li>
          ):
          (<li><Link to='/login'>Iniciar sesion</Link></li>)}
          
        </ul>
      </nav>
      <div style={{ height: '64px', color: '#9E6D4E' }}>
        <Link to="/carrito" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={shopping} alt="Carrito" /> {/* Icono de carrito */}
        </Link>
      </div>
    </header>
  );
}

export default Header;
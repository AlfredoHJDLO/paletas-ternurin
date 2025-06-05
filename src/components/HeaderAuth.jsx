import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import shopping from '../assets/shopping.png';
import "./header.css"

function HeaderAuth() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Id');
    localStorage.removeItem('type');
    localStorage.removeItem('user')
    navigate('/login')
  };

  return (
    <header>
      <div className='title' onClick={() => {navigate('/')}}>
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
          
        </ul>
      </nav>
      {localStorage.getItem('Id') !== null ? (
            <li className="dropdown">
            <span>{localStorage.getItem('user')} ▾</span>
            <ul className="dropdown-menu">
              <li>Mi cuenta</li>
              <li onClick={logout}>Cerrar sesión</li>
            </ul>
          </li>
          ):
          (<div></div>)}
    </header>
  );
}

export default HeaderAuth;
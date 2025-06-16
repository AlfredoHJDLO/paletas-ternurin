import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import AuthLayout from './components/AuthLayout';
import HomePage from './components';
import { Carrito } from './components/Carrito';
import { Login } from './components/login/login';
import "./App.css"
import { Admin } from './components/admin/admin';
import { Signup } from './components/login/signup';
import { Pedido } from './components/Pedido';
import Nosotros from './components/nosotros';
import Contacto from './components/contacto';
import FaqSection from './components/faqs/FaqsSection';
import Terminos from './components/Terminos/terminos';
import Privacidad from './components/Terminos/Privacidad';

function App() {
  return (
    <Router>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        //boxSizing: 'border-box'
      }}></div>
      <Routes>
        {/* Rutas con header y footer general */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/faqs' element={<FaqSection />} />
          <Route path='/terminos' element={<Terminos />} />
          <Route path='/privacidad' element={<Privacidad />} />
          <Route path='/pedidos' element={<Pedido />} />
        </Route>

        {/* Rutas con layout especial para login */}
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

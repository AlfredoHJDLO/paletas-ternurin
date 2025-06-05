
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HeaderAuth from './HeaderAuth';

export default function AuthLayout() {
  return (
    <>
      <HeaderAuth />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

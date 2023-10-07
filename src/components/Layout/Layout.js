import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import css from './Layout.module.css';
export const Layout = () => {
  return (
    <div className={css.divLoy}>
      <header> </header>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
export default Layout;

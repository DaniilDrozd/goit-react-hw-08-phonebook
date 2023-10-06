import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
export const Layout = () => {
  return (
    <div>
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

// import css from './app.module.css';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import NotFoundPage from '../pages/NotFounPage/NotFounPage';


const RegisterPage = lazy(() => import('../pages/RegisterPages/Register'));
const LoginPage = lazy(() => import('../pages/LoginPages/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/Contacts'));
const HomePage = lazy(() => import('../pages/HomePage/Home'));
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h2>Refreshing user...</h2>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
           <Route
           path="contacts"
          element={
                <PrivateRoute redirectTo="/login"  component={<ContactsPage />} />
              }
            />
             <Route path="*" element={<NotFoundPage />} />
      </Route>
   
    </Routes>
  );
};

export default App;

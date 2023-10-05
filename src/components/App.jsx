// import css from './app.module.css';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './Layout/Layout';
import Home from '../pages/HomePage/Home';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';



const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
      </Route>
      <Route
           path="contacts"
          element={
                <PrivateRoute redirectTo="/login"  component={<ContactsPage />} />
              }
            />
    </Routes>
  );
};

export default App;

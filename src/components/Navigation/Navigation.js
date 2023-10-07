import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn ? (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      ) : (
        <>
          <nav className={css.navRegistor}>
            <NavLink to="/register" className={css.NavLink}>
              Register
            </NavLink>
            <NavLink to="/login" className={css.NavLink}>
              Log In
            </NavLink>
          </nav>
        </>
      )}
      {isLoggedIn && <UserMenu />}
    </nav>
  );
};

export default Navigation;
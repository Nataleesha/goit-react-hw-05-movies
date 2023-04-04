import { NavLink, Outlet } from "react-router-dom";
import css from 'styles/Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.nav}>
          <li>
            <NavLink to="/" className={css['nav-link']}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css['nav-link']}>Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

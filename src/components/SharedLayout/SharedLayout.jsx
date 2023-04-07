import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader.jsx";
import css from "components/SharedLayout/SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.nav}>
          <li>
            <NavLink to="/" className={css["nav-link"]}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css["nav-link"]}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;

import { Outlet, NavLink } from "react-router-dom";
import styles from "./styles";

export default function Navbar() {
  const style = styles();

  const makeClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? style.activeLink : style.link;

  return (
    <main className={style.main}>
      <section className={style.containerLink}>
        <NavLink to="/" className={makeClassName}>
          Map
        </NavLink>
        <NavLink to="add" className={makeClassName}>
          Add location
        </NavLink>
      </section>
      <div className={style.outlet}>
        <Outlet />
      </div>
    </main>
  );
}

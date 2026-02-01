import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>{" | "}
      <Link to="/category/remeras">Remeras</Link>{" | "}
      <Link to="/category/zapatillas">Zapatillas</Link>{" | "}
      <Link to="/category/accesorios">Accesorios</Link>
    </nav>
  );
};

export default NavBar;

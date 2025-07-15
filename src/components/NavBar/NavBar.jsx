import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>AutoShop</h1>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/autos">Autos</Link></li>
        <li><Link to="/category/camionetas">Camionetas</Link></li>
        <li><Link to="/category/motocicletas">Motocicletas</Link></li>
        <li><Link to="/category/usados">Usados</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
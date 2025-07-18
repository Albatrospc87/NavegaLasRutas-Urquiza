import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>AutoShop</h1>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/sedan">Sedanes</Link></li>
        <li><Link to="/category/pickup">Pickups</Link></li>
        <li><Link to="/category/moto">Motos</Link></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
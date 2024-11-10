import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <Link className="li-el" to="/">
      <h1 className="header-title">Brisphere</h1>
    </Link>
    <ul className="links-container">
      <Link className="li-el" to="/discover">
        <li className="header-li-el">Discover</li>
      </Link>
      <Link className="li-el" to="/service">
        <li className="header-li-el">Services</li>
      </Link>
      <Link className="li-el" to="/about">
        <li className="header-li-el">About Us</li>
      </Link>
    </ul>
  </div>
)

export default Header

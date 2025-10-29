import { Link } from "react-router-dom";
import '../Navbar.css'
import logo from '../assets/images/logos/ArcaneMugsolo.png'

function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-container">
                <Link to={'/'} className="nav-logo">
                <img src={logo} alt="Hero Brew" />
                </Link>

                <ul className="nav-menu">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                    <li><Link to={'/login'}className="nav-login">Start Your Quest</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
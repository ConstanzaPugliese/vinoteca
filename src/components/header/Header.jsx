import './Header.css'
import { useCartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import {BsList} from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs';
import {IoCartOutline} from 'react-icons/io5';
import Sidebar from './Sidebar';
import Cart from './Cart';

function Header() {
    const { iconCart } = useCartContext()
    return (
            <header className="row header">
                <div className="col-lg-12 col-xs-12 jumbotron d-flex flex-row justify-content-center align-items-center">
                    <span className="text-white" data-aos="zoom-in">Envíos a todo el mundo o retirá gratis por nuestro local</span>
                </div>
                <nav className="navbar bg-white my-1">
                    <button className="col-lg-1 col-xs-1 btn border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <BsList className="list"/>
                    </button>
                    <div className="col-lg-2 d-none d-lg-block">
                        <form className="form-inline">
                            <input className="form-control bg-transparent border-dark d-inline-flex search" type="search" placeholder="Buscar" aria-label="Search" id="search" required />
                            <Link to="/search" className="btn border-0 p-0" type="submit" role="button">
                                <BsSearch className="ms-2"/>
                            </Link>
                        </form>
                    </div>
                    <div className="col-lg-7 col-xs-10 text-center">
                        <h2 className="text-uppercase"><Link to='/'>Vinoteca</Link></h2>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block">
                        <select className="form-select bg-transparent border-dark" aria-label="Default select example">
                            <option value="ARG" defaultValue>ARG</option>
                            <option value="AU">AU</option>
                            <option value="BR">BR</option>
                            <option value="CL">CL</option>
                            <option value="ES">ES</option>
                            <option value="GB">GB</option>
                            <option value="MX">MX</option>
                            <option value="PY">PY</option>
                            <option value="US">US</option>
                            <option value="UY">UY</option>
                        </select>
                    </div>
                    <button className="col-lg-1 col-xs-1 btn border-0 p-0 position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <IoCartOutline className="cart"/>
                        <span className="position-absolute top-0 start-90 translate-middle badge bg-dark p-1 border border-light rounded-circle ">
                            {iconCart()}
                        </span>
                    </button>
                </nav>
                <Sidebar />
                <Cart />
            </header>
    )
}

export default Header;

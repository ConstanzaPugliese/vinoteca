import './Header.css'
import { useCartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import {BsList} from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs';
import {IoCartOutline} from 'react-icons/io5';
import Sidebar from '../../containers/Sidebar';
import Cart from '../../containers/Cart';

function Header() {
    const { iconCart } = useCartContext()
    return (
            <header className="row header">
                <div className="col-lg-12 col-xs-12 jumbotron jumbotron-fluid d-flex flex-row justify-content-center align-items-center">
                    <span className="text-white">Envíos a todo el mundo o retirá gratis por nuestro local</span>
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
                        <h4 className="text-uppercase"><b><Link to='/'>Vinoteca</Link></b></h4>
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

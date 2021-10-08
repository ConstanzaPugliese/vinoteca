import './Header.css'
import {Link} from 'react-router-dom';
import {BsList} from 'react-icons/bs';
import CartWidget from '../cartWidget/CartWidget';
import Sidebar from '../../containers/sidebar/Sidebar';
import Cart from '../Cart/Cart';

function Header() {
    return (
            <header className="row header">
                <div className="col-12 jumbotron d-flex flex-row justify-content-center align-items-center">
                    <span className="text-white">Envíos a todo el mundo o retirá gratis por nuestro local</span>
                </div>
                <nav className="navbar bg-white my-1">
                    <button className="col-1 btn border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <BsList className="list"/>
                    </button>
                    <div className="col-lg-8 col-xs-10 text-center">
                        <h4 className="text-uppercase"><b><Link to='/'>Vinoteca</Link></b></h4>
                    </div>
                    <CartWidget />
                </nav>
                <Sidebar />
                <Cart />
            </header>
    )
}

export default Header;

import {Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
import {RiTeamFill} from 'react-icons/ri';
import {FaWineBottle} from 'react-icons/fa';
import {FaWineGlass} from 'react-icons/fa';
import {BsQuestionCircleFill} from 'react-icons/bs';
import {BsChatFill} from 'react-icons/bs';

function Sidebar() {
    return (
        <div className="offcanvas offcanvas-start sidebar" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <span className="offcanvas-title text-white" id="offcanvasExampleLabel">Offcanvas</span>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="d-lg-none d-xl-none d-xl-block">
                    <select className="form-select" aria-label="Default select example">
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
                <div className="mt-2 d-lg-none d-xl-none d-xl-block">
                    <form className="form-inline">
                        <input className="form-control bg-transparent border-dark d-inline-flex search" type="search" placeholder="Buscar" aria-label="Search" id="search" required />
                        <Link to="/search" className="btn border-0" type="submit" role="button">
                            <BsSearch className="ms-2" />
                        </Link>
                    </form>
                </div>
                <ul className="navbar-nav mt-4 mt-lg-0">
                    <li className="mb-2"><Link to="/"><AiFillHome className="me-2" />Inicio</Link></li>
                    <li className="mb-2"><Link to="/us"><RiTeamFill className=" me-2" />Nosotrxs</Link></li>
                    <li className="mb-2 dropdown">
                        <a className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaWineBottle className="me-2" />Productos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="mb-2"><Link to="/products"><FaWineBottle className="me-2" />Todos los vinos</Link></li>
                            <li className="mb-2"><Link to="/malbec"><FaWineGlass className="me-2" />Malbec</Link></li>
                            <li className="mb-2"><Link to="/bonarda"><FaWineGlass className="me-2" />Bonarda</Link></li>
                            <li className="mb-2"><Link to="/cabernet-sauvignon"><FaWineGlass className="me-2" />Cabernet Sauvignon</Link></li>
                            <li className="mb-2"><Link to="/merlot"><FaWineGlass className="me-2" />Merlot</Link></li>
                            <li className="mb-2"><Link to="/syrah"><FaWineGlass className="me-2" />Syrah</Link></li>
                            <li className="mb-2"><Link to="/torrontes"><FaWineGlass className="me-2" />Torrontés</Link></li>
                            <li className="mb-2"><Link to="/chardonnay"><FaWineGlass className="me-2" />Chardonnay</Link></li>
                            <li className="mb-2"><Link to="/riesling"><FaWineGlass className="me-2" />Riesling</Link></li>
                            <li><Link to="/category/sauvignon-blanc"><FaWineGlass className="me-2" />Sauvignon Blanc</Link></li>
                        </ul>
                    </li>
                    <li className="mb-2"><Link to="/policies"><BsQuestionCircleFill className="me-2" />Políticas</Link></li>
                    <li><Link to="/contact"><BsChatFill className="me-2" />Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

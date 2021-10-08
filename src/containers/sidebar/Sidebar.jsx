import { useEffect, useState } from 'react';
import { getFirestore } from '../../service/Firebase';
import Error from '../../components/error/Error';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import { FaWineBottle } from 'react-icons/fa';
import { FaWineGlass } from 'react-icons/fa';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { BsChatFill } from 'react-icons/bs';

function Sidebar() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const dataBase = getFirestore()
        const categoriesCollection = dataBase.collection('categories').get()
        categoriesCollection.then((data) => {
            if (data.size !== 0) {
                setCategories(
                    data.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                )
            }
        })
        .catch((err) => {<Error error={'Error buscando categorías'} />})
    }, [])
    return (
        <div className="offcanvas offcanvas-start sidebar" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <span className="offcanvas-title text-white" id="offcanvasExampleLabel">Offcanvas</span>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <nav className="col-12 mt-4 mt-lg-0">
                    <div className="navbar navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink to="/" className="nav-link"><AiFillHome className="me-2" />Inicio</NavLink></li>
                            <li className="nav-item"><NavLink to="/us" className="nav-link"><RiTeamFill className=" me-2" />Nosotrxs</NavLink></li>
                            <li className="nav-item dropdown my-1">
                                <a className="nav-link dropdown-toggle" href="null" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaWineBottle className="me-2" />Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="dropdown-item"><NavLink to="/products" className="nav-link"><FaWineBottle className="me-2" />Todos los vinos</NavLink></li>
                                    {categories.map((category) => <li className="dropdown-item" key={category.id}><NavLink to={`/${category.id}`} className="nav-link"><FaWineGlass className="me-2" />{category.name}</NavLink></li> )}
                                </ul>
                            </li>
                            <li className="nav-item"><NavLink to="/policies" className="nav-link"><BsQuestionCircleFill className="me-2" />Políticas</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact" className="nav-link"><BsChatFill className="me-2" />Contacto</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar;

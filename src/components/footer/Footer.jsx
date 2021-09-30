import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";


function Footer() {
    return (
        <footer className="row mt-5">
            <section className="col-lg-12 col-xs-12 text-center">
                <a href="https://www.instagram.com/vinoteca/" rel="noreferrer" target="_blank">
                    <FaInstagram className="instagram me-4"/>
                </a>
                <a href="https://es-la.facebook.com/VinotecaSA/?rf=224166334292310" rel="noreferrer" target="_blank">
                    <FaFacebookF />
                </a>
            </section>
            <nav className="col-lg-12 col-xs-12 my-4">
                <div className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item text-center"><Link to="/" className="nav-link">Inicio</Link></li>
                        <li className="nav-item text-center"><Link to="/us" className="nav-link">Nosotrxs</Link></li>
                        <li className="nav-item text-center"><Link to="/products" className="nav-link">Productos</Link></li>
                        <li className="nav-item text-center"><Link to="/policies" className="nav-link">Políticas</Link></li>
                        <li className="nav-item text-center"><Link to="/contact" className="nav-link">Contacto</Link></li>
                    </ul>
                </div>
            </nav>
            <section className="col-lg-12 col-xs-12 text-center">
                <div className="mb-2">
                    <FaWhatsapp className="me-2" />
                    <p className="d-inline-flex"><a href="https://wa.me/5491155715380" rel="noreferrer" target="_blank">+54 9 11 4980 5322</a></p>
                </div>
                <div className="mb-2">
                    <BsEnvelope className="me-2" />
                    <p className="d-inline-flex"><a href="mailto:vinoteca@gmail.com" rel="noreferrer" target="_blank">vinoteca@gmail.com</a></p>
                </div>
                <div>
                    <BiMap className="me-2" />
                    <p className="d-inline-flex"><a href="https://goo.gl/maps/NHUhzaatQ6Nc1j7d7" rel="noreferrer" target="_blank">Hurlingham (GBA)</a></p>
                </div>
            </section>
            <section className="col-lg-12 col-xs-12 mt-4 text-center">
                <FaMoneyBillWave className="pay mx-2" />
                <FaCcMastercard className="pay mx-2" />
                <FaCcVisa className="pay mx-2" />
                <FaCcAmex className="pay mx-2" />
                <FaCcDinersClub className="pay mx-2" />
                <img src="https://firebasestorage.googleapis.com/v0/b/vinoteca-2170e.appspot.com/o/bank-transfer.png?alt=media&token=77a6de99-9b58-4ccc-ae7d-95bcd47a67ed"alt="transferencia bancaria" width="30" height="30" className="mx-2" />
                <FaPaypal className="pay mx-2" />
                <img src="https://firebasestorage.googleapis.com/v0/b/vinoteca-2170e.appspot.com/o/mercado-pago.png?alt=media&token=0a7ab912-aba0-4787-942b-bca4f238a517" alt="Mercado Pago" width="30" height="30" className="mx-2" />
            </section>
            <section className="col-lg-12 col-xs-12 mt-2 text-center">
                <span>Defensa de lxs consumidorxs. Para reclamos <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" rel="noreferrer" target="_blank">ingresá acá</a></span>
            </section>
            <address className="col-lg-12 col-xs-12 mt-4 text-center">
                <span>Todos los derechos reservados <a href="https://github.com/ConstanzaPugliese" rel="noreferrer" target="_blank">Constanza Pugliese</a>©2021</span>
            </address>
        </footer>
    )
}

export default Footer;

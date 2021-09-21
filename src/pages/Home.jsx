import { FaInstagram } from "react-icons/fa";
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../components/item-list/ItemList';

const products = [
    {id: 1, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1630931776/trumpeter_syrah_p0wycw.jpg', name: 'Trumpeter Syrah', price: 495, installment_value: 82.5, category: 'syrah', description: 'Vino Trumpeter Syrah', section: 'na'},
    {id: 2, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1630931776/jorge-rubio_malbec_wwpuxi.jpg', name: 'Jorge Rubio Malbec', price: 810, installment_value: 135, category: 'malbec', description: 'Vino Jorge Rubio Malbec', section: 'bs'},
    {id: 3, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192002/andeluna_torrontes_pegxvb.jpg', name: 'Andeluna Torrontés', price: 550, installment_value: 91.7, category: 'torrontes', description: 'Vino Andeluna Torrontés', section: 'na'},
    {id: 4, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631191335/zuccardi_bonarda_j6mqzi.jpg', name: 'Zuccardi Bonarda', price: 1200, installment_value: 200, category: 'bonarda', description: 'Vino Zuccardi Bonarda', section: 'bs'},
    {id: 5, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192204/trapiche_cabernet-sauvignon_c40xr0.jpg', name: 'Trapiche Cabernet Sauvignon', price: 430, installment_value: 71.7, category: 'cabernet-sauvignon', description: 'Vino Cafayate Torrontés', section: 'na'},
    {id: 6, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192330/catena-zapata_merlot_fo46b2.jpg', name: 'Catena Zapata Merlot', price: 1900, installment_value: 316.7, category: 'merlot', description: 'Vino Catena Zapata - Angélica Zapata Merlot', section: 'na'},
    {id: 7, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192517/luigi-bosca_riesling_eismru.png', name: 'Luigi Bosca Riesling', price: 1300, installment_value: 216.7, category: 'riesling', description: 'Vino Luigi Bosca Riesling', section: 'bs'},
    {id: 8, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192843/alfa-crux_sauvignon-blanc_b1kb7g.jpg', name: 'Alfa Crux Sauvignon Blanc', price: 1000, installment_value: 166.7, category: 'sauvignon-blanc', description: 'Alfa Crux Sauvignon Blanc', section: 'bs'},
    {id: 9, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631193369/escorihuela-gascon_chardonnay.jpg', name: 'Escorihuela Gascón Chardonnay', price: 600, installment_value: 100, category: 'chardonnay', description: 'Vino Escorihuela Gascón - Familia Gascón Roble Chardonnay', section: 'na'},
]
// const closeAlert = () => {
//     document.getElementById("alertAge").style.display = "none";
// }
function Home() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {section} = useParams()
    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(products), 2000);
        });
        promise.then(res => {
            setItems(res) 
            setLoading(false)
        })
        .catch(err => console.log(err))
        if (section) {
            promise.then(response => {
                setItems(response.filter(item => section === item.section))
            })
        } else {
            promise.then((response) => { setItems(response) })
        }
    }, [section])
    return (
        <main className="row mx-3">
            <header className="col-lg-12 col-xs-12 parallax--index"></header>
            <section className="col-lg-12 col-xs-12 mt-5">
                <h1 className="text-uppercase">New arrivals</h1>
                {/* {loading ? <main className="row"><div className="col-lg-12 col-xs-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div></main> : 
                <ItemList products={items}/>} */}
            </section>
            <section className="col-lg-12 col-xs-12 mt-5">
                <h1 className="text-uppercase">Best sellers</h1>
                {/* {loading ? <main className="row"><div className="col-lg-12 col-xs-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div></main> : 
                <ItemList products={items}/>} */}
            </section>
            <section className="col-lg-12 col-xs-12 text-center mt-5">
                <div>
                    <FaInstagram className="instagram me-2 mb-1"/>
                    <h2 className="d-inline-flex">vinoteca</h2>
                </div>
                <a href="https://www.instagram.com/vinoteca/" rel="noreferrer" target="_blank">
                    <button className="btn btn-dark mt-2">Seguinos</button>
                </a>
            </section>
            <section className="col-lg-12 col-xs-12 text-center mt-5">
                <h3>Suscribite a nuestro newsletter</h3>
                <p>Para recibir todas nuestras novedades, degustaciones y promociones, dejanos tu mail!</p>
                <form className="row mt-2 d-flex flex-row justify-content-center">
                    <div className="form-group col-sm-10">
                        <input type="text" className="form-control text-center bg-transparent mb-2" id="nameLead" placeholder="Nombre" name="name" required />
                    </div>
                    <div className="form-group col-sm-10">
                        <input type="email" className="form-control text-center bg-transparent mb-2" id="emailLead" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-group col-sm-10">
                        <p id="thanks"></p>
                        <button type="submit" className="btn btn-dark text-uppercase" id="sendLead" value="Enviar">Enviar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Home;

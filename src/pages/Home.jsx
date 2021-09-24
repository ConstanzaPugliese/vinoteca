import { FaInstagram } from "react-icons/fa";
// import ItemListContainer from '../components/item-list/ItemListContainer';

// const closeAlert = () => {
//     document.getElementById("alertAge").style.display = "none";
// }
function Home() {
    return (
        <main className="row mx-3">
            <header className="col-lg-12 col-xs-12 parallax--index"></header>
            <section className="col-lg-12 col-xs-12 mt-5">
                <h1 className="text-uppercase">New arrivals</h1>
            </section>
            <section className="col-lg-12 col-xs-12 mt-5">
                <h1 className="text-uppercase">Best sellers</h1>
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

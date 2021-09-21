//import { useCartContext } from '../context/CartContext';

function Buy() {
    //const { cart, removeItemCart, deleteCart, totalPriceCart, totalInstallmentCart } = useCartContext()
    return (
        <main className="row">
            <section className="col-lg-12 col-xs-12">
                <h1 className="my-5">Completar compra</h1>
                <form className="row mt-2 d-flex flex-row justify-content-center text-center">
                    <div className="form-group col-sm-10">
                        <input type="text" className="form-control text-center bg-transparent mb-2" id="nameLead" placeholder="Nombre" name="name" required />
                    </div>
                    <div className="form-group col-sm-10">
                        <input type="tel" className="form-control text-center bg-transparent mb-2" id="phoneLead" placeholder="Celular/teléfono" name="phone" required />
                    </div>
                    <div className="form-group col-sm-10">
                        <input type="email" className="form-control text-center bg-transparent mb-2" id="emailLead" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-group col-sm-10">
                        <p id="thanks"></p>
                        <button type="submit" className="btn btn-dark text-uppercase" value="Comprar">Terminar compra</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Buy

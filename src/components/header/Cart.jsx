import { useCartContext } from '../../context/CartContext';
import {BsTrash} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Cart() {
    const { cart, removeItemCart, deleteCart, totalPriceCart, totalInstallmentCart } = useCartContext()
    const productQuantity = cart.map((product) => product.quantity)
    const [count, setCount] = useState(productQuantity)
    const [buttonActive, setButtonActive] = useState([])
    return (
        <div className="offcanvas offcanvas-end cartWidget" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {cart.length > 0 ?
                    <>
                    {cart.map((e) =>
                        <div key={e.product.id} className="container-fluid mb-2">
                            <div className="row g-0">
                                <section className="col-3">
                                    <Link to={`/products/${e.product.id}`}>
                                        <img src={e.product.img} className="img-fluid" alt={e.product.title} />
                                    </Link>
                                </section>
                                <section className="col-8">
                                    <h4>
                                        <Link to={`/products/${e.product.id}`}>
                                            {e.product.title}
                                        </Link>
                                    </h4>
                                    <p><b>${e.product.price}</b></p>
                                    {/* <button type="button" className="btn btn-dark rounded-circle countButton" onClick={count > e.product.stock ? setButtonActive(false) : setCount(count + 1)} abled={buttonActive}>-</button>
                                    <span className="mx-2">{count}</span>
                                    <button type="button" className="btn btn-dark rounded-circle countButton" onClick={count <= e.product.stock ? setButtonActive(false) : setCount(count - 1)} abled={buttonActive}>+</button> */}
                                </section>
                                <section className="col-1">
                                    <button className="btn border-0 p-0" type="button" onClick={() => removeItemCart(e.item.id)}><BsTrash /></button>
                                </section>
                            </div>
                        </div>
                    )}
                    <hr />
                    <div className="d-flex flex-column justify-content-end align-items-end">
                        <button className="btn btn-dark text-uppercase mb-3" type="button" onClick={deleteCart}>Vaciar</button>
                        <h3>Total: ${totalPriceCart()}</h3>
                        <p><b>0 hasta 6 cuotas sin interés de ${totalInstallmentCart()}</b></p>
                    </div>
                    <div className="text-center">
                        <Link to="/buy">
                            <button className="btn btn-dark text-uppercase my-3" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Iniciar compra</button>
                        </Link>
                        <br />
                        <span><Link to="/products">Ver más productos</Link></span>
                    </div>
                    </>
                : <p>Tu carrito de compras está vacío :(</p>}
            </div>
        </div>
    )
}

export default Cart;

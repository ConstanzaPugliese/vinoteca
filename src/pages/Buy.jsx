import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { useParams } from 'react-router';
import { getFirestore } from '../service/Firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';

function Buy() {
    const { id } = useParams()
    const [order, setOrder] = useState(true)
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState(initialState)
    const { cart, totalPriceCart, totalInstallmentCart, deleteCart } = useCartContext()
    function handlerChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    function handlerSubmit(e) {
        setLoading(true)
        e.preventDefault()
        const newOrder = {
            buyer: formData,
            products: cart,
            total: totalPriceCart(),
            installment: totalInstallmentCart(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }
        const dataBase = getFirestore()
        const orders = dataBase.collection('orders')
        orders.add(newOrder)
        .then(({ id }) => 
            setOrder(id)
            //controlar si hay stock de los productos que quiero agregar
            // dataBase.collection('products').doc(id)
            // .update(
            //     {stock: cart.product.stock - cart.quantity}
            // )
            // .then(response => {
            //     setOrder(false)
            //     console.log(`Su compra #${response.id} ha sido exitosa`)
            // })
            // .catch(err => {console.log('Error actualizando stock', err)})
        )
        .catch(err => {console.log('Error creando orden de compra', err)})
        .finally(() => {
            setLoading(false)
            setFormData(initialState)
            deleteCart()
        })
    }
    return (
        <main className="row">
            <section className="col-lg-12 col-xs-12">
                <h1 className="my-5">Completar compra</h1>
                {/* {cart.map(product =>
                    <div>
                        <h4>{product.quantity} x {product.item.title}</h4>
                    </div>
                )}
                <h3>Total ${totalPriceCart()}</h3>
                <p><b>0 a 6 cuotas sin interés de ${totalInstallmentCart()}</b></p> */}
                <form className="row mt-2 d-flex flex-row justify-content-center text-center" onChange={handlerChange}>
                    <div className="form-group col-sm-10">
                        <input type="text" className="form-control text-center bg-transparent mb-2" placeholder="Nombre" name="name" value={formData.name} required />
                    </div>
                    <div className="form-group col-sm-10">
                        <input type="tel" className="form-control text-center bg-transparent mb-2" placeholder="Celular/teléfono" name="phone" value={formData.phone} required />
                    </div>
                    <div className="form-group col-sm-10">
                        <input type="email" className="form-control text-center bg-transparent mb-2" placeholder="Email" name="email" value={formData.email} required />
                    </div>
                    <div className="form-group col-sm-10">
                        <input type="email" className="form-control text-center bg-transparent mb-2" placeholder="Confirmar email" name="email2" value={formData.email} required />
                    </div>
                    <div className="form-group col-sm-10">
                        <p id="thanks"></p>
                        <button type="submit" className="btn btn-dark text-uppercase" data-bs-toggle="modal" data-bs-target="#staticBackdrop" value="Comprar" onClick={handlerSubmit}>Terminar compra</button>
                    </div>
                </form>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            {loading ? <></>
                            :
                            <div class="modal-header"> 
                                <h3 class="modal-title" id="staticBackdropLabel">Compra exitosa</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>}
                            <div class="modal-body">
                                {loading ? <div className="col-lg-12 col-xs-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div>
                                :
                                <>
                                    <p>Guardá tu orden de compra # </p>
                                    <p>Nos vamos a estar contactando con vos dentro de 72hs. hábiles</p>
                                </>
                                }
                            </div>
                            {loading ? <></>
                            :
                            <div class="modal-footer">
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Entendido</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Buy

const initialState = {
    name: '',
    phone: '',
    email: '',
}
import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore } from '../service/Firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Link } from 'react-router-dom';

function Buy() {
    const [order, setOrder] = useState(null)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true)   
    const { cart, totalPriceCart, totalInstallmentCart, deleteCart } = useCartContext()
    const dataBase = getFirestore()
    const saveName = (e) => {
        const input = e.target
        const value = input.value
        setName(value)
    }
    const savePhone = (e) => {
        const input = e.target
        const value = input.value
        setPhone(value)
    }
    const saveEmail = (e) => {
        const input = e.target
        const value = input.value
        setEmail(value)
    }
    const saveEmail2 = (e) => {
        const input = e.target
        const value = input.value
        setEmail2(value)
    }
    const validate = () => {
        if(name.trim().length && phone.trim().length && email.trim().length && email2.trim().length && email === email2) {
            return true
        } else {
            return false
        }
    }
    function newOrder() {
        if (validate()) {
            setLoading(true)
            const orderData = {
                buyer: {name, phone, email},
                products: cart,
                total: totalPriceCart(),
                installment: totalInstallmentCart(),
                date: firebase.firestore.Timestamp.fromDate(new Date()),
            }
            const orders = dataBase.collection('orders')
            orders.add(orderData)
            .then((response) => {
                // cart.map((product) => {
                //     const decrement = product.quantity;
                //     const productsCollection = dataBase.collection("products");
                //     productsCollection.doc(product.id).update(
                //         {stock: product.stock - decrement}
                //     );
                // });
                setOrder(response.id)
            })
            .catch(err => {console.log('Error creando orden de compra', err)})
            .finally(() => {
                deleteCart();
                setLoading(false);
            })
        }
    }
    // const productsToUpdate = dataBase.collection('products')
    //     .where(firebase.firestore.FieldPath.documentId(), 'in', products.map(product => product.id))

    const handleClose = () => {setShow(false)}
    const handleShow = () => {setShow(true)}
    const sendData = (e) => {e.preventDefault()}
    return (
        <main className="row">
            <section className="col-12 text-center">
                <h1 className="my-3 my-lg-5">Completar compra</h1>
                {cart.length === 0 ?
                    <>
                        <h5>Tu carrito de compras está vacío :(</h5>
                        <p><Link to="/products" className="text-uppercase">Agregar productos</Link></p>
                    </>
                :
                    <form className="row mt-2 d-flex flex-row justify-content-center mx-3" onSubmit={sendData}>
                        <div className="form-group">
                            <input type="text" className="form-control text-center bg-transparent mb-2" placeholder="Nombre y apellido" name="name" onChange={saveName} required />
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control text-center bg-transparent mb-2" placeholder="Celular" name="phone" onChange={savePhone} required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control text-center bg-transparent mb-2" placeholder="Email" name="email" onChange={saveEmail} required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control text-center bg-transparent mb-2" placeholder="Confirmar email" name="email2" onChange={saveEmail2} required />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-dark text-uppercase" onClick={() => {newOrder(); handleShow()}} >Terminar compra</button>
                        </div>
                    </form>
                }
                {validate() ?
                    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                        {loading ? <></>
                        :
                            <ModalHeader>
                                <h3 className="col-12 d-flex flex-column justify-content-center">¡Gracias por tu compra!</h3>
                            </ModalHeader>}
                        <ModalBody>
                            {loading ? 
                                <div className="col-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div>
                            :
                                <>
                                    <h5>Guardá tu orden de compra #{order}</h5>
                                    <p>Nos vamos a estar comunicando con vos dentro de las próximas 72 hs. hábiles para coordinar el pago y envío/retiro de la compra.</p>
                                </>}
                        </ModalBody>
                        {loading ? <></>
                        :
                            <ModalFooter>
                                <Link to='/'><Button variant="dark" onClick={handleClose}>Entendido</Button></Link>
                            </ModalFooter>}
                    </Modal>
                :
                    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                        <ModalHeader>
                            <h3 className="col-12 d-flex flex-column justify-content-center">Error</h3>
                        </ModalHeader>
                        <ModalBody>
                            {email === email2 ?
                                <h5>Tenés que ingresar todos tus datos.</h5>
                            :
                                <h5>Los email no coinciden.</h5>}
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="dark" onClick={handleClose}>Entendido</Button>
                        </ModalFooter>
                    </Modal>}
            </section>
        </main>
    )
}

export default Buy;

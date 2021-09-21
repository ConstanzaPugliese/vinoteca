import {BsCreditCard} from 'react-icons/bs';
import { FaRegMoneyBillAlt } from "react-icons/fa";
//import {useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../item-list/ItemCount';

function ItemDetail({product}) {
    const {id, img, name, price, installment_value, category, description, stock} = product;
    //const [count, setCount] = useState(0)
    const {addProductCart} = useCartContext()
    const onAdd = (count) => {
        //alert(`La cantidad agregada es ${count}`)
        //setCount(count)
        addProductCart(product, count);
    }
    return (
        <>
            <main className="row mx-3">
                <section className="col-lg-12 col-xs-12">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <img src={img} className="img-fluid rounded-start" alt={name} />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h1 className="card-title my-4">{name}</h1>
                                    <p className="card-text">{description}</p>
                                    <h3 className="card-text mt-5"><b>${price}</b></h3>
                                    <div className="text-center mb-4">
                                        <p className="card-text"><BsCreditCard /><b> 6 cuotas sin interés </b>de ${installment_value}</p>
                                        <p className="card-text"><FaRegMoneyBillAlt /><b> 10% off </b>pagando con transferencia bancaria - <b>20% off </b>pagando en efectivo al retirar por el local o con mensajería en CABA y GBA</p>
                                    </div>
                                    <ItemCount stock={stock} initial={stock >= 1 ? 1 : 0} onAdd={onAdd} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ItemDetail;

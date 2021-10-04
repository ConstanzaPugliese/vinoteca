import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {BsX} from 'react-icons/bs';

function Item({product}) {
    const [show, setShow] = useState(false)
    const {addProductCart, priceWithDiscount, installmentWithDiscount} = useCartContext()
    const onAdd = (count) => {
        addProductCart(product, count);
    }
    return (
        <>
            <div className="col-lg-3 col-xs-12">
                <div className="card text-center mb-4">
                    <div className="card-container">
                        <Link to={`/products/${product.id}`}><img src={product.img} className="card-img-top" alt={product.title} /></Link>
                        {product.stock === 0 ?
                            <div className="jumbotron jumbotron-absolute">
                                <span className="text-uppercase"><b>Sin stock</b></span>
                            </div>
                        : <></>}
                        {product.discount > 0 ?
                            <div className="jumbotron jumbotron-absolute">
                                <span className="text-uppercase"><b>{product.discount}% off</b></span>
                            </div>
                        : <></>}
                        {show ?
                            <div className="addModal" data-aos="fade-up">
                                <div className="text-center mt-3">
                                    <ItemCount stock={product.stock} initial={product.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                                    <span><Link to={`/products/${product.id}`}>Ver más detalles</Link></span>
                                    <br />
                                    <button type="button" className="btn border-0" onClick={() => setShow(false)}><BsX /></button>
                                </div>
                            </div>
                        :
                            <></>
                        }
                    </div>
                    <div className="card-body">
                        <h4><Link to={`/products/${product.id}`}>{product.title}</Link></h4>
                        {product.discount > 0 ?
                            <>
                                <h5 className="text-decoration-line-through d-inline-flex">${product.price}</h5>
                                <h5 className="d-inline-flex"><b>${priceWithDiscount(product)}</b></h5>
                            </>
                        :
                            <h5><b>${product.price}</b></h5>}
                        <p><b>6 </b>cuotas sin interés de <b>${product.discount > 0 ? installmentWithDiscount(product) : product.installmentValue}</b></p>
                        <button type="button" className="btn btn-dark" onClick={() => setShow(true)}>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;

import './ItemCount.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [buttonActive, setButtonActive] = useState([])
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm]= useState(false);
    const [cart, setCart]= useState(false);
    const [noStock, setNoStock]= useState(false)
    const handlerClickAdd = () => {
        if (stock === 0) {
            setButtonActive(false);
        } else if (count > stock) {
            setButtonActive(false);
            setNoStock(true)
            setTimeout(() => {
                setNoStock(false)
            }, 4000);
        } else {
            setCount(count + 1)
        }
    }
    const handlerClickSubtract = () => {
        count <= initial ? setButtonActive(false) : setCount(count - 1)
    }
    const handlerClickOnAdd = () => {
        if (stock === 0) {
            setButtonActive(false);
        } else if (count > stock) {
            setButtonActive(false);
        } else {
            setButtonActive(true);
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            setConfirm(true);
            setTimeout(() => {
                setConfirm(false)
            }, 1500);
            setTimeout(() => {
                setCart(true)
            }, 1500);
            setCount(initial);
            onAdd(count);
        }
    }
    return (
        <div className="text-center">
            <button type="button" className="btn btn-dark rounded-circle countButton" onClick={handlerClickSubtract} abled={buttonActive.toString()}>-</button>
            <span className="mx-2">{count}</span>
            <button type="button" className="btn btn-dark rounded-circle countButton" onClick={handlerClickAdd} abled={buttonActive.toString()}>+</button>
            <br />
            {loading ?
                <>
                    <button type="button" className="btn btn-dark my-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span className="mx-1">
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" variant="light"/>
                        </span>
                        <span className="mx-1">
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" variant="light"/>
                        </span>
                        <span className="mx-1">
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" variant="light"/>
                        </span>
                    </button>
                    <br />
                </>
            :
                confirm ?
                    <>
                        <button type="button" className="btn btn-dark text-uppercase my-2">Listo!</button>
                        <br />
                    </>
                :
                    <>
                        <button type="button" className="btn btn-dark text-uppercase my-2" onClick={handlerClickOnAdd} abled={buttonActive.toString()}>Agregar al carrito</button>
                        <br/>
                    </>}
            {cart && <span>Ya agregaste este producto. <a className="text-uppercase" href="null" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Ver carrito</a></span>}
            {noStock && <span>No tenemos esa cantidad disponible. <Link to="/products" className="text-uppercase">Ver más productos</Link></span>}
            {stock === 0 && <span>No tenemos más stock. <Link to="/products" className="text-uppercase">Ver más productos</Link></span>}
        </div>
    )
}

export default ItemCount;
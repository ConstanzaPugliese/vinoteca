import {useState} from 'react';
import { Link } from 'react-router-dom';
// import Spinner from 'react-bootstrap/Spinner';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [buttonActive, setButtonActive] = useState([])
    const [changeButton, setChangeButton]= useState(false)
    // const [loading, setLoading] = useState(true);
    const handlerClickAdd = () => {
        if (stock === 0) {
            setButtonActive(false);
        } else if (count > stock) {
            setButtonActive(false);
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
            // onAdd(count);
            // setCount(count);
        } else {
            setButtonActive(true);
            onAdd(count);
            setCount(count);
            // setLoading(true)
            setChangeButton(true);
        }
    }
    // useEffect(() => {
    //     let getItem = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             products ? resolve(products) : reject('error 404');
    //         }, 2000);
    //     });
    //     getItem.then(answer => {
    //         setProduct(answer[id -1])
    //         setLoading(false)
    //     })
    // }, [id]);
    return (
        <div className="text-center">
            <button type="button" className="btn btn-dark rounded-circle countButton" onClick={handlerClickSubtract} abled={buttonActive}>-</button>
            <label className="mx-2"><span>{count}</span></label>
            <button type="button" className="btn btn-dark rounded-circle countButton" onClick={handlerClickAdd} abled={buttonActive}>+</button>
            <br />
            {changeButton ?
                <>
                    {/* <button type="button" className="btn btn-dark my-2" disabled>
                        <span className="mx-1">
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" variant="light"/>
                        </span>
                        <span className="mx-1">
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" variant="light"/>
                        </span>
                        <span className="mx-1">
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" variant="light"/>
                        </span>
                    </button> */}
                    <button type="button" className="btn btn-dark text-uppercase my-2">Listo!</button>
                    <p>Ya agregaste este producto. <a className="text-uppercase" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Ver carrito</a></p>
                </>
            :
                <button type="button" className="btn btn-dark text-uppercase my-2" onClick={handlerClickOnAdd} abled={buttonActive}>Agregar al carrito</button>
            }
            {count > stock && <p>No tenemos esa cantidad disponible. <Link to="/products" className="text-uppercase">Ver más productos</Link></p>}
            {stock === 0 && <p>No tenemos más stock. <Link to="/products" className="text-uppercase">Ver más productos</Link></p>}
        </div>
    )
}

export default ItemCount;
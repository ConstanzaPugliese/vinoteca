import { IoCartOutline } from 'react-icons/io5';
import { useCartContext } from '../../context/CartContext';

function CartWidget() {
    const { iconCart } = useCartContext()
    return (
        <button className="col-1 btn border-0 p-0 position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <IoCartOutline className="cartWidget"/>
            <span className="position-absolute top-0 start-90 translate-middle badge bg-dark p-1 border border-light rounded-circle">
                {iconCart()}
            </span>
        </button>
    )
}

export default CartWidget

import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {BsX} from 'react-icons/bs';

function ItemModal({key, item}) {
    const onAdd = (count) => {
        console.log(`La cantidad es: ${count}`);
    }
    return (
        <div className="addModal" id="addModal">
            <div className="addModal-content">
                <div className="modal-body">
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    <br />
                    <span><Link to={`/items/${item.id}`}>Ver más detalles</Link></span>
                    <br />
                    <button type="button" className="btn border-0">
                        <Link to="#">
                            <BsX />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;

//import ItemModal from './ItemModal';
import {Link} from 'react-router-dom';
//import {BsBag} from 'react-icons/bs';

function Item({product}) {
    const {id, img, name, price, installment_value, category, description} = product;
    return (
            <div className="col-lg-3 col-xs-12 mb-4">
                <div className="card text-center">
                    <div className="card-container">
                        <Link to={`/products/${id}`}><img src={img} className="card-img-top" alt={name} /></Link>
                        <div className="jumbotron jumbotron-absolute">
                            <span className="text-uppercase"><b>Pre venta</b></span>
                        </div>
                        {/* <Link to={`/${id}`}>
                            <button type="button" className="btn btn-dark rounded-circle addButton" marcador={id} onClick={openAddModal}>
                                <BsBag />
                            </button>
                        </Link> */}
                        {/* <ItemModal key={id} item={item} /> */}
                    </div>
                    <div className="card-body">
                        <h4><Link to={`/products/${id}`}>{name}</Link></h4>
                        <p><b>${price}</b></p>
                        <span><b>6 </b>cuotas sin interés de <b>${installment_value}</b></span> 
                    </div>
                </div>
            </div>
    )
}

export default Item;

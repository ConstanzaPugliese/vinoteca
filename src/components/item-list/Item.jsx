import {Link} from 'react-router-dom';
//import {BsBag} from 'react-icons/bs';

function Item({product}) {
    return (
            <div className="col-lg-3 col-xs-12">
                <div className="card text-center mb-4">
                    <div className="card-container">
                        <Link to={`/products/${product.id}`}><img src={product.img} className="card-img-top" alt={product.title} /></Link>
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
                        <h4><Link to={`/products/${product.id}`}>{product.name}</Link></h4>
                        <p><b>${product.price}</b></p>
                        <span><b>6 </b>cuotas sin interés de <b>${product.installmentValue}</b></span> 
                    </div>
                </div>
            </div>
    )
}

export default Item;

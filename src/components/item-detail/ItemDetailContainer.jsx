import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/Firebase';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true);
        const dataBase = getFirestore()
        const productsCollection = dataBase.collection('products')
        const item = productsCollection.doc(id)
        item.get(id).then(response => {
            if(response.exists){
                setProduct({id: response.id, ...response.data()})
            }
        })
        .catch(err => {console.log('Error buscando producto', err)})
        .finally(() => {setLoading(false)})
    }, [id]);
    return (
        <>
            {loading ? <main className="row"><div className="col-lg-12 col-xs-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div></main> : 
            <ItemDetail key={id} product={product} />}
        </>
    )
}

export default ItemDetailContainer;

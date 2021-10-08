import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/Firebase';
import Error from '../../components/error/Error';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from '../../components/itemDetail/ItemDetail';

function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true);
        const dataBase = getFirestore()
        const productsCollection = dataBase.collection('products')
        const item = productsCollection.doc(id)
        item.get().then(response => {
            if(response.exists){
                setProduct({id: response.id, ...response.data()})
            }
        })
        .catch((err) => {<Error error={'Error buscando producto'} />})
        .finally(() => {setLoading(false)})
    }, [id]);
    return (
        <>
            {loading ? <main className="row"><div className="col-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div></main> : 
            <ItemDetail key={id} product={product} />}
        </>
    )
}

export default ItemDetailContainer;

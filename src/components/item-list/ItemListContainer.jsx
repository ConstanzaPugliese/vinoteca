import './ItemList.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/Firebase';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from './ItemList';

function ItemListContainer() {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const dataBase = getFirestore()
        const productsCollection = dataBase.collection('products')
        const conditionProducts = category ? productsCollection.where('category', '==', category) : productsCollection
        conditionProducts.get()
        .then((data) => {
            if (data.size > 0) {
                setProducts(
                    data.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                )
            }
        })
        .catch((err) => {console.log('Error buscando productos', err)})
        .finally(() => {setLoading(false)})
    }, [category])
    return (
        <>
            {loading ? <main className="row"><div className="col-lg-12 col-xs-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div></main> :
            <main className="row mx-3">
                <h1 className="col-lg-12 col-xs-12 my-5 text-uppercase">{category ? `${category}` : 'Vinos'}</h1>
                <ItemList products={products}/>
            </main>}
        </>
    )
}

export default ItemListContainer;
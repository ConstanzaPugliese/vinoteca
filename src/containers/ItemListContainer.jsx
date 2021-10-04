import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { getFirestore } from '../service/Firebase';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from '../components/item-list/ItemList';

function ItemListContainer() {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const dataBase = getFirestore()
        const productsCollection = dataBase.collection('products')
        const conditionProducts = category ? productsCollection.where('category', '==', category) : productsCollection;
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
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const dataBase = getFirestore()
        const categoriesCollection = dataBase.collection('categories').get()
                setCategories(categoriesCollection)
    }, [])
    return (
        <>
            {loading ? <main className="row"><div className="col-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div></main> :
            <main className="row mx-4">
                <h1 className="col-12 my-3 my-lg-5 text-uppercase">{category ? `${category}`: 'Vinos'}</h1>
                <ItemList products={products}/>
            </main>}
        </>
    )
}

export default ItemListContainer;
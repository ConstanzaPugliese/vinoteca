import { useState, useEffect } from 'react';
import { getFirestore } from '../../service/Firebase';
import Error from '../../components/error/Error';
import ItemList from '../../components/itemList/ItemList';

function RelatedProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const dataBase = getFirestore()
        const productsCollection = dataBase.collection('products')
        const relatedProducts = productsCollection.where('filter', '==', 'relatedProduct')
        relatedProducts.get()
        .then((data) => {
            if (data.size > 0) {
                setProducts(
                    data.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                )
            }
        })
        .catch((err) => {<Error error={'Error buscando productos'} />})
    }, [])
    return (
        <section className="col-12 row">
            <h3 className="my-3 my-lg-5 text-uppercase">Productos relacionados</h3>
            <ItemList products={products}/>
        </section>
    )
}

export default RelatedProducts

import { useState, useEffect } from 'react';
import { getFirestore } from '../service/Firebase';
import ItemList from '../components/item-list/ItemList';

function BestSellers() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const dataBase = getFirestore()
        const productsCollection = dataBase.collection('products')
        const bestSellers = productsCollection.where('filter', '==', 'bestSeller')
        bestSellers.get()
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
    }, [])
    return (
        <section className="col-12 row">
            <h2 className="my-3 my-lg-4 text-uppercase">Los más vendidos</h2>
            <ItemList products={products}/>
        </section>
    )
}

export default BestSellers;

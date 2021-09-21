import './ItemList.css';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/getFirebase';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from './ItemList';

// const products = [
//     {id: 1, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1630931776/trumpeter_syrah_p0wycw.jpg', name: 'Trumpeter Syrah', price: 495, installment_value: 82.5, category: 'syrah', description: 'Vino Trumpeter Syrah'},
//     {id: 2, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1630931776/jorge-rubio_malbec_wwpuxi.jpg', name: 'Jorge Rubio Malbec', price: 810, installment_value: 135, category: 'malbec', description: 'Vino Jorge Rubio Malbec'},
//     {id: 3, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192002/andeluna_torrontes_pegxvb.jpg', name: 'Andeluna Torrontés', price: 550, installment_value: 91.7, category: 'torrontes', description: 'Vino Andeluna Torrontés'},
//     {id: 4, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631191335/zuccardi_bonarda_j6mqzi.jpg', name: 'Zuccardi Bonarda', price: 1200, installment_value: 200, category: 'bonarda', description: 'Vino Zuccardi Bonarda'},
//     {id: 5, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192204/trapiche_cabernet-sauvignon_c40xr0.jpg', name: 'Trapiche Cabernet Sauvignon', price: 430, installment_value: 71.7, category: 'cabernet-sauvignon', description: 'Vino Cafayate Torrontés'},
//     {id: 6, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192330/catena-zapata_merlot_fo46b2.jpg', name: 'Catena Zapata Merlot', price: 1900, installment_value: 316.7, category: 'merlot', description: 'Vino Catena Zapata - Angélica Zapata Merlot'},
//     {id: 7, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192517/luigi-bosca_riesling_eismru.png', name: 'Luigi Bosca Riesling', price: 1300, installment_value: 216.7, category: 'riesling', description: 'Vino Luigi Bosca Riesling'},
//     {id: 8, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631192843/alfa-crux_sauvignon-blanc_b1kb7g.jpg', name: 'Alfa Crux Sauvignon Blanc', price: 1000, installment_value: 166.7, category: 'sauvignon-blanc', description: 'Alfa Crux Sauvignon Blanc'},
//     {id: 9, img: 'https://res.cloudinary.com/connipugliese/image/upload/v1631193369/escorihuela-gascon_chardonnay.jpg', name: 'Escorihuela Gascón Chardonnay', price: 600, installment_value: 100, category: 'chardonnay', description: 'Vino Escorihuela Gascón - Familia Gascón Roble Chardonnay'},
// ]
function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams()
    useEffect(() => {
    //     const promise = new Promise((resolve) => {
    //         setTimeout(() => resolve(products), 2000);
    //     });
    //     promise.then(res => {
    //         setItems(res) 
    //         setLoading(false)
    //     })
    //     .catch(err => console.log(err))
    //     if (category) {
    //         promise.then(response => {
    //             setItems(response.filter(item => category === item.category))
    //         })
    //     } else {
    //         promise.then((response) => { setItems(response) })
    //     }
    // }, [category])
        setLoading(true)
        const dataBase = getFirestore()
        const queryDataBase = dataBase.collection('products')
        const conditionQuery = category ?
            queryDataBase.where("category", "==", category)
        :
            queryDataBase
        conditionQuery.get().then(data => {
            if (data.size === 0) {
                console.log('No hay productos')
            }
            setItems(data.docs.map(item => ({id: item.data().id, ...item.data()})))
        })
        .catch(err => {console.log('Error buscando productos', err)})
        .finally(() => {setLoading(false)})
    }, [category])
    return (
        <>
            {loading ? <main className="row"><div className="col-lg-12 col-xs-12 my-5 d-flex flex-row justify-content-center"><Spinner animation="border" /></div></main> :
            <main className="row mx-3">
                <h1 className="col-lg-12 col-xs-12 my-5">{category ? `${category}` : 'Vinos'}</h1>
                <ItemList products={items}/>
            </main>}
        </>
    )
}

export default ItemListContainer;
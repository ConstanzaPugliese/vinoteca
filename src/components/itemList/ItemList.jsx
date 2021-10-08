import Item from '../item/Item';

function ItemList({products}) {
    return (
        <>
            {products.map((product) => {
                return <Item key={product.id} product={product}/> 
                }
            )}
        </>
    )
}

export default ItemList;
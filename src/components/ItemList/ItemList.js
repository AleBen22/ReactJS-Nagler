import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({ items }) => {

    return (
        <div>
            {
                items.map(product => {
                    return <Item key={product.id} {...product}/>
                })
            } 
        </div>
    )
}

export default ItemList
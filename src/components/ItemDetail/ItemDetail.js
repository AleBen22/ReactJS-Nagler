import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, price, img, stock, description }) => {

    const handleOnAdd = (quantity) => {
        const objProduct = { id, name, price, quantity }
    
        console.log(objProduct)
    }


    return (
        <div className= "CardDetail">
            <Link to='/' className = "BackButton">Volver</Link> 
            <h3>{name}</h3>
            <img className= "Image" src={img} alt={name}/>
            <p>Descripcion: {description}</p>
            <h3>Precio: $ {price}</h3>
            <p>Stock: {stock}</p>
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../Notification/NotificationService'

const ItemDetail = ({ id, name, price, img, stock, description }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        if (quantity === 0) {
            setNotification('error', 'Falta seleccionar cantidad')
        } else {
        const objProduct = { id, name, price, quantity }
        addItem(objProduct)
        setQuantity(quantity)
    }}

    return (
        <div className= "CardDetail">
            <h3>{name}</h3>
            <img className= "Image" src={img} alt={name}/>
            <p>Descripcion: {description}</p>
            { stock === 0 ? (
                    <p></p>
                ) : (
                    <p>Stock: {stock}</p>
                )
            }            
            <h3>Precio: $ {price}</h3>
            <footer className="FooterCard">
                { quantity === 0 ? (
                        <ItemCount stock={stock} initial={0} onAdd={handleOnAdd}/>
                    ) : (
                        <div>
                            <Link to='/cart' className= "FinishButton">Finalizar compra</Link>
                            <Link to='/' className= "FinishButton">Seguir comprando</Link>
                        </div>
                    )
                }
            </footer>
        </div>
    )
}

export default ItemDetail
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity, total } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div className="Carrito" id='root' onClick={() => navigate('/cart')}>
            <img className="Carrito-logo" src='../img/carrito.png' alt="carrito"/>
            <h2>{totalQuantity}</h2>
            <p className="CartText">total ${total}</p> 
        </div>
    )
}

export default CartWidget
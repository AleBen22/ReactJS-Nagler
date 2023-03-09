import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <div className="Carrito">
            <img className="Carrito-logo" src='../img/carrito.png' alt="carrito"/>
            <h2>{props.cart}</h2>
        </div>
    )
}

export default CartWidget
import '../Cart/Cart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, totalQuantity, total, removeItem, clearCart } = useContext(CartContext)

    const removeProd = (event) => {  
        removeItem(event.target.name)
    }

    const removeCart = () => {
        clearCart()
    }

    return (
        <div>
            { totalQuantity === 0 ? (
                <div>
                    <h3 className="Titulo">Carrito Vacio</h3>
                    <Link className= 'BackButton' to='/'>Volver al Inicio</Link>
                </div>
            ) : (
                <div>
                    <h3 className="Titulo">Carrito ({totalQuantity})</h3>
                    {
                        cart.map(prod => {
                            return (
                                <table className='Cart' key={prod.id}>
                                    <tbody>
                                        <tr>
                                            <td className='Quantity'>{prod.quantity}</td>
                                            <td className='Name'>{prod.name}</td>
                                            <td className='Price'>$ {prod.price}</td>
                                            <td className='Total'>$ {prod.quantity * prod.price}</td>
                                            <td className='Remove'><button className='RemoveButton' name={prod.id} onClick={removeProd}>Eliminar</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        })
                    }
                    <div className='Cart'>
                        <div className="TotalPurchase">$ {total}</div>
                        <Link className= 'CartButton' to='/checkout'>Finalizar compra</Link>
                        <Link className= 'CartButton' to='/' onClick={removeCart}>Vaciar Carrito</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
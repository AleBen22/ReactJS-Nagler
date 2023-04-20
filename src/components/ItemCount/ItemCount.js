import './ItemCount.css'
import { useState } from "react"
import { useNotification } from '../Notification/NotificationService'

const ItemCount = ({stock, initial, onAdd}) => {
    const [ count, setCount ] = useState(initial)
    const { setNotification } = useNotification()

    const decrement = () => {
        if (count === 0 && stock === 0) {
        } else {
            if (count > 1) {
                setCount(prev => prev - 1)
            } else {
                setNotification('error', 'Cantidad minima')
            }
        }
    }

    const increment = () => {
        if (count === 0 && stock === 0) {
        } else {
            if (count < stock) {
                setCount(prev => prev + 1)
            } else {
                setNotification('error', 'Cantidad maxima en stock')
            }
        }
    }

    return (
        <div>
            { stock > 0 ? (
            <div>
                <div className="Counter">
                    <button className="LeftButton" onClick={decrement}>-</button>
                    <h3 className="Count">{count}</h3>
                    <button  className="RightButton" onClick={increment}>+</button>
                </div>
                <button  className="AgreeButton" onClick={() => onAdd(count)} disabled={stock === 0}>Agregar al carrito</button>
            </div>
            ) : (<div className='OutStock'>No hay stock disponible</div>)
            }
        </div>
    )
}

export default ItemCount
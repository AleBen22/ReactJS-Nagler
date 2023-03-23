import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [ count, setCount ] = useState(initial)
    const [ message, setMessage ] = useState('')

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
            setMessage('')
        } else {
            setMessage('No puede comprar menos de 1')
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
            setMessage('')
        } else {
            setMessage('No se pueden agregar mas productos')
        }
    }

    return (
        <div className="CounterCard">
            <h4>{message}</h4>
            <button className="LeftButton" onClick={decrement}>-</button>
            <h3 className="Counter">{count}</h3>
            <button  className="RightButton" onClick={increment}>+</button>
            <button  className="AgreeButton" onClick={() => onAdd(count)} disabled={stock === 0}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
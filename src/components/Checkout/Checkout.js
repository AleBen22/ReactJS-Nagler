import '../Checkout/Checkout.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../Notification/NotificationService'
import { createOrder } from '../../services/firebase/firestore/orders'

const Checkout = () => {
    const [ orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useNotification()
    const [datos, setDatos] = useState({ name: '', phone: '', address: '', mail: ''})
    const [disable, setDisable] = useState(true)
    const [confirm, setConfirm] = useState(true)
    
    const handleInputChange = (event) => {   
        if (document.form.mail.value === document.form.mailconfirm.value) {
            setConfirm(true)
        } else {
            setConfirm(false)
        }
        if ((document.form.name.value === '') || (document.form.phone.value === '') || (document.form.address.value === '') || (document.form.mail.value === '') || (document.form.mailconfirm.value === '')) {
            setDisable(true)
        } else {
            setDisable(false)
        }

        setDatos({...datos, [event.target.name] : event.target.value})
    }

    const handleConfirm = (event) => {
        event.preventDefault()

        setLoading(true)

        const objOrder = {
            buyer: datos,
            items: cart,
            date: Date(),                    
            total: total
        }

        createOrder(cart, objOrder)
        .then(orderId => {
            setOrderId(orderId)
            clearCart()
        })
        .catch(error => {
            setNotification('error', error)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        <h3 className='Titulo'>Espere, estamos generando su orden...</h3>
    }

    return (
        <div>
            { orderId ? 
                <div className='OrderId'>El id de su producto es:  {orderId}</div>
            :
                <div className='Checkout'>
                    <h3 className='Titulo'>Checkout</h3>
                    <form className='Form' name='form' onSubmit={handleConfirm}>
                        <h4>Ingrese sus datos para confirmar la orden</h4>
                        <label>Nombre y Apellido</label>
                        <input className='Textbox' type="text" name="name" onChange={handleInputChange} />
                        <label>Teléfono</label>
                        <input className='Textbox' type="tel" name="phone" onChange={handleInputChange} />
                        <label>Domicilio</label>
                        <input className='Textbox' type="text" name="address" onChange={handleInputChange} />
                        <label>Mail</label>
                        <input className='Textbox' type="mail" name="mail" onChange={handleInputChange} />
                        <label>Confirme su mail</label>
                        <input className='Textbox' type="mail" name="mailconfirm" onChange={handleInputChange} />
                        { !confirm ? 
                            <div>Ingrese correctamente la validación</div> 
                        : 
                            <div></div>
                        }
                        <button className='Button' hidden={disable || !confirm} >Generar orden</button>
                    </form>
                </div>
            }
        </div>    
    )
}

export default Checkout
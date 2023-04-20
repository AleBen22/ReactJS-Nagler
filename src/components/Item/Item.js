import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {

    return (
        <div className= "Card">
            <h3 className='CardTitle'>{name}</h3>
            <p className='CardPrice'>$ {price}</p>
            <Link className="Link" to={`/item/${id}`} >ver detalle</Link>
        </div>
    )
}
export default Item
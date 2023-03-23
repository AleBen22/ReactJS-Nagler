import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {

    return (
        <div className= "Card">
            <h2>{name}</h2>
            <p>$ {price}</p>
            <Link className="Link" to={`/item/${id}`} >ver detalle</Link>
        </div>
    )
}
export default Item
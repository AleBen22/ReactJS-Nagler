import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState()

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(product => {
                setProduct(product)
            })
    }, [itemId])

    return (
        <div>
            <h3 className="Titulo">{greeting}</h3>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
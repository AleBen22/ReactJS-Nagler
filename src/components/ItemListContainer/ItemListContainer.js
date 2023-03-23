import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([])
    
    const { categoryId } = useParams()

    useEffect(() => {

        const asynFunction = categoryId ? getProductsByCategory : getProducts

        asynFunction(categoryId)
            .then(products => {
                setProductsState(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div>
            <h3 className="Titulo">{greeting}</h3>
            <ItemList items={productsState}/>
        </div>
    )
}

export default ItemListContainer
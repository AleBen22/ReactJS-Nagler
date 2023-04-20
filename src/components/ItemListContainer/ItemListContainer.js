import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()
    
    const getProductsWithCategory = () => getProducts(categoryId)

    const {data: productsState, error, loading} = useAsync(getProductsWithCategory, [categoryId])

    if(loading) {
        return <h3 className="Titulo">Cargando...</h3>
    }

    if(error) {
        return <h3 className="Titulo">Tuvimos problemas, refresca la página</h3>
    }

    return (
        <div>
            <h3 className="Titulo">{greeting}</h3>
            <ItemList items={productsState}/>
        </div>
    )
}

export default ItemListContainer
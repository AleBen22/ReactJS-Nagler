import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductsById } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = ({ greeting }) => {
    const { itemId } = useParams()
    
    const getProductsWithCategory = () => getProductsById(itemId)

    const {data: product, error, loading} = useAsync(getProductsWithCategory, [itemId])
 
    if(loading) {
        return <h3 className="Titulo">Cargando...</h3>
    } 

    if(error) {
        return <h3 className="Titulo">Tuvimos problemas, refresca la página</h3>
    }

    return (
        <div>
            <h3 className="Titulo">{greeting}</h3>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
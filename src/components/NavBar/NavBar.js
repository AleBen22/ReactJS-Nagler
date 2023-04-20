import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { getCategories } from '../../services/firebase/firestore/categories'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const { totalQuantity } = useContext(CartContext)

    useEffect(() => {

        getCategories()
            .then(categories => {
                setCategories(categories)

            })
            .catch(error => {
                setError(error)
            })
    }, []) 

    if(error) {
        return <h3 className="Titulo">Tuvimos problemas, refresca la página</h3>
    }
    
    return (
        <nav className = "App-header">
            <Link className = "NavBarTitle" to='/'><h1>admLoft</h1></Link>
            {
                totalQuantity ? 
                    (<CartWidget/>)
                    : 
                    (<div></div>)
            }
            <div className='NavBarBox'>
            {
                categories.map(cat => {
                    return (
                        <Link key={cat.id} to={`/category/${cat.slug}`} className = "NavBar">{`${cat.label}`}</Link>
                    )
                })
            }
            </div>
        </nav>
    )
}

export default NavBar
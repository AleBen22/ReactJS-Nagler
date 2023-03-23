import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className = "App-header">
            <Link className = "NavBarTitle" to='/'>
                <h1>admLoft</h1>
            </Link>
            <CartWidget cart={3}/>
            <Link to='/category/electricidad' className = "NavBar">Electricidad</Link>
            <Link to='/category/seguridad' className = "NavBar">Seguridad</Link>
            <Link to='/category/limpieza' className = "NavBar">Limpieza</Link>
            <Link to='/category/otros' className = "NavBar">Otros</Link>
        </nav>
    )
}

export default NavBar
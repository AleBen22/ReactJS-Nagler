import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h1>admLoft</h1>
            <CartWidget cart={3}/>
            <div className = "NavBarContainer">
                <button className = "NavBar">Electricidad</button>
                <button className = "NavBar">Seguridad</button>
                <button className = "NavBar">Limpieza</button>
                <button className = "NavBar">Otros</button>
            </div>
        </nav>
    )
}

export default NavBar
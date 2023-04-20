import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { NotificationProvider } from './components/Notification/NotificationService'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <NotificationProvider>
        <BrowserRouter>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a admLoft"}/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Bienvenidos a admLoft"}/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer greeting={"Detalle de Producto"}/>} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  )
}

export default App;

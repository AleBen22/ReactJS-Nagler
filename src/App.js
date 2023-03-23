import './App.css';
//import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a admLoft"}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Bienvenidos a admLoft"}/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer greeting={"Detalle de Producto"}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

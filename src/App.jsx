import React from 'react'
import './styles/App.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import { ShopContextProvider } from './context/shopContext.jsx'

function App() {

  return (
    <React.Fragment>
      <ShopContextProvider>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>  
        </div>
      </ShopContextProvider>
    </React.Fragment>

  )
}

export default App

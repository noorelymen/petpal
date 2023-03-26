import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './pages/home'
import Pets from './pages/pets'
import Pet from './pages/pet'
import Shop from './pages/shop'
import About from './pages/about'
import Contact from './pages/contact'
import Wishlist from './pages/wishlist'
import Auth from './pages/auth'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/pets" element={<Pets/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
      <Route path="/pets/:id" element={<Pet/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

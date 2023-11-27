import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import AddToCart from "./Pages/AddToCart"
import Navbar from "./components/Navbar"
import Search from "./Pages/Search"



const App = () => {
  return (
    <>
    <Navbar/>
   <div className=" container mx-auto">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addToCart" element={<AddToCart/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/details/:id" element={<Details/>}/>

    </Routes>
   </div>
    </>
  )
}

export default App
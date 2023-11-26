import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import AddToCart from "./Pages/AddToCart"
import Navbar from "./components/Navbar"



const App = () => {
  return (
    <>
   <div className="">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addToCart" element={<AddToCart/>}/>
      <Route path="/details/:id" element={<Details/>}/>

    </Routes>
   </div>
    </>
  )
}

export default App
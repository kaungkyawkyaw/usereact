import axios from "axios";
import { useEffect, useState } from "react"
import Card from "./Card"

const Home = () => {
  const [products,setProducts]=useState([]);
  const fetchdata=async()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/`)
    setProducts(data)
  }
  

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <>
    <div className=" flex flex-wrap justify-center items-center gap-5">
      {products.map(product=>{
        return(
          <Card key={product.id} product={product}/>
        )
      })}
    </div>
    </>
  )
}

export default Home
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Details = () => {
  const {id}=useParams();
  const [product,setProduct]=useState({});
  const fetchdata=async()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(data)
  }
  

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div>{product.title}</div>
  )
}

export default Details
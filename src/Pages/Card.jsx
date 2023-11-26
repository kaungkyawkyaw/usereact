import { useDispatch } from "react-redux"
import { AddCart } from "../feature/services/cartSlice";
import { Link } from "react-router-dom";


const Card = ({product}) => {
  
  const dispatch=useDispatch();
  return (
   <div>
     <div>{product.title}</div>
    <div>
      <button onClick={()=>dispatch(AddCart(product))} className=" bg-red-400">
        AddtoCart
      </button>
      <Link to={`/details/${product.id}`}>
      <button className=" bg-slate-500">
        Details
      </button>
      </Link>
    </div>
   </div>
  )
}

export default Card
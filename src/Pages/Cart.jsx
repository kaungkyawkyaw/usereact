import { useDispatch } from "react-redux"
import { RemoveCart, decrease, increase } from "../feature/services/cartSlice"

const Cart = ({item}) => {
  const dispatch=useDispatch();
  const oneitemprice=item.price * item.qty;
  return (
    <>
     <div className="flex justify-around items-center">
     <div>
        <div>
        {item.title.substring(0,14)}...
        </div>
        <div>{oneitemprice}</div>
        <button onClick={()=>dispatch(RemoveCart(item))}>remove</button>
     </div>
      <div>
        <button onClick={()=>dispatch(decrease(item))}>-</button>
            <p>{item.qty}</p>
        <button onClick={()=>dispatch(increase(item))}>+</button>
      </div>
     </div>
    </>
  )
}

export default Cart
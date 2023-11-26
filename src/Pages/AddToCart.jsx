import { useSelector } from "react-redux"
import Cart from "./Cart"
const AddToCart = () => {
  const {cartItems}=useSelector((state)=>state.cart);
  const total=cartItems.reduce((pv,cv)=>pv+cv.price *cv.qty,0)
  return (
    <>
    <div>
      {cartItems.map((item)=>{
        return(
          <Cart key={item.id} item={item}/>
        )
      })}
    </div>
    <hr />
    <div className=" flex justify-between">
      <div>total</div>
      <div>{total.toFixed(2)}</div>
    </div>
    </>
  )
}

export default AddToCart
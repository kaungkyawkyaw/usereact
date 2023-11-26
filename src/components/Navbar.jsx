import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
    const {cartItems}=useSelector((state)=>state.cart)
    console.log(cartItems)
  return (
    <>
    <div className=" flex justify-center items-center grid grid-cols-12 bg-slate-500">
        <div className=" col-span-3">
            KKK
        </div>
        <div className="flex flex-row justify-between items-center col-span-7 text-[10px] font-bold">
            <ul className="flex flex-row list-none gap-2  ">
                <li className=" col-span-1">Home</li>
                <li className=" col-span-1">Shoes</li>
                <li className=" col-span-1">Watch</li>
                <li className=" col-span-1">More</li>
            </ul>
            <ul className="flex flex-row list-none gap-1">
            <li className=" col-span-1">Home</li>
            <li className=" col-span-1">Home</li>
            </ul>
        </div>
        <div className=" col-span-2 bg-cyan-500">
            <Link to={"/addToCart"}>
                {cartItems.length}
            </Link>
        </div>

    </div>
    </>
  )
}

export default Navbar
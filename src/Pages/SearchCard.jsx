import { useDispatch } from "react-redux";
import { AddCart } from "../feature/services/cartSlice";
import { Link } from "react-router-dom";
import { Rating } from "@mantine/core";
import {
  Card,
  Button,
  CardFooter,
  Image,
  CardHeader,
} from "@nextui-org/react";

const SearchCard = ({item}) => {
    const dispatch=useDispatch()
  return (
    <>
      <div className=" mt-10">
        <Card
          isFooterBlurred
          className="w-[250px] h-[400px] flex justify-center items-center col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <div className="text-tiny text-black uppercase font-bold">
              <Rating value={item.rating.rate} fractions={2} readOnly />
            </div>
            <h4 className="text-black font-medium text-2xl">
              {item.title.substring(0, 15)}...
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 hover:scale-125 w-[150px] object-contain"
            src={item.image}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center gap-10">
            <Button
              onClick={() => dispatch(AddCart(item))}
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Add To Cart
            </Button>
            <Link to={`/details/${item.id}`}>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div> 
    </>
  )
}

export default SearchCard
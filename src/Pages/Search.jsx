
import { useLocation } from "react-router-dom"
import SearchCard from "./SearchCard";

const Search = () => {
    const locate=useLocation();
    const item=locate.state.test;
    console.log(item)
        
  return (
    <>
     <div className=" flex flex-wrap justify-center items-center gap-5">
      {item.map(item=>{
        return(
          <SearchCard key={item.id} item={item}/>
        )
      })}
    </div>
    </>
  )
}

export default Search
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Badge} from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbarlay = () => {
    const {cartItems}=useSelector((state)=>state.cart)
    
    const nav=useNavigate()

    const [product,setProduct]=useState([])
    const [search,setSearch]=useState('')
    const fetchdata=async()=>{
      const {data}=await axios.get(`https://fakestoreapi.com/products/`)
      setProduct(data);
    }
    
    useEffect(()=>{
      fetchdata()
    },[])
    const filterItem=product.filter(item=>item.title.toLowerCase().includes(search))
    
    const change=(e)=>{
      e.preventDefault()
      nav("/search",{state:{test:filterItem}})
    }
  return (
    <>
    <Navbar isBordered>
      <NavbarContent justify="start">
        <Link to={"/"}>
        <NavbarBrand className="mr-4">
          <p className=" font-bold text-inherit">ACME</p>
        </NavbarBrand>
        </Link>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link to={"/"}>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link  aria-current="page" color="secondary">
              Men
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <div className=" flex justify-center items-center gap-2">
          
        <form onSubmit={change}>
        <Input
           value={search}
           onChange={(e)=>setSearch(e.target.value)}
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<CiSearch size={18} />}
          type="search"
        />
        </form>
        <Link to={"/addToCart"}>
        <Badge color="danger" content={cartItems.length} shape="circle">
          <IoCartOutline size={30} />
        </Badge>
        </Link>
        </div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>

    </>
  )
}

export default Navbarlay

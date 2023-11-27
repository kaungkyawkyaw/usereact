import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";
const Key="cookiecart";
const storedKey=localStorage.getItem(Key);
const storedItems=JSON.parse(storedKey);
console.log(storedItems)

const initialState={
    cartItems:storedItems? [...storedItems]:[]
}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        AddCart:(state,{payload})=>{
            const isExisted=state.cartItems?.find(item=>item.id===payload.id);
            if (isExisted) {
                return state;
            }else{
                state.cartItems=[...state.cartItems,{...payload,qty:1}];
            }
             localStorage.setItem(Key,JSON.stringify(state.cartItems))
        },
        RemoveCart:(state,{payload})=>{
            state.cartItems=state.cartItems.filter(item=>item.id !== payload.id);
            // Cookies.set(Key,state.cartItems)
            localStorage.setItem(Key,JSON.stringify(state.cartItems))
            
        },
        increase:(state,{payload})=>{
           state.cartItems= state.cartItems.map(item=>{
            if (item.id===payload.id) {
                return {...item,qty:item.qty+1};
            }else{
                return item;
            }
           });
        //    Cookies.set(Key,state.cartItems)
        localStorage.setItem(Key,JSON.stringify(state.cartItems))

        },
        decrease:(state,{payload})=>{
            state.cartItems= state.cartItems.map(item=>{
             if (item.id===payload.id && item.qty>1) {
                 return {...item,qty:item.qty-1};
             }else{
                 return item;
             }
            });
            // Cookies.set(Key,state.cartItems)
            localStorage.setItem(Key,JSON.stringify(state.cartItems))

         }
    }
})
export const { AddCart,RemoveCart,increase,decrease } = cartSlice.actions;
export default cartSlice.reducer
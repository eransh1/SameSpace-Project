import { createSlice } from "@reduxjs/toolkit";

const initialState=false

const BurgerClickSlice=createSlice({
    name:"Burger Click",
    initialState,
reducers:{
    setBurgerClick:(state,action)=>{
 return action.payload
    },
}
})
export const {setBurgerClick}=BurgerClickSlice.actions
export default BurgerClickSlice.reducer
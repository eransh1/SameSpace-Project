import { createSlice } from "@reduxjs/toolkit";

const initialState=0

const SeekerWidthSlice=createSlice({
    name:"SeekerWidth",
    initialState,
reducers:{
    setSeekerWidth:(state,action)=>{
 return action.payload
    },
}
})
export const {setSeekerWidth}=SeekerWidthSlice.actions
export default SeekerWidthSlice.reducer
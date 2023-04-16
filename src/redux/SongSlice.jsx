import { createSlice } from "@reduxjs/toolkit";

const initialState={}

const SongSlice=createSlice({
    name:"Song",
    initialState,
reducers:{
    setSong:(state,action)=>{
 return action.payload
    },
}
})
export const {setSong}=SongSlice.actions
export default SongSlice.reducer
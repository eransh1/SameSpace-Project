import { createSlice } from "@reduxjs/toolkit";

const initialState={}

const PlayingSong=createSlice({
    name:"PlayingSong",
    initialState,
reducers:{
    setPlayingSong:(state,action)=>{
 return action.payload
    },
}
})
export const {setPlayingSong}=PlayingSong.actions
export default PlayingSong.reducer
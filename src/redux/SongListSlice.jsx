import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const SongListSlice=createSlice({
    name:"SongList",
    initialState,
reducers:{
    setSongList:(state,action)=>{
 return action.payload
    },
}
})
export const {setSongList}=SongListSlice.actions
export default SongListSlice.reducer
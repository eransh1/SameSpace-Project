import { createSlice } from "@reduxjs/toolkit";

const initialState=""

const SongIdSlice=createSlice({
    name:"SongId",
    initialState,
reducers:{
    setSongId:(state,action)=>{
 return action.payload
    },
}
})
export const {setSongId}=SongIdSlice.actions
export default SongIdSlice.reducer
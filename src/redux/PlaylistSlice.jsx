import { createSlice } from "@reduxjs/toolkit";

const initialState={id:1,name:""}

const PlayListSlice=createSlice({
    name:"PlayList",
    initialState,
reducers:{
    setPlayList:(state,action)=>{
 return action.payload
    },
}
})
export const {setPlayList}=PlayListSlice.actions
export default PlayListSlice.reducer
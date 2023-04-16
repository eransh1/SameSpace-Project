import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const SearchSongSlice=createSlice({
    name:"SearchSong",
    initialState,
reducers:{
    setSearchSong:(state,action)=>{
 return action.payload
    },
}
})
export const {setSearchSong}=SearchSongSlice.actions
export default SearchSongSlice.reducer
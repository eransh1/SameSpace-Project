import { createSlice } from "@reduxjs/toolkit";

const initialState=false

const AudioPlayingSlice=createSlice({
    name:"AudioPlaying",
    initialState,
reducers:{
    setAudioPlaying:(state,action)=>{
 return action.payload
    },
}
})
export const {setAudioPlaying}=AudioPlayingSlice.actions
export default AudioPlayingSlice.reducer
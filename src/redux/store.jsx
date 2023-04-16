import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./PlaylistSlice"
import songReducer from "./SongSlice"
import playingSongReducer from "./PlayingSong"
import songListreducer from "./SongListSlice"
import searchSongReducer from "./SearchedSongSlice"
import songIdReducer from "./SongIdSlice"
import audioPlayingReducer from "./AudioPlayingSlice"
import seekerWidthReducer from "./SeekerWidthSlice"
export const store = configureStore({
    reducer: {
      playList: playlistReducer,
      song:songReducer,
      playingSong:playingSongReducer,
      songList:songListreducer,
      searchSong:searchSongReducer,
      songId:songIdReducer,
      isAudioPlaying:audioPlayingReducer,
      seekerWidth:seekerWidthReducer
      
    },
  });
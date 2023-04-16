import React, { useEffect } from 'react'
import styles from "./MobilePlaylist.module.css"
import Searchbar from '../Searchbar/Searchbar'
import { useQuery, gql } from "@apollo/client";
import { LOAD_SONGS } from "../../GraphQL/Queries";
import { useDispatch, useSelector } from 'react-redux';
import { setSong } from '../../redux/SongSlice';
import {setSongList} from "../../redux/SongListSlice"
import { setSongId } from '../../redux/SongIdSlice';
import { setAudioPlaying } from '../../redux/AudioPlayingSlice'
import { setPlayingSong } from '../../redux/PlayingSong'
import SongListSkeleton from '../Skeleton/Song List Skeleton/SongListSkeleton';

const MobilePlaylist = () => {
    const dispatch=useDispatch()
    const playListData=useSelector((state)=>state.playList)
    const songList=useSelector((state)=>state.songList)
    const searchSong=useSelector((state)=>state.searchSong)
    const { error, loading, data } = useQuery(LOAD_SONGS,{variables:{playlistId:Number(playListData.id)}});
    const songId=useSelector((state)=>state.songId)
    const playingSong=useSelector((state)=>state.playingSong)
console.log("songList",songList)
    useEffect(() => {
        if (data) {
            dispatch(setSongList(data.getSongs));
        }
      }, [data]);

      //GET DURATION
 function getDuration(time){
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return`${minutes}:${seconds}`
 } 
 
 const handleSelectSong=(song)=>{
    if(JSON.stringify(playingSong)!=="{}"){
        dispatch(setAudioPlaying(false))
        dispatch(setPlayingSong({}))
        dispatch(setSong(song))
    dispatch(setSongId(song._id))
    dispatch(setSongId(song._id));
        setTimeout(()=>{
            dispatch(setPlayingSong(song))
            setTimeout(()=>{
                dispatch(setAudioPlaying(true))
            },10)
        },10)
        return
    }
    dispatch(setSong(song))
    dispatch(setSongId(song._id))
    dispatch(setSongId(song._id));
    dispatch(setAudioPlaying(true))
    dispatch(setPlayingSong(song))
 }

  return (
    <>
        <div className={styles.songsListCont}>
        {loading&&<SongListSkeleton cards={5}/>}

        {(searchSong.length>0?searchSong:songList).map((song)=>{
        return <>

        <div onClick={()=>{handleSelectSong(song)}} key={song._id} className={songId!==song._id?styles.songInfoCont:styles.activeSongInfoCont}>
            <img className={styles.image} src={song?.photo} alt="songImage" />
            <div className={styles.infoCont}>
                <p className={styles.songTitle}>{song?.title}</p>
                <p className={styles.songAuthor}>{song?.artist}</p>
            </div>
            <p className={styles.songDuration}>{getDuration(song?.duration)}</p>
        </div>

        </>
    })}
    </div>
    </>
  )
}

export default MobilePlaylist
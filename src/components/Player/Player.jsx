import React, { useEffect, useState } from 'react'
import styles from "./Player.module.css"
import {SlOptions} from "react-icons/sl"
import {HiSpeakerWave,HiSpeakerXMark} from "react-icons/hi2"
import {TbPlayerTrackNextFilled} from "react-icons/tb"
import {BsFillPlayFill,BsPauseFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { setPlayingSong } from '../../redux/PlayingSong'
import { setSong } from '../../redux/SongSlice'
import { setSongId } from '../../redux/SongIdSlice'
import { setAudioPlaying } from '../../redux/AudioPlayingSlice'


const Player = () => {
    const [seekerWidth,setSekerWidth]=useState(0)
    const[isMute,setIsMute]=useState(false)
    const selectedSong=useSelector((state)=>state.song)
    const playingSong=useSelector((state)=>state.playingSong)
    const songsList=useSelector((state)=>state.songList)
    const dispatch=useDispatch()
    const isPlaying=useSelector((state)=>state.isAudioPlaying)
    let dummyTimer=0

//HANDLE PREVIOUS
const handlePrev=(id)=>{
songsList.map((songs,idx)=>{
    if (songs._id===id){
        if(idx===0){return}
        dispatch(setAudioPlaying(false))
        setSekerWidth(0)
        dispatch(setPlayingSong({}));
        dispatch(setSong(songsList[idx-1]))
        dispatch(setSongId(songsList[idx-1]._id))
        setTimeout(()=>{
            dispatch(setPlayingSong(songsList[idx-1]));
            setTimeout(()=>{
                dispatch(setAudioPlaying(true))
                document.querySelector("#myAudioPlayer_player_122122").play()
            },10)
           
        },10)
        return}
})
}

//HANDLE NEXT SONG
const handleNext=(id)=>{
    songsList.map((songs,idx)=>{
        if (songs._id===id){
            
            if(idx===songsList.length){return}
            dispatch(setAudioPlaying(false))
            setSekerWidth(0)
            dispatch(setPlayingSong({}));
            dispatch(setSong(songsList[idx+1]))
            dispatch(setSongId(songsList[idx+1]._id))
            setTimeout(()=>{
                dispatch(setPlayingSong(songsList[idx+1]));
                setTimeout(()=>{
                    dispatch(setAudioPlaying(true))
                    document.querySelector("#myAudioPlayer_player_122122").play()
                },10)
               
            },10)
            return}
    })
}

//HANDLE AUDIO PLAYING
useEffect(()=>{
    if(JSON.stringify(playingSong)!=="{}"){
if(!isPlaying){document.querySelector("#myAudioPlayer_player_122122").pause();return}
document.querySelector("#myAudioPlayer_player_122122").play()

    }
},[isPlaying])

//HANDLE MUTE OF MUSIC
useEffect(()=>{
    if(JSON.stringify(playingSong)!=="{}"){
        if(!isMute){document.querySelector("#myAudioPlayer_player_122122").muted=isMute;return}
        document.querySelector("#myAudioPlayer_player_122122").muted=isMute
            }
},[isMute,isPlaying])

//HANDLE PROGRESS BAR
// const updateSeekerWidth=()=>{
//     if(!isPlaying){clearInterval(intervalId);return}
//     if(isPlaying){setSekerWidth((prev)=>{return prev+(100/playingSong.duration)})}
// }


useEffect(()=>{
    if(JSON.stringify(playingSong)==="{}"){return}
   console.log("yipee")
    let timerId
    if(!isPlaying){clearInterval(timerId)}
    if(isPlaying){
        timerId= setInterval(()=>{
            if(document.querySelector("#myAudioPlayer_player_122122")){
            const playTime = Math.floor(document.querySelector("#myAudioPlayer_player_122122").currentTime);
            console.log("playTime",playTime)
            //COMMENTED ACTUAL CODE
            // setSekerWidth((playTime*100)/playingSong.duration)
            setSekerWidth((playTime*100)/217)
            }
        },1000)
 
    }
},[dummyTimer,playingSong])

function updatePlayTime() {
        dummyTimer++    
  }
  
  const handleSeekerClick=(e)=>{
    
    let outerDiv=e.target
    let containerWidth = outerDiv.offsetWidth;
    let mouseX = e.clientX - outerDiv.getBoundingClientRect().left;
    let percentage = (mouseX / containerWidth) * 100;
    setSekerWidth(percentage)
    // document.querySelector("#myAudioPlayer_player_122122").currentTime =(playingSong.duration*percentage)/100
    document.querySelector("#myAudioPlayer_player_122122").currentTime =(217*percentage)/100
    console.log(percentage)
   
  }

  return (
    <>
    {JSON.stringify(playingSong)!=="{}"&&<audio onTimeUpdate={updatePlayTime()} className={styles.mainPlayer} id="myAudioPlayer_player_122122" controls>
  <source src={playingSong.url} type="audio/mpeg"/>
</audio>}
    <section className={styles.outerCont}>
        <h1 className={styles.songName}>{selectedSong.title}</h1>
        <p className={styles.songAuthor}>{selectedSong.artist}</p>
        {!playingSong?.photo&&<div className={styles.tempImage}>No Track Selected</div>}
        {playingSong.photo&&<img className={styles.songImage} src={selectedSong.photo} alt="songPic"/>}

      <div onClick={handleSeekerClick} className={styles.songSeeker}>
        <p id='seeker_running_inside' style={{width:`${seekerWidth}%`}} className={styles.seekBar}></p>
      </div>  

      <div className={styles.controlerCont}>
        <div className={styles.optionCont}>
            <SlOptions className={styles.threeDots}/>
        </div>
        <div className={styles.player}>
           <div className={styles.playerCont}>
            <TbPlayerTrackNextFilled onClick={()=>handlePrev(selectedSong._id)} className={styles.prevSong}/>
            <div onClick={()=>{dispatch(setAudioPlaying(!isPlaying));dispatch(setPlayingSong(selectedSong))}} className={styles.playBtnCont}>
            {isPlaying?<BsPauseFill className={styles.playPauseIcon}/>:<BsFillPlayFill className={styles.playPauseIcon}/>}
            </div>
            <TbPlayerTrackNextFilled onClick={()=>handleNext(selectedSong._id)} className={styles.nextSong}/>
           
           </div> 
           <div onClick={()=>setIsMute(e=>!e)} className={styles.audio}>
            {isMute?<HiSpeakerXMark className={styles.audioIcon}/>:<HiSpeakerWave className={styles.audioIcon}/>}
           </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Player
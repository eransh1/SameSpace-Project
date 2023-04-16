import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Playlist from '../../components/Playlist/Playlist'
import Player from '../../components/Player/Player'
import { useSelector } from 'react-redux'
var grad = require("gradient-from-image")
const Home = () => {
  const playingSong=useSelector((state)=>state.playingSong)
  const[bgColor,setBgColor]=useState("balck")
  
  useEffect(()=>{
if(JSON.stringify(playingSong)==="{}"){setBgColor("black");return}
const imgUrl = playingSong.photo;
 
grad.gr(imgUrl).then(gradient =>{
    setBgColor(gradient.relevant[0])
});
  },[playingSong])
 



  return (
    <section style={{background:bgColor}} className={styles.outerCont}>
<Sidebar/>
<Playlist/>
<Player/>
    </section>
  )
}

export default Home

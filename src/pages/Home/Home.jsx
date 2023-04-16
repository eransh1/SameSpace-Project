import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Playlist from '../../components/Playlist/Playlist'
import Player from '../../components/Player/Player'
import { useSelector } from 'react-redux'
import MobileSidebar from '../../components/Mobile Sidebar/MobileSidebar'
var grad = require("gradient-from-image")
const Home = () => {
  const playingSong=useSelector((state)=>state.playingSong)
  const[bgColor,setBgColor]=useState("balck")
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  //BACKGROUND GRADIENT
  useEffect(()=>{
if(JSON.stringify(playingSong)==="{}"){setBgColor("black");return}
const imgUrl = playingSong.photo;
 
grad.gr(imgUrl).then(gradient =>{
  if(gradient){
    setBgColor(gradient.relevant[0])
  }
    
});
  },[playingSong])
 



  return (
    <section style={{background:bgColor}} className={styles.outerCont}>
    {width>980&&
    <><Sidebar/>
    <Playlist/></>}
    {width<980&&<>
    
      <MobileSidebar width={width}/>
    </>}
<Player/>
    </section>
  )
}

export default Home

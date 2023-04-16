import React, { useEffect, useState } from 'react'
import styles from "./MobileSidebar.module.css"
import logo from "../../images/Logo.svg"
import profileImg from "../../images/Ansh Image.jpg"
import {IoMdArrowDropdown} from "react-icons/io"
import { useQuery, gql } from "@apollo/client";
import { LOAD_PLAYLIST } from "../../GraphQL/Queries";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayList } from '../../redux/PlaylistSlice';
import MobilePlaylist from './MobilePlaylist'
import {GiHamburgerMenu} from "react-icons/gi"
import { setBurgerClick } from '../../redux/BurgerClickSlice'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { setSearchSong } from '../../redux/SearchedSongSlice'
import { setSongList } from '../../redux/SongListSlice'
import OptionSkeleton from '../Skeleton/Option Skeletion/OptionSkeleton'
import Searchbar from '../Searchbar/Searchbar'

const MobileSidebar = ({width}) => {
    const { error, loading, data } = useQuery(LOAD_PLAYLIST);
    const [playListt, setPlaylistt] = useState([]);
      const dispatch=useDispatch()
      const idx=useSelector((state)=>state.playList)
    const isBurgerClick=useSelector((state)=>state.burgerClick)
    const selectedPlayList=useSelector((state)=>state.playList)
      useEffect(() => {
        if (data) {
            setPlaylistt(data.getPlaylists);
        }
      }, [data]);

      const handleSelectPlayList=(item)=>{
        if(selectedPlayList.id===item.id){dispatch(setPlayList({id:"",name:""}));return}
        dispatch(setPlayList({id:item.id,name:item.title}))
        
      }


  return (
    <section style={{transform:isBurgerClick?"translateX(0)":""}} className={styles.outerCont}>
    <div className={styles.inner}>
    {(isBurgerClick&&width<900)&&<AiOutlineCloseCircle className={styles.closeIcon} onClick={()=>{dispatch(setBurgerClick(!isBurgerClick))}}/>}

        {(!isBurgerClick&&width<900)&&<GiHamburgerMenu onClick={()=>{dispatch(setBurgerClick(!isBurgerClick))}} className={styles.burgerIcon}/>}
    </div>
         <img className={styles.logo} src={logo} alt="logo" />
<div className={styles.searchBarContainer}>
<Searchbar/>
</div>
    <div className={styles.optionCont}>
    {loading&&<OptionSkeleton cards={4}/>}
    {playListt.map((item)=>{
        return <>
        <div key={item.id} onClick={()=>handleSelectPlayList(item)}  className={styles.optionCover}>
<div className={styles.option}>
{item?.title}
<IoMdArrowDropdown style={{transform:idx.id!==item.id?"":"rotate(180deg)"}} className={styles.icon}/>
</div>
{idx.id===item.id&&<MobilePlaylist/>}
</div>
        </>
    })}
   


    </div>
<img className={styles.profileImg} src={profileImg} alt="profile" />
    </section>
  )
}

export default MobileSidebar
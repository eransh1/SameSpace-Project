import React, { useEffect, useState } from 'react'
import styles from "./Sidebar.module.css"
import logo from "../../images/Logo.svg"
import profileImg from "../../images/Ansh Image.jpg"
import { useQuery} from "@apollo/client";
import { LOAD_PLAYLIST } from "../../GraphQL/Queries";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayList } from '../../redux/PlaylistSlice';
import OptionSkeleton from '../Skeleton/Option Skeletion/OptionSkeleton';
import { setSearchSong } from '../../redux/SearchedSongSlice';
import { setSongList } from '../../redux/SongListSlice';

const Sidebar = () => {
  // eslint-disable-next-line
    const { error, loading, data } = useQuery(LOAD_PLAYLIST);
  const [playListt, setPlaylistt] = useState([]);
    const dispatch=useDispatch()
    const idx=useSelector((state)=>state.playList)

  useEffect(() => {
    if (data) {
        setPlaylistt(data.getPlaylists);
    }
  }, [data]);


const handleSelectPlayList=(item)=>{
  dispatch(setPlayList({id:item.id,name:item.title}))
  dispatch(setSearchSong([]))
  dispatch(setSongList([]))
}

  return (
    <>
        <section className={styles.outerCont}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.optionCont}>
        {loading&&<OptionSkeleton cards={4}/>}
            {playListt.map((item)=>{
                return <>
                    <p key={item.id} onClick={()=>handleSelectPlayList(item)} className={idx.id!==item.id?styles.option:styles.activeOption}>{item?.title}</p>
                </>
            })}
        </div>
        <img className={styles.profileImg} src={profileImg} alt="profile" />
        </section>
    </>
  )
}

export default Sidebar
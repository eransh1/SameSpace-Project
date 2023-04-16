import React, { useEffect, useState } from 'react'
import styles from "./Sidebar.module.css"
import logo from "../../images/Logo.svg"
import profileImg from "../../images/Ansh Image.jpg"
import { useQuery, gql } from "@apollo/client";
import { LOAD_PLAYLIST } from "../../GraphQL/Queries";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayList } from '../../redux/PlaylistSlice';

const Sidebar = () => {
    const { error, loading, data } = useQuery(LOAD_PLAYLIST);
  const [playListt, setPlaylistt] = useState([]);
    const dispatch=useDispatch()
    const idx=useSelector((state)=>state.playList)

  useEffect(() => {
    if (data) {
        setPlaylistt(data.getPlaylists);
    }
  }, [data]);
  return (
    <>
        <section className={styles.outerCont}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.optionCont}>
            {playListt.map((item)=>{
                return <>
                    <p key={item.id} onClick={()=>dispatch(setPlayList({id:item.id,name:item.title}))} className={idx.id!==item.id?styles.option:styles.activeOption}>{item?.title}</p>
                </>
            })}
        </div>
        <img className={styles.profileImg} src={profileImg} alt="profile" />
        </section>
    </>
  )
}

export default Sidebar
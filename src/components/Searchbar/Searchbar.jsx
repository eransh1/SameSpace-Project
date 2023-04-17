import React, { useEffect, useState } from 'react'
import styles from "./Searchbar.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import SearchComponent from './SearchComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchSong } from '../../redux/SearchedSongSlice';

const Searchbar = () => {
    const[search,setSearch]=useState("")
    const[isSearching,setIsSearching]=useState(false)
    const dispatch=useDispatch()
    const songList=useSelector((state)=>state.songList)
console.log(songList)


useEffect(()=>{
  if(search==="")
  {dispatch(setSearchSong([]));
return
  }
let timerId
if(timerId){clearTimeout(timerId);return}
 timerId=setTimeout(()=>{
  if(search){setIsSearching(true)}
  
},1000)
// eslint-disable-next-line
},[search])




  return (
    <>
      {isSearching&&<SearchComponent search={search} setIsSearching={setIsSearching}/>}
    
    <div className={styles.inpCont}>
    <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search Song, Artist' className={styles.outerCont}/>
    <AiOutlineSearch className={styles.searchIcon}/>
    
    {/* <div className={styles.noresultCont}>No Result Found</div> */}
    </div>
    </>
  )
}

export default Searchbar
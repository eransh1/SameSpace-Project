import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery, gql } from "@apollo/client";
import { SEARCH_SONGS } from "../../GraphQL/Queries";
import { setSearchSong } from '../../redux/SearchedSongSlice';

const SearchComponent = ({search,setIsSearching}) => {
    const dispatch=useDispatch()
    const playListData=useSelector((state)=>state.playList)
    const { error, loading, data } = useQuery(SEARCH_SONGS,{variables:{search,playlistId:Number(playListData.id)}});
    
    useEffect(() => {
        if (data) {
           console.log("search",data)
           dispatch(setSearchSong(data.getSongs))
           setIsSearching(false)
        }
      }, [data]);

  return (
<>

</>
  )
}

export default SearchComponent
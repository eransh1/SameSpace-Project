import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery} from "@apollo/client";
import { SEARCH_SONGS } from "../../GraphQL/Queries";
import { setSearchSong } from '../../redux/SearchedSongSlice';
// eslint-disable-next-line
import { toast } from 'react-toastify';

const SearchComponent = ({search,setIsSearching}) => {
    const dispatch=useDispatch()
    const playListData=useSelector((state)=>state.playList)
    // eslint-disable-next-line
    const { error, loading, data } = useQuery(SEARCH_SONGS,{variables:{search,playlistId:Number(playListData.id)}});
    
    useEffect(() => {
        if (data) {
           console.log("search",data)
           
           dispatch(setSearchSong(data.getSongs))
          //  if(data.getSongs.length===0){toast.error("No Result Found")}
           setIsSearching(false)
        }
        // eslint-disable-next-line
      }, [data]);

  return (
<>

</>
  )
}

export default SearchComponent
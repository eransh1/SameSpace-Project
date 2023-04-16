import React from 'react'
import styles from "./Home.module.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Playlist from '../../components/Playlist/Playlist'
import Player from '../../components/Player/Player'

const Home = () => {
  return (
    <section className={styles.outerCont}>
<Sidebar/>
<Playlist/>
<Player/>
    </section>
  )
}

export default Home

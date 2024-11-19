import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import axios from '../utils/axios'

const Home = () => {
    document.title ="FilmFlow | Home"

    const [wallpaper, setwallpaper] = useState(null)

    const GetHeaderWallpaper = async () => {
      try {
        const {data} = await axios.get("/trending/all/day")
        const randomdata = data.results[(Math.random()*data.results.length).toFixed()];
        
        setwallpaper(randomdata);
        
      } catch (error) {
        console.log("error: ", error);
      }
    }
    
    useEffect(() => {
      !wallpaper && GetHeaderWallpaper()
    },[])

  return wallpaper ? <>
    <Sidenav />
    <div className='w-[80%] h-full'>
      <Topnav />
      <Header data= {wallpaper}/>
    </div>
  </> : <h1 className='text-white text-3xl m-5'>loading...</h1>
}

export default Home
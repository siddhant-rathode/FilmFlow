import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.png'

const Topnav = () => {

  const [query, setquery] = useState("")

  const [searches, setsearches] = useState([])

  const GetSearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`)
      setsearches(data.results)
    } catch (error) {
      console.log("error: ", error); 
    }
  }

  useEffect(() => {
    GetSearches()
  }, [query])
  
  return (
    <div className='w-full h-[10vh] relative flex justify-center items-center '>
        <i className="text-xl text-zinc-400 ri-search-2-line"></i>
        <input className='w-[400px] text-zinc-300 mx-10 text-xl outline-none border-none bg-transparent' 
          type="text" 
          placeholder='Search'
          onChange={(e) => setquery(e.target.value)}
          value={query}
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="absolute right-[28%] text-xl text-zinc-400 ri-close-fill">
          </i> 
        )}

        <div className='w-[400px] max-h-[50vh] absolute bg-gray-300 top-[100%] ml-[20px] overflow-auto rounded '>
          {searches.map((s,i) =>(
            <Link key={i} className='hover:text-white hover:bg-zinc-600 duration-300 text-zinc-500 inline-block w-full p-4 flex justify-start items-center border-b-2'>
              <img className='w-[10vh] h-[10vh] object-cover rounded-lg mr-5' 
              src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage} alt="" />
              <span>{s.name || s.titel || s.original_name || s.original_title}</span>
            </Link>))}
        </div>
    </div>
  )
}

export default Topnav
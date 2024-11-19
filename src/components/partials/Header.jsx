import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
    
  return (
    <div style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.4),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }} 
    className='w-[full] h-[60vh] flex flex-col justify-end items-start mx-10 p-[5%]'>
        <h1 className='text-white text-5xl font-black'>
         {data.name || data.titel || data.original_name || data.original_title}
        </h1>
        <p className='w-[70%] mt-3 mb-2 text-white'>
           {data.overview.slice(0, 200)}
           ...<Link className='text-blue-400'>more</Link>
        </p>
        <p className='text-white'>
           <i className="text-yellow-300 ri-megaphone-fill"></i> {data.release_date || "No Information"}
           <i className="ml-3 text-yellow-300 ri-album-fill"></i> {data.media_type.toUpperCase()}
        </p>
        <Link className='bg-[#199FA0] px-5 py-4 text-white mt-5 rounded-lg'>Watch Trailer</Link>
    </div>
  )
}

export default Header
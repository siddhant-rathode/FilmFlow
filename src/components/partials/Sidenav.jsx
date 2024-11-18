import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-500 p-10'>
        <h1 className='text-2xl text-white font-bold'>
            <i className="text-[#199FA0] ri-tv-fill mr-2"></i>
            <span className=''>FilmFlow</span>
        </h1>
        <nav className='flex flex-col text-xl text-zinc-400'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
            <Link className='hover:bg-[#199FA0] hover:text-white p-4 duration-300 rounded-lg'>
              <i className="mr-2 ri-fire-line"></i>Trending
            </Link>
            <Link className='hover:bg-[#199FA0] hover:text-white p-4 duration-300 rounded-lg'>
              <i className="mr-2 ri-bard-line"></i>Popular
            </Link>
            <Link className='hover:bg-[#199FA0] hover:text-white p-4 duration-300 rounded-lg'>
              <i className="mr-2 ri-movie-2-ai-line"></i>Movies
            </Link>
            <Link className='hover:bg-[#199FA0] hover:text-white p-4 duration-300 rounded-lg'>
              <i className="mr-2 ri-tv-2-line"></i>Tv Shows
            </Link>
            <Link className='hover:bg-[#199FA0] hover:text-white p-4 duration-300 rounded-lg'>
              <i className="mr-2 ri-team-line"></i>People
            </Link>
        </nav>
        <hr className='mt-4 border-none h-[1px] bg-zinc-400' />
        <nav className='flex flex-col text-xl text-zinc-400'>
            <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Information</h1>
            <Link className='hover:bg-[#199FA0] hover:text-white p-4 duration-300 rounded-lg'>
              <i className="mr-2 ri-information-2-line"></i>About FilmFlow
            </Link>
            <Link className='hover:bg-[#199FA0] hover:text-white p-4 duration-300 rounded-lg'>
              <i className="mr-2 ri-phone-line"></i>Contact us
            </Link>
        </nav>
    </div>
  )
}

export default Sidenav
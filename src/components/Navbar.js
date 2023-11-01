import React from 'react'
import { NavLink } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'

const Navbar = () => {
  return (
     <div className='bg-black text-white h-[65px] fixed top-0 left-0 w-full z-10'>

        <div className='  ml-[100px]  flex flex-row '>
            <div className=''>
                <NavLink to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt=""  className='h-[35px] mt-4'/> </NavLink>
             </div>
        
          <div className='flex flex-row space-x-8 mt-5 ml-[20px] text-xl'>
           <NavLink to="/movies/popular" ><span className='hover:text-red-600'>Popular</span> </NavLink>
            <NavLink to="/movies/top_rated"><span className='hover:text-red-600'>Top_Rated</span></NavLink>
             <NavLink to="/movies/upcoming"><span className='hover:text-red-600'>UpComing</span></NavLink>
          </div>

          <div className=''>
             <NavLink to="/"><CgProfile className='text-white flex flex-end  ml-[900px] mt-4 text-4xl'/></NavLink>
          </div>
        </div>
        
        
     </div>
  )
}

export default Navbar

import React from 'react'
import {AiFillStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton" 
import 'react-loading-skeleton/dist/skeleton.css'

const Cards = (props) => {
   let movie=props.movie;
   const [isloading,setIsLoading]= useState(true)

   useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false)
      },1500)
   },[])

  return (<div>
      {  
        isloading
         ?
         <div className="group  min-w-[200px] h-[280px] cursor-pointer mr-4 mb-4 relative   overflow-hidden z-0 border-2 rounded-2xl border-slate-800 ">
            <SkeletonTheme baseColor="#626262" highlightColor="#1d1d1d"  >
                <Skeleton height={300} duration={2}  />
            </SkeletonTheme>
        </div>
        :
         <Link to={`/movie/${movie.id}`}>
           <div className="group  min-w-[200px] h-[280px] cursor-pointer mr-4 mb-4 relative   overflow-hidden z-0 border-2 rounded-2xl border-slate-800 hover:scale-125 hover:z-10 hover:shadow-2xl hover:shadow-slate-800">
      
              <img className="h-[300px] " src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path:""}`} /> 

              <div className=' absolute px-[1rem] pt-0 pb-[0.2rem] hover:flex-col-reverse w-[200px] h-[300px]   bg-gradient-to-t from-transparent to-black bottom-0 opacity- 0 transition-opacity duration-200 text-white    hidden group-hover:flex'>

                   <div className=''>
                   <div className='flex  flex-col '>

                         <div className=' font-semibold font-[1rem]  mb-[0.4rem] text-start'> {movie ? movie.original_title: ""} </div>

                          <div className='font-[0.75rem] mb-[0.25rem]  flex space-x-12 text-start'>
                          <div>{movie ? movie.release_date:""} </div>
                         <div className='flex'>
                                 <div> {movie ? Math.round(movie.vote_average*10)/10:""} </div> 
                                      <div> <AiFillStar className=''/></div>  
                         </div>
                   </div>

<div className='italic text-sm overflow-hidden mb-[0.25rem] text-start'>
        <span className='  '>{movie ? (movie.overview.length>14? movie.overview.substring(0,80)+" ...": movie.overview):""} </span>
</div>
</div>
              </div>
             


              

         </div>


  </div>
         </Link>
       }

</div>
  )
  
}

export default Cards

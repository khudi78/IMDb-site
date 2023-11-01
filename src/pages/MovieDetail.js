import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai';
import {FiExternalLink} from 'react-icons/fi';

const MovieDetail = () => {
    const [moviedata,setMoviedata]=useState()
    const {id} =useParams()


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMoviedata(data)) 

    },[])
   
  return (
    <div className='text-white mt-[65px]'>
        
        <div className='w-screen h-[200px] relative'>
        <img className='h-[500px] w-9/12 mx-auto' src={`https://image.tmdb.org/t/p/original${moviedata && moviedata.backdrop_path}`} alt="" />
        </div>
        
        <div className='absolute w-[300px] h-[400px] ml-[250px] '>
            <img className='w-[260px] h-[350px] mt-[80px] rounded-xl shadow-2xl shadow-gray-800' src={`https://image.tmdb.org/t/p/original${moviedata? moviedata.poster_path:""}`} alt="" />
        </div>
        <div className='h-[300px] overflow:hidden flex flex-col-reverse flex-end  '>
        <div className=' absolute ml-[550px] mb-2 text-start  w-[750px]'>
            <div className='font-bold text-5xl '>{moviedata ? moviedata.original_title: ""}</div>
            <div className='text-lg mt-1'>{moviedata ? moviedata.tagline: ""}</div>
            <div className='flex text-lg'>
                 <div className='flex'> <div>{moviedata ? Math.round(moviedata.vote_average*10)/10:""}</div>  <div className='mt-1'><AiFillStar className=''/></div> </div> 
                 <div className='text-white'> { moviedata ? "("+ moviedata.vote_count + ") votes": ""}</div>                      
            </div>
            <div className='text-lg'>{moviedata ? moviedata.runtime +" mins":""}</div>
            <div className='text-lg'>{ moviedata ? "Release date: "+ moviedata.release_date:""}</div>
            <div className='flex text-lg mt-3 '>
                {
                    moviedata && moviedata.genres
                    ?
                    
                        moviedata.genres.map((genre)=>
                        <div className='border-2 border-white rounded-3xl mr-5 p-1 px-[8px]'> <span key={genre.id}>{genre.name}</span> </div>
                        )
                    :
                    ""
                }
            </div>
        </div>
        </div>
       
        
        <div className='w-6/12 ml-[550px] mt-10 text-start' >
            <h1 className='text-white font-semibold text-2xl'>Synopsis</h1>
            <div className=''>
                {moviedata ? moviedata.overview:""}
            </div>
        </div>

        <div className='flex space-x-80 w-9/12 mx-auto mt-20 mb-20'>
            <div className='text-white text-3xl'>Useful Links</div>
            
            {
                moviedata && moviedata.homepage && <a href={moviedata.homepage} target='_blank' className='w-[150px]'>
                    <div className='text-black bg-red-600 flex flex-row rounded-3xl w-[150px] h-[35px] pl-7 pt-1 font-semibold'>
                       <div className=''>Homepage</div> <div className='mt-1'><FiExternalLink/></div> 
                    </div></a>
            }
            
            
            {
                moviedata && moviedata.imdb_id && <a href={"https://www.imdb.com/title/" + moviedata.imdb_id} target='_blank'>
                    <div className='text-black bg-yellow-500 flex rounded-3xl w-[150px] h-[35px] pl-[50px] pt-1 font-semibold'>
                    <div>IMDb</div> <div className='mt-1'><FiExternalLink/></div>
                    </div></a>
            }
            
            
            
        </div>
    </div>
  )
}

export default MovieDetail

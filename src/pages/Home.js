import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import Movielist from '../components/Movielist';
import {AiFillStar} from 'react-icons/ai';

const Home = () => {
    const [popularmovie,setpopularMovie]=useState([]);

    useEffect(()=>{
        
          
            fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setpopularMovie(data.results))   
      
    }, []) 

  return (
    <div className=''>
        <Carousel
       showThumbs={false}
       autoPlay={true}
       transitionTime={3}
       infiniteLoop={true}
       showStatus={false}
        >
           {
            popularmovie.map(movie=>
                <Link to={`/movie/${movie.id}`}>
                <div className='w-screen border-black border-5  mt-[65px]'>
                        <div className='h-[80px]  w-screen'>
                           <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="" />
                        </div>

                     <div className='text-white w-10/12 mx-auto h-[500px] flex flex-col-reverse pb-20'>
                      <div >
                      <div className='  text-8xl font-bold text-start'> {movie ? movie.original_title: ""} </div>

                               <div className=' flex  space-x-7 font-md text-2xl mt-5 '>
                                 <div>{movie ? movie.release_date:""} </div>
                                    <div className='flex space-x-1'>
                                        <div> {movie ? Math.round(movie.vote_average*10)/10:""} </div> 
                                       <div> <AiFillStar className='text-white mt-1 text-2xl'/></div>  
                                    </div>
                                </div>

                                 <div className='mt-6 text-lg  w-8/12 text-start border-6 border-white'>
                                 <span className='ml-1  '>{movie ? movie.overview:""} </span>
                            </div>
                      </div>
  

</div>


                </div>
                 
                </Link>
                )
           }    
        
        </Carousel>  
        <Movielist/>
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Cards from './Cards';
const Movielist = () => {
    
    const [movielist,setmovieList]=useState([]);
    const {type}=useParams();

    useEffect(()=>{
        getdata();
    },[])

    useEffect(()=>{
        getdata();
    },[type])

    const getdata=(()=>
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
     .then(res=>res.json())
     .then(data=>setmovieList(data.results))
     
     
    )
    

  return (
    <div className='mt-10 w-10/12 mx-auto mt-[65px]'>
        
        <h1 className='text-white font-semibold text-3xl  text-start uppercase '>{type?type:"Popular"}</h1>
        <div className='flex flex-wrap w-11/12 mx-auto mt-[40px]  justify-center inline'>
        {
                    movielist?.map(movie => (
                        <Cards movie={movie} key={movie.id} />
                    ))
        }
        </div>
       
    </div>
  )
}

export default Movielist

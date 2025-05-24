import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Card from './card';
import Movienotfound from './movienotfound';

const maincom = () => {
  const [userinput, setuserinput] = useState('')
  const [moviedis, setmoviedis] = useState([])
  // console.log(moviedis)
  // console.log(userinput)

  let API_URL = "https://www.omdbapi.com?apikey=f0387a84";
  const movie = async (title)=> {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmoviedis(data.Search)
}
// movie("spiderman");
// const movies = async (title)=> {
//       const res = await axios.get(`http://www.omdbapi.com?apikey=f0387a84&s=${title}`)
//       setmoviedis(res.data.Search)
//     }
    // const searchmovie = movies("spiderman")
useEffect(()=> {
  movie("spiderman")
}, [])
const movies1 = {
  "Poster": "N/A",
  "Title": "Italian Spiderman",
  "Type": "movie",
  "Year": "2007"
}
  return (
    <div>
      <div className='w-screen flex justify-center'>
        <div className='flex border-2 px-4 rounded-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[40%]'>
        <input onChange={(e)=> {setuserinput(e.target.value)}} value={userinput} className='bg-transparent text-white  outline-none p-3 md:text-xl lg:text-xl rounded-3xl w-[95%] placeholder:text-white' type="text" placeholder='Search Any Movie'/>
        <button onClick={()=> movie(userinput)}><i className="fa-solid fa-magnifying-glass text-white text-xl"></i></button>
        </div>
    </div>
    {
      moviedis?.length > 0 
      ? (<div className="flex flex-wrap justify-center w-auto">{moviedis.map((movies)=> 
        < Card movies={movies}/>
      )}</div>) : (
        <div className=''>
          <Movienotfound/>
        </div>
      )
    }
    </div>
  )
}

export default maincom
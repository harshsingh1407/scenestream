import React from 'react'

const card = ({movies}) => {
  return (
      <div className='movie w-[250px] bg-gray-600 m-5 mt-10 rounded-xl'>
      <div className='movie-img'>
        <img className='' src={movies.Poster !== 'N/A' ? movies.Poster : 'https://cdn.pixabay.com/photo/2022/07/24/19/40/movie-7342374_640.png' } alt={movies.title} />
      </div>
      <div className='p-1 flex justify-between font-semibold text-white'>
        <p>{movies.Type}</p>
        <p>{movies.Year}</p>
      </div>
      <div className='text-yellow-600 p-1 pb-2 text-white text-xl'>
        <p>{movies.Title}</p>
      </div>
    </div>
  )
}

export default card
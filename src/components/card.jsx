import React from 'react';

const Card = ({ movie }) => {
  // Use a placeholder if the poster is 'N/A'
  const posterUrl = movie.Poster !== 'N/A'
    ? movie.Poster
    : 'https://placehold.co/400x600/1f2937/ffffff?text=No+Poster';

  return (
    <div className="m-4 w-64 md:w-72 bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.03] overflow-hidden group">
      {/* Movie Poster Container */}
      <div className="relative h-96">
        <img
          src={posterUrl}
          alt={movie.Title}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/400x600/1f2937/ffffff?text=No+Poster';
          }}
        />
        {/* Type Badge */}
        <div className="absolute top-0 right-0 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-bl-lg">
          {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 text-white">
        <h2 className="text-xl font-bold truncate text-indigo-400 mb-1" title={movie.Title}>
          {movie.Title}
        </h2>
        <p className="text-sm text-gray-400">
          Year: <span className="font-medium text-gray-300">{movie.Year}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

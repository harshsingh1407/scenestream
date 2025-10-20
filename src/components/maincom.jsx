import React, { useEffect, useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import Card from './card';
import Movienotfound from './movienotfound';

// API Key and URL
const API_URL = "https://www.omdbapi.com?apikey=f0387a84";

const MainCom = () => {
  const [userInput, setUserInput] = useState('');
  const [movieDis, setMovieDis] = useState([]);
  const [loading, setLoading] = useState(false);
  // Default query to display results on initial load
  const [currentQuery, setCurrentQuery] = useState('Spiderman');

  // Async function to fetch movies
  const searchMovies = async (title) => {
    if (!title || title.trim() === '') return;

    setLoading(true);
    setCurrentQuery(title.trim());
    setMovieDis([]); // Clear previous results

    try {
      const response = await fetch(`${API_URL}&s=${title.trim()}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovieDis(data.Search);
      } else {
        setMovieDis([]);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setMovieDis([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial load effect: search for "spiderman"
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  // Handler for search button click or Enter key
  const handleSearch = () => {
    searchMovies(userInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 font-inter">


      {/* Search Bar */}
      <div className='flex justify-center p-6 pt-10'>
        <div className='flex items-center w-full max-w-3xl h-14 bg-gray-800 rounded-full shadow-2xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-indigo-600 focus-within:ring-opacity-50'>
          <input
            onChange={(e) => { setUserInput(e.target.value) }}
            onKeyPress={handleKeyPress}
            value={userInput}
            className='flex-grow bg-transparent text-white placeholder-gray-400 outline-none px-6 text-base md:text-xl'
            type="text"
            placeholder='Search for a movie title...'
          />
          <button
            onClick={handleSearch}
            className='flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white p-3 m-1 rounded-full transition-colors duration-200'
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Results Display Area */}
      <main className="p-4 md:p-8">
        {loading ? (
          // Loading State
          <div className="text-center p-16 flex flex-col items-center justify-center min-h-[50vh]">
            <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
            <p className="text-xl text-gray-400">Searching for "{currentQuery}"...</p>
          </div>
        ) : (
          // Results or Not Found
          movieDis && movieDis.length > 0 ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-200 mb-6 border-b border-gray-700 pb-2 max-w-6xl mx-auto">
                  Showing {movieDis.length} results for <span className="text-indigo-400">"{currentQuery}"</span>
              </h2>
              <div className="flex flex-wrap justify-center w-full gap-6">
                {movieDis.map((movie) =>
                  // Note: The prop name here is now 'movie' to match the Card component's destructuring
                  <Card key={movie.imdbID} movie={movie} /> 
                )}
              </div>
            </>
          ) : (
            // Movie Not Found State
            <Movienotfound query={currentQuery} />
          )
        )}
      </main>
    </div>
  );
};

export default MainCom;

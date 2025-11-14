import { useState } from "react";
import movies from "../consumable/movietwo";

const MovieTwo = () => {
  const [movieList, setMovieList] = useState([]);

  const fetchAll = () => {
    try {
      setMovieList(movies);
      localStorage.setItem("movie", JSON.stringify(movies));
      console.log("movies in localstorage", movies);
    } catch (error) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      console.log("movies in localstorage", movies);
      setMovieList(movies);
    }
  };
  const clearAll = () => setMovieList([]);

  const genre = (genre) => {
    const filteredMovies = movies.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
    setMovieList(filteredMovies);
  }

  const category = (category) => {
    const filteredMovies = movies.filter(
      (movie) => movie.category.toLowerCase() === category.toLowerCase()
    );
    setMovieList(filteredMovies);
  }

  return (
    <>
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Movie Explorer</h1>
        <p className="text-gray-600 mb-4">Browse trending movies from around the world</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md"
          onClick={fetchAll}
        >
          Fetch All
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-md shadow-md ml-3"
          onClick={clearAll}
        >
          Clear
        </button>
        <div className="genre my-4 flex justify-center gap-4 mt-4">
          <button onClick={() => genre("action")} className=" bg-green-500 mt-2 px-5 py-2 text-white rounded-md hover:bg-green-600">Action</button>
          <button onClick={() => genre("thriller")} className=" bg-green-500 mt-2 px-5 py-2 text-white rounded-md hover:bg-green-600">Thriller</button>
          <button onClick={() => genre("sci-fi")} className=" bg-green-500 mt-2 px-5 py-2 text-white rounded-md hover:bg-green-600">Sci-Fi</button>
          <button onClick={() => genre("animation")} className=" bg-green-500 mt-2 px-5 py-2 text-white rounded-md hover:bg-green-600">Animation</button>
          <button onClick={() => genre("anime")} className=" bg-green-500 mt-2 px-5 py-2 text-white rounded-md hover:bg-green-600">Anime</button>
        </div>
        <div className="category my-4 flex justify-center gap-4 mt-4">
          <button onClick={() => category("hollywood")} className=" bg-green-500 mt-2 px-5 py-2 text-white rounded-md hover:bg-green-700">Hollywood</button>
          <button onClick={() => category("korean")} className=" bg-green-500 mt-2 px-5 py-2 text-white rounded-md hover:bg-green-700">Korean</button>
          <button onClick={() => category("japanese")} className=" bg-green-500 mt-2 px-5 py-2 text-white rounded-md hover:bg-green-700">Japanese</button>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movieList.map((movie, index) => {
          return(
            <div key={index} className="text-center">
            <img
              src={movie.img}
              alt={movie.name}
              className="w-60 h-80 object-cover rounded-lg"
            />
            <div className="mt-2 mr-7">
              <h2 className="text-lg font-semibold text-gray-800">{movie.name}</h2>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Genre:</span> {movie.genre}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span> {movie.category}
              </p>
              <p className="text-sm text-gray-600">{movie.year}</p>
              <div className="flex justify-center mt-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => {
                  const filteredMovies = movieList.filter((movies) => movies.name !== movie.name);
                  setMovieList(filteredMovies);
                }}>
                  Remove
                </button>
              </div>
            </div>
          </div>
          )
          
        })}
      </div>
    </>
  );
};
export default MovieTwo;
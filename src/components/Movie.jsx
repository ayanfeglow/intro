import { useState } from "react";
import movies from "../consumable/movie";
const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const fetchData = () => {
    setMovieList(movies);
  }
  const clearAll = () => {
    setMovieList([]);
  }

  const removeMovie = (name) => {
    const response = movieList.filter((movie) => movie.name !== name);
    setMovieList(response);
  }
  const genre = (genre) =>{
    const newMovie = movieList.filter((movie)=> movie.genre.toLowerCase() === genre.toLowerCase());
    setMovieList(newMovie)
  }
  const category = (category) =>{
    const newMovie = movieList.filter((movie)=> movie.category.toLowerCase() === category.toLowerCase());
    setMovieList(newMovie)
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center mt-3">We have {movieList.length} {movieList.length === 1 ? "movie" : "movies"} available</h1>
        <div className="genre my-4 flex justify-center gap-4">
          <button onClick={() => genre('action')} className="bg-green-500 text-white px-4 py-2 rounded-md">Action</button>
          <button onClick={() => genre('anime')} className="bg-green-500 text-white px-4 py-2 rounded-md">Anime</button>
          <button onClick={() => genre('drama')} className="bg-green-500 text-white px-4 py-2 rounded-md">Drama</button>
          <button onClick={() => genre('horror')} className="bg-green-500 text-white px-4 py-2 rounded-md">Horror</button>
          <button onClick={() => genre ('thriller')} className="bg-green-500 text-white px-4 py-2 rounded-md">Thriller</button>
        </div>
        <div className="category my-4 flex justify-center gap-4">
          <button onClick={() => category('hollywood')} className="bg-green-500 text-white px-4 py-2 rounded-md">Hollywood</button>
          <button onClick={() => category('bollywood')} className="bg-green-500 text-white px-4 py-2 rounded-md">Bollywood</button>
          <button onClick={() => category('japanese')} className="bg-green-500 text-white px-4 py-2 rounded-md">Japanese</button>
        </div>
        <div className='p-6 grid grid-cols-4 gap-4'>
          {movieList.map((movie, index) => {
            return (
              <div key={index} className='border p-4 rounded-md'>
                <img className='h-70 w-full' src={movie.img} alt={movie.name} height={100} />
                <h2 className='font-bold'>{movie.name}</h2>
                <p><span style={{ fontWeight: "bold" }}>Gerne:</span> {movie.genre}</p>
                <p> <span style={{ fontWeight: "bold" }}>Category:</span> {movie.category}</p>
                <p style={{ paddingBottom: "5px" }}>{movie.year}</p>
                <button onClick={() => removeMovie(movie.name)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Remove</button>
              </div>
            )
          })}
        </div>
        <button onClick={clearAll} className="bg-red-500 px-4 py-2 text-white rounded-sm">clear all</button>
        <button onClick={fetchData} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Fetch Data</button>
      </div>
    </>
  )
}

export default Movie;
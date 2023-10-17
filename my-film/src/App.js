import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHead from './components/MoviesListHead';
import SearchBox from './components/SearchBox';


export default function App() {
  const [movies, setMovies] = useState([]);
  const[searchValue, setSearchValue] = useState("");

  const handleFetchData = async (searchValue) => {
    const url = `http://www.omdbapi.com/?&apikey=f7a8a0a8&s=${searchValue}`
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if(data.Search) {
      setMovies(data.Search);
    }
    
  }

  useEffect(() => {
    handleFetchData(searchValue);
  }, [searchValue]);

  
  
  
  return (
    <div className="container-fluid movie-app">

      <div className="row d-flex align-items-center mt-3 mb-4">
        <MovieListHead heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>

      <div className="row">
      <MovieList movies={movies} />
      </div>
    
    </div>
  );
}

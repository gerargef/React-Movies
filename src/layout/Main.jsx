import React, { useState } from "react";
import Searcher from "../components/Searcher";
import MovieList from "../components/MovieList";
import Paginator from "../components/Paginator";
import Preloader from "../components/Preloader";
import FilterRadioButton from "../components/FilterRadioButton";
import { useEffect } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [films, setFilms] = useState([]);
  const [currentMovies, setCurrentMovies] = useState("Evangelion");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [type, setType] = useState("");

  const fetchingMovies = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.Search);
        setIsLoading(false);
        setTotalResult(data.totalResults);
      })
      .catch((err) => console.error(err));
  };

  const searchMovies = (desiredValue, type, page) => {
    fetchingMovies(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${desiredValue}&type=${type}&page=${page}`
    );
  };

  const getType = (type) => {
    setType(type);
    setCurrentPage(1);
  };
  const getSearchValue = (search) => {
    setCurrentMovies(search);
    setCurrentPage(1);
  };
  const getPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    searchMovies(currentMovies, type, currentPage);
  }, [currentMovies, currentPage, type]);
  return (
    <main className="container content">
      <Searcher getSearchValue={getSearchValue} />
      <FilterRadioButton getType={getType} />
      {isLoading ? <Preloader /> : <MovieList films={films} />}
      <Paginator
        pages={Math.ceil(totalResult / 10)}
        currentPage={currentPage}
        getPage={getPage}
      />
    </main>
  );
}

export default Main;

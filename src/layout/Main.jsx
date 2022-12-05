import React, { Component } from "react";
import Searcher from "../components/Searcher";
import MovieList from "../components/MovieList";
import Paginator from "../components/Paginator";
import FilterRadioButton from "../components/FilterRadioButton";
const API_KEY = process.env.REACT_APP_API_KEY;
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      currentMovies: "Evangelion",
      isLoading: true,
      totalResult: '',
      currentPage: 1,
      type: '',
    };
  }
  fetchingMovies = (url) => {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ films: data.Search, isLoading: false, totalResult: data.totalResults })
      .catch((err) =>
      console.error(err)));
  };
  searchMovies = (desiredValue, type, page) => {
      this.fetchingMovies(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${desiredValue}&type=${type}&page=${page}`
      );
  };
  componentDidMount = () => {
    this.searchMovies(this.state.currentMovies, this.state.type, this.state.currentPage)
  };
  getType = (type) => {
    this.setState({type: type, currentPage: 1}, () => {
      this.searchMovies(this.state.currentMovies, this.state.type, this.state.currentPage)
    })
  }
  getSearchValue = (search) => {
    this.setState({currentMovies: search, currentPage: 1}, () => {
      this.searchMovies(this.state.currentMovies, this.state.type, this.state.currentPage)
    })
  }
  getPage = (page) => {
    this.setState({currentPage: page}, () => {
      this.searchMovies(this.state.currentMovies, this.state.type, this.state.currentPage)
    })
  }
  render() {
    return (
      <main className="container content">
        <Searcher getSearchValue={this.getSearchValue} />
        <FilterRadioButton getType={this.getType} />
        <MovieList films={this.state.films} />
        <Paginator pages={Math.ceil(this.state.totalResult/10)} currentPage={this.state.currentPage} getPage={this.getPage}/>
      </main>
    );
  }
}

export default Main;

import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import DummyJson from './components/Dummy.json';
import MovieListHeader from './components/MovieListHeader/index';
import MovieListView from './components/MovieComponent/index';
import {AppActions} from './store/redux.js';
import MovieGenreFilter from './components/MovieGenreComponent/index'

const App = () => {
  const dispatch = useDispatch()
  console.log("AppActions",AppActions)
  console.log("DummyJson--------->", DummyJson);
  useEffect(() => {
    handleSetStoreData();
  }, []);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  const  handleSetStoreData = () => {
    dispatch(AppActions.updatedMovieFilterList(DummyJson?.genres));
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2012&page=1&vote_count.gte=100"
    ).then(response => response.json())
      .then((data) => {
        //handle data
        let updateGenre = data.results.map((ele) => {
          return ({ ...ele, "genreId": getRndInteger(2, 6) });
        });
        dispatch(AppActions.updateMovieList(updateGenre));
        console.log(data);
      })
      .catch((error) => {
        console.log("error------->",error)
        let updateGenre = DummyJson?.results?.map((ele) => {
          return { ...ele, genreId: getRndInteger(2, 6) };
        });
        dispatch(AppActions.updateMovieList(updateGenre));
        //handle error
      });
  }

  return (
      <div className="main-container">
        <MovieListHeader />
        <MovieGenreFilter/>
        <MovieListView />
      </div>
  );
}

export default App

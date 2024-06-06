/* eslint-disable react/jsx-key */
import React , {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import './index.css';
import ReactIcon from '../../assets/react.svg'
import SampleImage from '../../assets/sampleMovieImage.jpg'

const MovieListView = () => {
    const movieList = useSelector((state) => state.appStore.movieData?.payload);
    const searchText = useSelector(
      (state) => state.appStore.searchText?.payload
    );
    const selectedGenre = useSelector(
      (state) => state.appStore.selectedGenre?.payload
    );
    const [ movieListData ,  setMovieListData ] = useState ([])
    console.log("movieList---->", movieList);
    console.log("searchText--->", searchText);
    console.log("selectedGenre---->", selectedGenre);
    useEffect(() => {
      if(searchText){
      let data = movieList?.filter((ele) => ele?.title.toLowerCase().includes(searchText.toLowerCase()));
      setMovieListData(data);
      } else {
      setMovieListData(movieList);
      }
    }, [searchText]);

    useEffect(() => {
      if(selectedGenre){
        if(selectedGenre === 1){
          setMovieListData(movieList);
        }else{
        let data = movieList?.filter((ele) => ele.genreId === selectedGenre)
         setMovieListData(data);
        }
        
      }
    },[selectedGenre])
    
    useEffect(() => { setMovieListData(movieList);}, [movieList]);
    return (
      <div style={{ minHeight: "88vh" }}>
        { movieListData && movieListData?.length ? (
          <div className="cards">
            {  movieListData.map((ele) => {
                return (
                  <div key={ele?.id} className="card">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={SampleImage}
                        alt="Avatar"
                        style={{ width: "15rem", height: "15rem" }}
                      />
                    </div>
                    <div>
                      <h2>
                        <b>Title: {ele.title}</b>
                      </h2>
                      <p>Description:</p>
                      <p>{ele.overview}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Movie Not Available
          </div>
        )}
      </div>
    );
}

export default MovieListView;
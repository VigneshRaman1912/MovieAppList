import React, { useState } from "react";
import {AppActions} from '../../store/redux.js';
import { useDispatch } from "react-redux";

const MovieFilter = () => {
      const dispatch = useDispatch();

    const [ searchText , setSearchText ] = useState()

    const handleOnchange = (event) => {
        console.log("event------>",event.target.value)
        let text = event.target.value;
        // if (text) {
        //   dispatch(AppActions.searchMovieText(text));
        // }
        dispatch(AppActions.searchMovieText(text));
    }

    return (
      <div style={{ display: "flex", alignItems: "center", padding: "15px 40px 15px 15px" }}>
        <input
          style={{ minHeight: "2rem" , minWidth:"15rem" }}
          type="text"
          value={searchText}
          onChange={handleOnchange}
          placeholder="Search "
        />
      </div>
    );
}
export default MovieFilter;
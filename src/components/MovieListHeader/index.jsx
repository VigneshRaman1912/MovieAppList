import React from "react";
import MovieFilter from './MovieFilter'
const MovieListHeader = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "12vh",
        }}
      >
        <h2 style={{ color: "red", fontSize: "1.7rem", padding: "15px" }}>
          MOVIEFIX
        </h2>
        <MovieFilter />
      </div>
    );
}

export default MovieListHeader;
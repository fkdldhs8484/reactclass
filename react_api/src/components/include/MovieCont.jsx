import React from "react";

const MovieBox = ({ movies }) => {
  return <div>({movies})</div>;
};

const MovieCont = ({ movies }) => {
  //   console.log({ movies });
  return (
    <sectin className="cont__movie">
      <div className="container">
        <div className="novie__inner">
          <div className="movie_box">
            {movies.map((movie, idx) => (
              <MovieBox key={idx} movie={movie.movie} />
            ))}
          </div>
        </div>
      </div>
    </sectin>
  );
};

export default MovieCont;

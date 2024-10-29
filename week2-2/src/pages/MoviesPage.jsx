import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDU1NjNhMzNkMmI1NWNmY2VkYWYzMTU4ODI2NDVjYSIsIm5iZiI6MTcyODQ0MzUzNS45Njg4MDMsInN1YiI6IjY3MDVlZDUwN2UzY2VlN2QzZjljYWUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sETOZgVpmM9s6JNW_yuDJyoqW5mIJQpQLaHrqHNrZic`,
            },
          },
        )
        .json();
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <>
      <div className="movies-wrapper">
        <div className="movies-container">
          {movies.data?.results.map((movie) => {
            return (
              <>
                <Card
                  poster_path={movie.poster_path}
                  original_title={movie.original_title}
                  release_date={movie.release_date}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

type MovieListProps = {
  id: string;
  title: string;
  poster_path: string;
};

const MovieList = () => {
  const [movieList, setMovieList] = useState<MovieListProps[]>([]);

  const [index, setIndex] = useState(0);

  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
      })
      .catch((err) => console.error(err));
  }, [token]);

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  console.log({ movieList });

  return (
    <div className="">
      <div className="text-3xl mb-4">Popular Movies</div>

      <div className="flex justify-between gap-8">
        <button
          onClick={handlePrev}
          className={`${index === 0 ? "hidden" : "block"}`}
        >
          {"<"}
        </button>

        <div className="flex gap-8">
          {movieList.slice(index, index + 4).map((movie) => (
            <div key={movie.id}>
              <MovieCard
                title={movie.title}
                imageUrl={movie.poster_path}
                movieUrl={movie.id}
              />
            </div>
          ))}
        </div>

        <button onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
};

export default MovieList;

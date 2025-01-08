import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type MovieDetailProps = {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
  const imagePath = process.env.NEXT_PUBLIC_API_IMAGE_PATH;

  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
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
        console.log(json);
        if (json !== undefined) {
          setMovieDetail(json);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [id, token]);

  if (loading) return <div className="">Loading...</div>;

  console.log({ movieDetail });

  return (
    <div className="max-w-[1200px] mx-auto mt-4">
      <Link href={"/"} className="relative w-[1000px] h-[500px]">
        <Image
          src={`${imagePath}${movieDetail?.poster_path}`}
          alt="movie pic"
          width={300}
          height={500}
          className="cursor-pointer"
        />
      </Link>

      <div className="text-3xl mb-2">{movieDetail?.title}</div>
      <div className="mb-2">{movieDetail?.overview}</div>
      <div className="mb-2">Release Date: {movieDetail?.release_date}</div>
    </div>
  );
};

export default MovieDetail;

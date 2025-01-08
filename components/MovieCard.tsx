import Image from "next/image";
import Link from "next/link";
import React from "react";

type MovieCardProps = {
  title: string;
  imageUrl: string;
  movieUrl: string;
};

const MovieCard = ({ title, imageUrl, movieUrl }: MovieCardProps) => {
  const imagePath = process.env.NEXT_PUBLIC_API_IMAGE_PATH;
  return (
    <div className="">
      <Link
        href={`/movie/${movieUrl}`}
        className="relative w-[300px] h-[500px] overflow-hidden"
      >
        <Image
          src={`${imagePath}${imageUrl}`}
          alt="movie pic"
          width={300}
          height={500}
          className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer overflow-hidden"
        />
      </Link>
      <div className="mt-8">{title}</div>
    </div>
  );
};

export default MovieCard;

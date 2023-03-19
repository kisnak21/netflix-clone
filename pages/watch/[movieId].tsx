import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed z-10 flex w-full flex-row items-center gap-8 bg-black bg-opacity-70 p-4">
        <AiOutlineArrowLeft
          className="cursor-pointer text-white"
          size={30}
          onClick={() => router.push("/")}
        />
        <p className="text-1xl font-bold text-white md:text-3xl">
          <span className="font-light">Now Watching: </span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        className="h-full w-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;

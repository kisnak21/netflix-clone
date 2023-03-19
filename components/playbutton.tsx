import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      className="flex w-auto flex-row items-center rounded-md bg-white py-1 px-2 text-xs font-semibold transition hover:bg-neutral-300 md:p-4 md:py-2 lg:text-lg"
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill size={30} className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;

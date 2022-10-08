import { ChevronRightIcon } from "@heroicons/react/24//outline";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

const Hero = ({ name, tag, price, image, isImage, isBack }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  return (
    <div className="p-5">
      <div
        className={`relative !mx-auto !my-4 ${
          isImage ? "text-black" : "text-white"
        } md:m-10 rounded-2xl select-none bg-white shadow-sm hover:shadow-lg h-[60vh] md:h-auto md:w-3/5`}
      >
        {isImage ? (
          <img
            src={image}
            alt="image"
            className={`h-3/5 object-cover rounded-2xl shadow-sm ${
              isBack && "relative z-10"
            }`}
          />
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full rounded-2xl object-cover"
            src="/assets/hero.mp4"
            autoPlay
            muted
            loop
          />
        )}

        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
          <h4 className="font-bold text-[#00FF41] text-lg">{tag}</h4>
          <h1
            className={` ${
              isImage ? "text-6xl md:text-8xl" : "text-7xl"
            } font-bold text-center ${isBack && "mt-20 md:mt-0"}`}
          >
            {name}
          </h1>
          <span className="text-lg mt-4">{price}</span>
        </div>

        <div className="absolute top-0 bottom-6 left-0 right-0 flex items-end justify-center">
          <div className="flex items-center space-x-5">
            <button
              className={`px-8 py-3 rounded-full ${
                isImage
                  ? "bg-blue-600 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-200 text-black"
              }`}
            >
              Buy
            </button>
            <div
              className={`flex items-center gap-x-1 ${
                isImage ? "text-blue-600" : "text-white"
              }`}
            >
              <span className="hover:underline cursor-pointer">Learn more</span>
              <ChevronRightIcon className="h-4 object-contain" />
            </div>
          </div>
        </div>

        {!isImage && (
          <div
            onClick={() => handleVideo()}
            className="p-2 group hover:border-white cursor-pointer border-gray-300 border-4 w-max 
          rounded-full text-gray-300 absolute top-5 md:bottom-5 right-5"
          >
            {isPlaying ? (
              <PauseIcon className="h-6 object-contain group-hover:text-white" />
            ) : (
              <PlayIcon className="h-6 object-contain group-hover:text-white" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

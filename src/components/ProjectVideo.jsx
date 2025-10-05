import { useState } from "react";

const ProjectVideo = ({ thumbnail, videoSrc }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full h-[250px] sm:h-[550px] rounded-lg overflow-hidden">
      {!play ? (
        <>
          <img
            src={thumbnail}
            alt="Project thumbnail"
            className="w-full h-full object-contain"
          />
          {/* Play Button */}
          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition"
          >
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              {/* Simple Play Triangle */}
              <div
                className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-black"
              ></div>
            </div>
          </button>
        </>
      ) : (
        <video
          src={videoSrc}
          className="w-full h-full object-contain"
          autoPlay
          muted
          controls
        />
      )}
    </div>
  );
};

export default ProjectVideo;

import React, { useRef, useState } from 'react';

const VideoHover = ({ src, poster, width = 'w-full', height = 'h-auto', aspectRatio = 'aspect-video' }) => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
         console.log("Erro ao reproduzir vídeo:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${width} ${height} ${aspectRatio} cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative bg-gray-900`}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovering ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      />
      
      {/* Poster/Image (show when not hovering) */}
      {poster && (
        <img
          src={poster}
          alt="Project thumbnail"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovering ? 'opacity-0 z-0' : 'opacity-100 z-10'
          }`}
        />
      )}
    </div>
  );
};

export default VideoHover;
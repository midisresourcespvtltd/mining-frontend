import React, { useState } from 'react';
import { X } from 'lucide-react';

const FloatingVideo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 w-80 max-w-[90vw] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Close button - appears on hover */}
      <button
        onClick={handleClose}
        className={`absolute top-2 right-2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition-all duration-200 ${
          isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Close video"
      >
        <X size={16} />
      </button>
      
      {/* Video iframe */}
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/t4K-_b_Cu-I?si=ACNBpeT26NxhACY6&autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default FloatingVideo;
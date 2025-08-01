import React from 'react';

const FloatingVideo = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 max-w-[90vw] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
    
      
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

import React from 'react';
const CardLumma = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  

  const images = [
    '/img/loggin.png',
    '/img/panelprincipal.png',
    '/img/premios.png',
    '/img/salas.png'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover"
          src={images[currentImage]} 
          alt={`Lumma Project ${currentImage + 1}`}
        />
        <button 
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75"
        >
          ❮
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75"
        >
          ❯
        </button>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">Lumma Project</div>
        <p className="text-gray-600 text-base">
          Proyecto de comercio electrónico desarrollado con React, TailwindCSS y Supabase.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex gap-3">
        <a 
          href="https://lumma-nine.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Demo
        </a>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #React
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #TailwindCSS
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Supabase
        </span>
      </div>
    </div>
  );

};

export default CardLumma;
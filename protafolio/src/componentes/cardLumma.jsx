
import React from 'react';

const CardLumma = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 hover:scale-105">
      <img 
        className="w-full h-48 object-cover"
        src="/lumma.png" 
        alt="Lumma Project"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">Lumma Project</div>
        <p className="text-gray-600 text-base">
          Proyecto de comercio electrónico desarrollado con React y tecnologías modernas.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex gap-3">
        <a 
          href="https://github.com/tuUsuario/lumma" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          GitHub
        </a>
        <a 
          href="https://lumma-demo.vercel.app" 
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
          #JavaScript
        </span>
      </div>
    </div>
  );
};

export default CardLumma;

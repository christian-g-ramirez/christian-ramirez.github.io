import React, { useState } from 'react';

const Carousel = ({ images, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-8">
      <div className="relative flex items-center justify-center overflow-hidden h-[600px]">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform ${
                isActive
                  ? 'opacity-100 scale-100 z-20 left-1/2 -translate-x-1/2'
                  : isPrev
                  ? 'opacity-50 scale-75 z-10 left-[10%] -translate-x-0'
                  : isNext
                  ? 'opacity-50 scale-75 z-10 right-[10%] translate-x-0'
                  : 'opacity-0 scale-50 z-0'
              }`}
              style={{
                display: isActive || isPrev || isNext ? 'block' : 'none',
              }}
              onClick={openModal}  // Abre el modal al hacer clic en la imagen
            >
              <img
                src={image}
                className="cursor-pointer max-w-full max-h-[600px] object-contain"
                alt={`Slide ${index + 1}`}
              />
            </div>
          );
        })}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-900 text-white px-4 py-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-900 text-white px-4 py-2 rounded-full"
      >
        ❯
      </button>

      {/* Descripción del proyecto */}
      <div className="mt-6 text-center">
        <p className="w-12/12 text-lg text-white">
          {isExpanded ? description : `${description.slice(0, 100)}...`}
        </p>
        <button
          onClick={toggleDescription}
          className="text-blue-500 underline"
        >
          {isExpanded ? 'Leer menos' : 'Leer más'}
        </button>
      </div>

      {/* Modal para ver la imagen en grande */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-black bg-white px-4 py-2 rounded-full"
            >
              ✖
            </button>
            <img
              src={images[currentIndex]}
              className="max-w-screen max-h-screen object-contain"
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
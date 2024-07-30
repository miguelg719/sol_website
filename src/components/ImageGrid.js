import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-5 px-20">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.span} ${image.bgColor} relative`}
            onClick={() => handleImageClick(image)}
          >
            {!loadedImages[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-pulse"></div>
              </div>
            )}
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${
                loadedImages[index] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
          <div className="relative bg-white p-10 rounded-lg flex" style={{ maxHeight: '83vh' }}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-lg max-h-screen object-contain" />
            <div className="ml-2 pr-10 flex flex-col justify-center pb-40">
              <h2 className="text-2xl mb-20">{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
            <button onClick={closeOverlay} className="absolute top-2 right-2 text-gray-400 hover:text-gray-500">
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
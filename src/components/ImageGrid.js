import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const overlayRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && event.target === overlayRef.current) {
        closeOverlay();
      }
    };
  
    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

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
                <div className="w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
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
        <div ref={overlayRef} className="fixed top-0 inset-0 bg-gray-950 bg-opacity-25 flex justify-center pt-20 z-20">
          <div className="relative bg-white pr-10 rounded-lg flex" style={{ maxHeight: '83vh' }}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-screen object-contain object-left rounded-l-lg" />
            <div className="px-10 flex flex-col justify-center pb-40 text-left">
              <h2 className="text-2xl mb-20 font-medium">{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <br></br>
              {selectedImage.dimensions && <p>Dimensions: {selectedImage.dimensions}</p>}
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
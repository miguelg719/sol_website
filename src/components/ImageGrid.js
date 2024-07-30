import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-5 px-20">
        {images.map((image, index) => (
          <div key={index} className={`${image.span} ${image.bgColor}`} onClick={() => handleImageClick(image)}>
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover cursor-pointer" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
          <div className="relative bg-white mt-20 p-10 rounded-lg flex" style={{maxHeight: "83vh"}}>
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
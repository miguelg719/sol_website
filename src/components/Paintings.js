// src/components/Paintings.js
import React from 'react';
import ImageGrid from './ImageGrid';

const images = [
    { src: `${process.env.PUBLIC_URL}/images/paintings/ring.png`, alt: "Green ring pop", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Chuches 1", description: "Acrílico sobre lienzo, 2024", dimensions:" 50x60 cm" },
    { src: `/images/paintings/candy.png`, alt: "Blue wrapped candy", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Chuches 2", description: "Acrílico sobre lienzo, 2024", dimensions:" 50x60 cm" },
];

// console.log(process.env.PUBLIC_URL);
const Paintings = () => (
  <ImageGrid images={images} />
);

export default Paintings;
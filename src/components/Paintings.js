// src/components/Paintings.js
import React from 'react';
import ImageGrid from './ImageGrid';

const images = [
    { src: `/images/paintings/ring.png`, alt: "Green ring pop", span: "col-span-1 row-span-1", bgColor: "bg-gray-100" },
    { src: `/images/paintings/candy.png`, alt: "Blue wrapped candy", span: "col-span-1 row-span-1", bgColor: "bg-gray-100" },
];

// console.log(process.env.PUBLIC_URL);
const Paintings = () => (
  <ImageGrid images={images} />
);

export default Paintings;
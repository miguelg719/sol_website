// src/components/Collages.js
import React from 'react';
import ImageGrid from './ImageGrid';

const images = [
  { src: './images/collages/collage_1.png', alt: "Fruit arrangement", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Tabachines", description: "Digital collage, 2024" },
  { src: './images/collages/collage_2.png', alt: "Pomegranate collage", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "La dulce fortuna", description: "Digital collage, 2024"},
  { src: './images/collages/collage_3.png', alt: "Pomegranate collage", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "El sol y sus aves", description: "Digital collage, 2024"},
  { src: './images/collages/collage_4.png', alt: "Pomegranate collage", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Hotel Bali Hai", description: "Digital collage, 2024"},
];

const Collages = () => (
<ImageGrid images={images} />
);

export default Collages;
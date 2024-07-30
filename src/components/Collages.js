// src/components/Collages.js
import React from 'react';
import ImageGrid from './ImageGrid';

const images = [
  { src: '/sol_website/images/collages/collage_1.png', alt: "Fruit arrangement", span: "col-span-1 row-span-2", bgColor: "bg-white", title: "Tabachines", description: "Digital collage, 2024" },
  { src: '/sol_website/images/collages/collage_2.png', alt: "Pomegranate collage", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/collages/collage_3.png', alt: "Pomegranate collage", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/collages/collage_4.png', alt: "Pomegranate collage", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
];

const Collages = () => (
<ImageGrid images={images} />
);

export default Collages;
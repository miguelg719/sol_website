// src/components/Printmaking.js
import React from 'react';
import ImageGrid from './ImageGrid';

const images = [
  { src: '/sol_website/images/printmaking/legs.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/dona.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/ballerina.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/chuches.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/cigarro.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/naranja.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/paleta1.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/paleta2.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/sonrisa.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
  { src: '/sol_website/images/printmaking/taza.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-red-500" },
];

const Printmaking = () => (
<ImageGrid images={images} />
);
export default Printmaking;
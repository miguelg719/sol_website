// src/components/Printmaking.js
import React from 'react';
import ImageGrid from './ImageGrid';

const images = [
  { src: '/images/printmaking/taza.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "María", description: "Grabado en punta seca, 2024", dimensions:" 35x26 cm" },
  { src: '/images/printmaking/chuches.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Bety", description: "Grabado en punta seca, 2024", dimensions:" 35x26 cm" },
  { src: '/images/printmaking/legs.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Andrés", description: "Grabado en punta seca, 2023", dimensions:" 35x26 cm" },
  { src: '/images/printmaking/ballerina.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Gúerita", description: "Grabado en punta seca, 2024", dimensions:" 35x26 cm" },
  { src: '/images/printmaking/cigarro.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Cecilia", description: "Grabado en punta seca, 2023", dimensions:" 35x26 cm" },
  { src: '/images/printmaking/paleta1.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Sergio", description: "Grabado en punta seca, 2023", dimensions:" 35x26 cm" },
  { src: '/images/printmaking/paleta2.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Aurora", description: "Grabado en punta seca, 2024", dimensions:" 35x26 cm" },
  { src: '/images/printmaking/dona.png', alt: "Legs at the beach", span: "col-span-1 row-span-1", bgColor: "bg-gray-100", title: "Miguel", description: "Grabado en punta seca, 2024", dimensions:" 26x35 cm" }
];

const Printmaking = () => (
<ImageGrid images={images} />
);
export default Printmaking;
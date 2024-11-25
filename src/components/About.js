import React from 'react';

const About = () => (
  <main className="flex justify-center items-center min-h-screen pb-24 px-4">
    <div className="max-w-4xl w-full">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <img src="./images/paintings/fruits.png" alt="Colorful fruit arrangement" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <p className="text-gray-700 leading-relaxed text-sm px-10 md:text-right md:px-0">
            Me gustan los atardeceres que se pintan de colores, lo llamativas que son las frutas partidas en dos, las fotografías viejas, la brisa que hace bailar las palmeras, las mañanas de domingo con sabor a café, los días de playa, las manos porque hablan por sí solas y parece que tienen personalidad propia, el aroma a tabaco que nos trae de vuelta a alguien especial y las sensaciones que nos hacen viajar kilómetros dentro de la memoria. A veces siento que hablo el idioma de los fragmentos porque es así como pienso que recordamos las cosas, en partes. Unas más lejanas y rotas que otras.<br /><br /> 
            Quiero pensar que existe una clase de paraíso perdido con todo lo que hemos olvidado y deseamos encontrar. O tal vez es que solo tiendo a idealizar y ver la vida a través de lentes rosas.<br /><br />
            Le tengo un miedo profundo a lo efímero del tiempo y este es mi débil intento por querer congelarlo un ratito más. 
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default About;
import React from 'react';

const About = () => (
  <main className="flex justify-center items-center h-screen">
    <div className="flex max-w-4xl">
      <div className="w-1/2 pr-8">
        <img src="images/paintings/fruits.png" alt="Colorful fruit arrangement" className="w-full h-auto" />
      </div>
      <div className="w-1/2 flex items-center">
        <p className="text-right text-gray-700 leading-relaxed">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  </main>
);

export default About;
import React from 'react';

const Shop = () => (
  <main className="flex flex-col pt-20 items-center h-screen">
    <h2 className="text-3xl mb-6">Coming Soon</h2>
    <h3 className="text-xl mb-10">Sign up for updates</h3>
    <form className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="divide-y divide-gray-200">
        <input
          className="w-full px-4 py-3 text-gray-700 focus:outline-none"
          id="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          className="w-full px-4 py-3 text-gray-700 focus:outline-none"
          id="lastName"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="w-full px-4 py-3 text-gray-700 focus:outline-none"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="px-4 py-3 bg-gray-50">
        <button
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          type="button"
        >
          Send
        </button>
      </div>
    </form>
  </main>
);

export default Shop;
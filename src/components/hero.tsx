import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-screen -mt-20">
      {/* Background image with girl centered */}
      <div className="absolute inset-0 bg-[url('/main-background.avif')] bg-cover bg-center z-0" />

      {/* Gradient overlay only on text side */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 pt-24 flex h-full px-8 md:px-5">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to <span className="text-emerald-400">Buyyer</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-4 leading-relaxed">
            Discover top deals on fashion, electronics, beauty, and home essentials—all in one place.
          </p>
          <p className="text-emerald-400 text-base md:text-xl font-medium mb-8">
            Catch the hottest offers before they&apos;re gone!
          </p>
          <button className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white font-medium text-base mt-40 md:text-lg px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

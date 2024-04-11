import React from "react";

export default function Header({ scrollHandler }) {
  return (
    <header className="relative pt-10">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto pt-9">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <video autoPlay muted loop playsInline className="h-full w-full object-cover">
              <source src="/videos/promocioncab.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">
                Vení a disfrutar a nuestro complejo
              </span>
            </h1>

            <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8"
                onClick={scrollHandler}
              >
                Ver Más
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

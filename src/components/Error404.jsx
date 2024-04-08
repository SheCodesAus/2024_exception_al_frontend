import React from 'react';
import Button from './Button';

function Error404() {
  return (
    <section className="w-full min-h-screen sm:py-20 flex items-center justify-center text-white relative">
      <div className="absolute inset-0">
        <img
          src="/404-static.png"
          alt="404 Error page of cartoon space scene with astronaut and spaceship"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="z-10 text-center p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-4">Lost your way?</h2>
        <p className="text-lg sm:text-xl mt-4 mb-6">
          The page you are looking for has moved to a galaxy far, far away...
        </p>
        <p className="text-lg sm:text-xl mb-6">Let's get you home to safety.</p>
        <Button buttonType="link" href="/" size="md" buttonStyle="white">
          Take me home!
        </Button>
      </div>
    </section>
  );
}

export default Error404;

import React from 'react';
import Button from './Button';

function Error404() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-white relative">
      <div className="w-full h-full absolute top-0 left-0 z-0 overflow-hidden">
        <iframe
          src="/404.html"
          title="404 Animated Background"
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div className="z-10 py-16 text-center">
        <h1 className="text-5xl lg:text-6xl font-semibold">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Lost your way?</h2>
        <p className="text-2xl mt-4 mb-6">
          The page you are looking for has moved to a galaxy far, far away...
        </p>
        <p className="text-2xl mb-6">Let's get you home to safety.</p>
        <Button buttonType="link" href="/home" size="md" buttonStyle="white">
          Take me home!
        </Button>
      </div>
    </section>
  );
}

export default Error404;

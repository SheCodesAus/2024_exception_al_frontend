import AsciiCat from "./AsciiCat";

function Error404() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="m-6 font-bold text-5xl">404</h1>

        <p className="m-6">
          You've been blessed by developer cat! My owners are working hard to
          make sure this site works well. Sorry you've come to the wrong spot
          temporarily!
        </p>
      </div>
      <div className="block">
        <AsciiCat />
      </div>
    </>
  );
}

export default Error404;

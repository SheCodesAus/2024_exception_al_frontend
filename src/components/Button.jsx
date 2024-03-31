export default function Button({
  variant,
  size,
  buttonStyle,
  children,
  ...rest
}) {
  let classNames = "rounded text-sm sm:text-md  font-normal ";
  const className = (() => {
    switch (size) {
      case "sm":
        classNames += "px-3 py-1 sm:px-4 xm:py-2 ";
        break;
      case "md":
        classNames += "px-6 py-1.5 sm:px-8 xm:py-2 ";
        break;
    }
    switch (buttonStyle) {
      case "solid":
        classNames +=
          "bg-secondary text-white border-2 border-secondary drop-shadow-lg  hover:bg-white hover:text-secondary transition-all";
        break;
      case "outline":
        classNames +=
          "bg-transparent border-2 border-solid border-primary text-black tracking-wider drop-shadow-lg hover:bg-primary hover:text-white transition-all";
        break;
      case "white":
        classNames +=
          "bg-bg border-2 border-solid border-dark text-black tracking-wider drop-shadow-lg hover:bg-primary hover:text-black hover:font-bold transition-all";
        break;
    }
    return classNames;
  })();
  return (
    <>
      {variant === "link" ? (
        <a className={className} {...rest}>
          {children}
        </a>
      ) : (
        <button className={className} {...rest}>
          {children}
        </button>
      )}
    </>
  );
}

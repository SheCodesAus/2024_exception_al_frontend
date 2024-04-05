export default function Button({
  buttonType,
  size,
  buttonStyle,
  children,
  classes,
  ...rest
}) {
  let classNames = "rounded ";
  const className = (() => {
    switch (size) {
      case "sm":
        classNames +=
          "px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-md ";
        break;
      case "md":
        classNames += "px-6 py-1.5 sm:px-8 sm:py-2 text-md sm:text-lg ";
        break;
    }
    switch (buttonStyle) {
      case "primary":
        classNames +=
          "bg-primary border-2 border-solid border-black text-black tracking-wider drop-shadow-md hover:bg-primary hover:text-white transition-all";
        break;
      case "primary-outline":
        classNames +=
          "bg-transparent border-2 border-solid border-primary text-black tracking-wider drop-shadow-lg hover:bg-primary hover:text-white transition-all";
        break;
      case "secondary":
        classNames +=
          "bg-secondary text-white border-2 border-secondary drop-shadow-lg  hover:bg-white hover:text-secondary transition-all";
        break;
      case "secondary-outline":
        classNames +=
          "bg-white text-black border-2 border-secondary drop-shadow-lg  hover:bg-secondary hover:text-white transition-all";
        break;
      case "tertiary":
        classNames +=
          "bg-tertiary border-2 border-solid border-dark text-black tracking-wider drop-shadow-lg hover:bg-bg hover:text-black  transition-all";
        break;
      case "tertiary-outline":
        classNames +=
          "bg-bg border-2 border-solid border-tertiary text-black tracking-wider drop-shadow-lg hover:bg-primary hover:text-black  transition-all";
        break;
      case "white":
        classNames +=
          "bg-bg border-2 border-solid border-white text-black tracking-wider drop-shadow-lg hover:bg-primary hover:text-black  transition-all";
        break;
      case "white-outline":
        classNames +=
          "bg-bg border-2 border-solid border-dark text-black tracking-wider drop-shadow-lg hover:bg-primary hover:text-black  transition-all";
        break;
      case "plain":
        classNames +=
          "text-greyscale-600 font-bold tracking-wider hover:text-secondary transition-all";
        break;
    }
    return classNames;
  })();
  return (
    <>
      {buttonType === "link" ? (
        <a className={className+ " " +classes} {...rest}>
          {children}
        </a>
      ) : (
        <button className={className + " " +classes} {...rest}>
          {children}
        </button>
      )}
    </>
  );
}

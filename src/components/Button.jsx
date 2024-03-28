export default function Button({ variant, size, buttonStyle, children, ...rest }) {
  let classNames = "rounded text-sm sm:text-md ";
  const className = (() => {
    switch (size) {
      case "sm":
        classNames += "px-3 py-1 sm:px-4 xm:py-2 ";
        break;
      case "md":
        classNames += "px-4 py-1 sm:px-5 xm:py-2 ";
        break;
    }
    switch (buttonStyle) {
      case "solid":
        classNames += "bg-secondary text-white border-2 border-secondary hover:bg-white hover:text-secondary transition-all";
        break;
      case "outline":
        classNames += "bg-transparent border-2 border-solid border-secondary text-secondary font-semibold tracking-wider hover:bg-secondary hover:text-white transition-all";
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
        <button className={className} {...rest}>{children}</button>
      )}
    </>
  );
}

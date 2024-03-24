export default function Button({ variant, size, children, ...rest }) {
  let classNames = "rounded ";
  const className = (() => {
    switch (size) {
      case "sm":
        classNames += "px-4 py-2 ";
        break;
      case "md":
        classNames += "px-5 py-4 ";
        break;
    }
    switch (variant) {
      case "action":
        classNames += "bg-secondary text-white";
        break;
      case "link":
        classNames += "bg-primary text-white";
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
        <button className={className}>{children}</button>
      )}
    </>
  );
}

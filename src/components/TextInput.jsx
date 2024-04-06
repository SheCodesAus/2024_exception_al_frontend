export default function TextInput({ width, size, label, classNames, children,...rest }) {
  return (
    <div
      className={`flex flex-col mb-4 relative ${width === "sm" ? "sm:w-1/2-gap-4" : ""}`}
    >
      <label htmlFor={rest.name} className="text-sm font-medium pb-1">
        {label}
      </label>
      {size === "lg" ? (
        <textarea
          {...rest}
          className={`border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 px-3 py-2 ${classNames}`}
        />
      ) : (
        <input
          {...rest}
          className={`border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 px-3 py-2 ${classNames}`}
        />
      )}
      {children}
    </div>
  );
}

export default function TextInput({ size, label, classNames, ...rest }) {
  return (
    <div className={`flex flex-col mb-4 ${size === "sm" ? "sm:w-1/2-gap-4" : ""}`}>
      <label htmlFor={rest.name} className="text-sm font-medium pb-1">{label}</label>
      <input {...rest} className={`border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 px-3 py-2 ${classNames}`} />
    </div>
  );
}

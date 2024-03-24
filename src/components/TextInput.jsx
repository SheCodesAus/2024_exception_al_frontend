export default function TextInput({ size, label, ...rest }) {
  return (
    <div className={`flex flex-col ${size === "sm" ? "w-1/2" : ""}`}>
      <label htmlFor={rest.name} className="text-sm font-semibold pb-1">{label}</label>
      <input {...rest} className="border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 px-3 py-2" />
    </div>
  );
}

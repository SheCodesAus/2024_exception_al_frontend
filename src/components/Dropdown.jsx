export default function Dropdown({ size, label, children, ...rest }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={rest.name} className="text-sm font-semibold pb-1">{label}</label>
      <select {...rest} defaultValue={[]} className="border-2 border-solid border-greyscale-400 rounded-md bg-greyscale-200 px-3 py-2">
      {children}
      </select>
    </div>
  );
}

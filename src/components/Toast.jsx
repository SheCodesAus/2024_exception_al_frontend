
export default function Toast({message, isVisible}) {
  const hideClassNames = "absolute left-1/2 bg-white p-2 opacity-0";
  const showClassNames = hideClassNames + "top-[100px] opacity-1";

  return (
    <div className={isVisible ? showClassNames : hideClassNames} role="alert">
      {message}
    </div>
  );
}

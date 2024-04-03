import CheckIcon from "../assets/icons/checkmark.svg";
import ErrorIcon from "../assets/icons/xmark.svg";

export default function Toast({ message, type, isVisible }) {
  let classNames = "fixed left-1/2 -translate-x-[50%] p-2 shadow-lg rounded-lg flex flex-row items-center gap-6 ";
  classNames += type === "error" ? "bg-warning " : "bg-tertiary ";
  const hideClassNames = classNames + "bottom-[-100%] opacity-0 ";
  const showClassNames = classNames + "bottom-10 opacity-1 ";

  return (
    <div className={isVisible ? showClassNames : hideClassNames} role="alert">
      {type === "success" ? <img src={CheckIcon} className="w-8" /> : <img src={ErrorIcon} className="w-8 fill-warning"/>}
      {message}
    </div>
  );
}

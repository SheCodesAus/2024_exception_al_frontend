import PopperImage from "../assets/popper.svg";

export default function SuccessfulCard({ children }) {
  return (
    <div className="min-h-full flex flex-col justify-center items-center gap-10 py-10">
      <img src={PopperImage} className="max-w-[160px]" />

      {children}
    </div>
  );
}

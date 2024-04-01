
import PopperImage from "../assets/popper.svg";
import Button from "./Button";

export default function SuccessfulCard() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center gap-10 py-10">
      <img src={PopperImage} className="max-w-[160px]"/>

      <p className="text-lg">Sign up was successful!</p>
      <Button variant="link" href="/login" size="md" buttonStyle="solid" >Login</Button>
    </div>
  );
}

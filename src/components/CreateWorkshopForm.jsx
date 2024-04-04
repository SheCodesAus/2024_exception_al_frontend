import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import postSignUp from "../api/post-signup";
import SuccessfulCard from "./SuccessfulCard";
import Dropdown from "./Dropdown";
import CameraIcon from "../assets/icons/camera.svg";
import { Link, useNavigate } from "react-router-dom";



export default function CreateWorkshopForm() {
  const [formState, setFormState] = useState("");
  const [image, setImage] = useState(null);
  const [workshopDetails, setWorkshopDetails] = useState({
    title: "",
    description: "",
    category: "",
    closing_date: "",
    attendee_target: 0,
    mentor_target: [],
    materials: [],
  });
  const [error, setError] = useState({
    field: "",
    errorMessage: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setWorkshopDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleImageChange = (e) => {
    setWorkshopDetails((prev) => ({
      ...prev,
      profile_image: e.target.files[0],
    }));
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (workshopDetails) {
      if (!workshopDetails.title) {
        setError({
          field: "email",
          errorMessage: "Please enter a title.",
        });
        window.scrollTo({
          top: 200,
          behavior: "smooth",
        });
      } else if (!workshopDetails.category) {
        setError({
          field: "category",
          errorMessage: "Please select a category.",
        });
        window.scrollTo({
          top: 400,
          behavior: "smooth",
        });
      } else if (workshopDetails.interests.length == 0) {
        setError({
          field: "interests",
          errorMessage: "Please select one or more interests.",
        });
        window.scrollTo({
          top: 300,
          behavior: "smooth",
        });
      } else {
        setFormState("pending");
        postSignUp(workshopDetails)
          .then((res) => {
            setFormState("successful");
          })
          .catch((err) => {
            console.error(err);
            setFormState("error");
          });
      }
    }
  };
  return (
    <div className="form-container pt-6">
      {formState === "pending" ? (
        <p>Submitting ...</p>
      ) : formState === "successful" ? (
        <SuccessfulCard>
          <p className="text-lg">Sign up was successful!</p>
          <Button buttonType="link" href="/login" size="md" buttonStyle="secondary">
            Login
          </Button>
        </SuccessfulCard>
      ) : formState === "error" ? (
        // Todo: handle exceptions
        <p>Error while submitting the sign up form</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="m-auto w-full px-4 sm:max-w-[600px] sm:px-12"
        >
          <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
            Create workshop idea
          </h1>
          <hr className="w-10 m-auto border-t-2 border-tertiary"/>
          <label
            htmlFor="image"
            className="block rounded-md relative w-full max-w-[400px] h-60 m-auto bg-greyscale-300 my-8 cursor-pointer"
          >
            {image ? (
              <img
                src={image}
                className="object-cover w-full h-60"
              />
            ) : (
              <></>
            )}
            <div className="absolute top-1/2 left-1/2 w-32 z-1 p-1 opacity-25 -translate-y-1/2 -translate-x-1/2">
              <img src={CameraIcon} className="w-full object-contain" />
            </div>
            <input
              id="image"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="sr-only"
            />
          </label>
          <TextInput
            type="text"
            name="title"
            id="title"
            label="Workshop title*"
            onChange={handleChange}
            required
          />
          <TextInput
            type="text"
            size="lg"
            name="description"
            id="description"
            label="Description"
          />
          <div className="mb-4">
            <span
              className={`block text-sm font-medium mb-2 ${
                error && error.field === "category" ? "text-warning" : ""
              }`}
            >
              Category*
            </span>
            <Dropdown name="category" id="category" onSelect={handleChange} />
          </div>
          <TextInput
            type="date"
            name="closing_date"
            id="closing_date"
            label="Closing date"
          />

          <TextInput
            type="number"
            name="attendee_target"
            id="attendee_target"
            label="Attendee target*"
            onChange={handleChange}
            required
          />
          <div className="my-8 text-center">
            <Button
              buttonType="action"
              buttonStyle="secondary"
              type="submit"
              size="md"
            >
              Create
            </Button>
          </div>
          <div className="text-greyscale-600 underline">
              Don't see your category? Send us your suggestion!{" "}
          </div>
            <Link
              className="font-semibold text-secondary text-lg underline"
              to="/contactusgit"
            >
              Contact Us
            </Link>
          
        </form>
      )}
    </div>
  );
}

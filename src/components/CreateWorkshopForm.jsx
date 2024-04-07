import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import SuccessfulCard from "./SuccessfulCard";
import Dropdown from "./Dropdown";
import CameraIcon from "../assets/icons/camera.svg";
import { Link } from "react-router-dom";
import postWorkshop from "../api/post-workshop";
import LoadingSpinner from "./LoadingSpinner";
import { categoryOptions } from "../data/options";



export default function CreateWorkshopForm() {
  const [formState, setFormState] = useState("");
  const [image, setImage] = useState(null);
  const [workshopDetails, setWorkshopDetails] = useState({
    title: "",
    description: "",
    category: "",
    closing_date: null,
    attendee_target: 0,
    mentor_target: 0,
    materials: "",
    image: null,
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
  const handleDropdownSelect = (option) => {
    setWorkshopDetails((prev) => ({
      ...prev,
      category: option.value,
    }));
  };
  const handleImageChange = (e) => {
    setWorkshopDetails((prev) => ({
      ...prev,
      image: e.target.value,
    }));
    setImage(e.target.value);
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
      } else {
        setFormState("pending");
        const formData = new FormData();
        formData.append("title", workshopDetails.title);
        formData.append("description", workshopDetails.description);
        formData.append("category", workshopDetails.category);
        formData.append("closing_date", workshopDetails.closing_date);
        formData.append("attendee_target", workshopDetails.attendee_target);
        formData.append("mentor_target", workshopDetails.mentor_target);
        if (workshopDetails.image) {
          formData.append("image", workshopDetails.image);
        }
        if (workshopDetails.materials)
          formData.append("materials", workshopDetails.materials);
        postWorkshop(formData)
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
      {formState === "successful" ? (
        <SuccessfulCard>
          <p className="text-lg">Workshop Idea has been submitted!</p>
          <Button buttonType="link" href="/" size="md" buttonStyle="secondary">
            Go back to home page
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
          <hr className="w-10 m-auto border-t-2 border-tertiary" />
          <label
            htmlFor="image"
            className="block rounded-md relative w-full max-w-[400px] h-60 m-auto bg-greyscale-300 my-8 overflow-hidden"
          >
            {image ? (
              <img
                src={image}
                className="object-cover w-full h-60"
                alt="selected workshop image"
              />
            ) : (
              <></>
            )}
            <div className="absolute top-1/2 left-1/2 w-32 z-1 p-1 opacity-25 -translate-y-1/2 -translate-x-1/2">
              <img
                src={CameraIcon}
                className="w-full object-contain"
                aria-hidden="true"
              />
            </div>
          </label>
          <TextInput
              type="text"
              name="image"
              id="image"
              label="Workshop idea image URL"
              onChange={handleImageChange}
            />
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
            label="Description*"
            onChange={handleChange}
            required
          />
          <div className="mb-4">
            <span
              className={`block text-sm font-medium mb-2 ${
                error && error.field === "category" ? "text-warning" : ""
              }`}
            >
              Category*
            </span>
            <Dropdown
              options={categoryOptions}
              name="category"
              id="category"
              onSelect={handleDropdownSelect}
            />
          </div>
          <TextInput
            type="date"
            name="closing_date"
            id="closing_date"
            label="Closing date*"
            onChange={handleChange}
            required
          />

          <TextInput
            type="number"
            name="attendee_target"
            id="attendee_target"
            label="Attendee target*"
            onChange={handleChange}
            required
          />
          <TextInput
            type="number"
            name="mentor_target"
            id="mentor_target"
            label="Mentor target*"
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
              {formState === "pending" ? <LoadingSpinner /> : "Create"}
            </Button>
          </div>
          <div className="text-greyscale-600 underline">
              Don't see your category? Send us your suggestion!{" "}
          </div>
            <Link
              className="font-semibold text-secondary text-lg underline"
              to="/contactus"
            >
              Contact Us
            </Link>
          
        </form>
      )}
    </div>
  );
}

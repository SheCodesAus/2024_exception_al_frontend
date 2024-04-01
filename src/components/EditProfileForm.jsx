import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import Button from "./Button";
import postSignUp from "../api/post-signup";
import SuccessfulCard from "./SuccessfulCard";
import useToast from "../hooks/use-toast";
import Toast from "./Toast";
import { useAuthContext } from "../hooks/use-auth-context";
import CameraIcon from '../assets/icons/camera.png';


export default function EditProfileForm() {
  const [formState, setFormState] = useState("");
  const [profileDetails, setProfileDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    interests: [],
    skills: [],
  });
  const [error, setError] = useState({
    field: "",
    errorMessage: "",
  });
  const {auth} = useAuthContext();
  const {showToast, isVisible} = useToast();
  const handleShowToast = () => {
    showToast();
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleCheckboxChange = (selectedItems, name) => {
    setProfileDetails((prev) => ({
      ...prev,
      [name]: selectedItems,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (profileDetails) {
      if (profileDetails.password !== profileDetails.passwordConfirm) {
        setError({ field: "password", errorMessage: "Password do not match." });
        window.scrollTo({
          top: 400,
          behavior: "smooth",
        });
      } else if (profileDetails.interests.length == 0) {
        setError({
          field: "interests",
          errorMessage: "Please select one or more interests.",
        });
        window.scrollTo({
          top: 300,
          behavior: "smooth",
        });
      } else if (profileDetails.skills.length == 0) {
        setError({
          field: "skills",
          errorMessage: "Please select one or more skills.",
        });
      } else {
        setFormState("pending");
        postUpdateProfile(profileDetails)
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
      <Toast message="Successfully updated!" isVisible={isVisible}/>
      ) : formState === "error" ? (
        // Todo: handle exceptions
        <p>Error while submitting the sign up form</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12"
        >
          <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
            Edit profile
          </h1>
          <div className="rounded-full relative w-36 h-36 m-auto bg-greyscale-300 my-8">
          {
            auth.user?.user_image 
            ? <img src={auth.user.user_image}/>
            : <></>
          }
            <img src={CameraIcon} className="absolute bottom-3 right-0 w-5"/>
          </div>
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <TextInput
              type="text"
              name="firstName"
              id="firstName"
              size="sm"
              label="First name*"
              onChange={handleChange}
              required
            />
            <TextInput
              type="text"
              name="lastName"
              id="lastName"
              size="sm"
              label="Last name*"
              onChange={handleChange}
              required
            />
          </div>
          <TextInput
            type="text"
            name="username"
            id="username"
            label="Username*"
            value={auth.user.username}
            classNames="bg-greyscale-300"
            disabled
          />
          <TextInput
            type="email"
            name="email"
            id="email"
            label="Email*"
            value={auth.user.email}
            classNames="bg-greyscale-300"
            disabled
          />

          <TextInput
            type="password"
            name="password"
            id="password"
            label="Password*"
            onChange={handleChange}
            required
          />
          <TextInput
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            label="Password confirm*"
            onChange={handleChange}
            classNames={
              error && error.field === "password"
                ? "border-2 border-warning"
                : ""
            }
            required
          />
          {error && error.field === "password" ? (
            <span className="text-warning text-sm mb-4 block">
              {error.errorMessage}
            </span>
          ) : (
            <></>
          )}
          <div className="mb-4">
            <span
              className={`block text-sm font-medium mb-2 ${
                error && error.field === "interests" ? "text-warning" : ""
              }`}
            >
              My interests (Select one or more options)*
            </span>
            <MultiSelectCheckbox
              name="interests"
              id="interests"
              values={auth.user.interests}
              onChange={(selectedItems) =>
                handleCheckboxChange(selectedItems, "interests")
              }
            />
          </div>
          <div className="mb-4">
            <span
              className={`block text-sm font-medium mb-2 ${
                error && error.field === "skills" ? "text-warning" : ""
              }`}
            >
              My skills (Select one or more options)*
            </span>
            <MultiSelectCheckbox
              name="skills"
              id="skills"
              values={auth.user.skills}
              onChange={(selectedItems) =>
                handleCheckboxChange(selectedItems, "skills")
              }
            />
          </div>
          <div className="my-8 text-center">
            <Button
              variant="action"
              buttonStyle="solid"
              type="submit"
              size="md"
            >
              Register
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

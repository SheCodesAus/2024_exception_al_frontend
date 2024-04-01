import { useState } from "react";
import TextInput from "./TextInput";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import Button from "./Button";
import useToast from "../hooks/use-toast";
import Toast from "./Toast";
import { useAuthContext } from "../hooks/use-auth-context";
import CameraIcon from "../assets/icons/camera.png";
import updateUser from "../api/update-user";

export default function EditProfileForm() {
  const { auth } = useAuthContext();
  const [formState, setFormState] = useState("");
  const [image, setImage] = useState(null);
  const [profileDetails, setProfileDetails] = useState({
    firstName: auth.user.first_name,
    lastName: auth.user.last_name,
    password: "",
    profile_image: null,
    interests: auth.user.interests.split("|"),
    skills: auth.user.skills.split("|"),
  });
  const [error, setError] = useState({
    field: "",
    errorMessage: "",
  });
  const { showToast, isVisible } = useToast();
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
  const handleImageChange = (e) => {
    setProfileDetails((prev) => ({
      ...prev,
      profile_image: e.target.files[0],
    }));
    setImage(URL.createObjectURL(e.target.files[0]));
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
        updateUser(auth.user.id, profileDetails)
          .then((res) => {
            setFormState("successful");
            showToast();
          })
          .catch((err) => {
            console.error(err);
            setFormState("error");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            showToast();
          });
      }
    }
  };
  return (
    <div className="form-container pt-6">
      <form
        onSubmit={handleSubmit}
        className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12"
      >
        <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
          Edit profile
        </h1>
        <label
          htmlFor="image"
          className="block rounded-full relative w-32 h-32 m-auto bg-greyscale-300 my-8 cursor-pointer"
        >
          {auth.user?.user_image ? (
            <img
              src={auth.user.user_image}
              className="object-cover  w-32 h-32 rounded-full"
            />
          ) : image ? (
            <img src={image} className="object-cover w-32 h-32 rounded-full" />
          ) : (
            <></>
          )}
          <div className="absolute bottom-3 right-0 w-6 z-1 bg-white rounded-full p-1">
            <img
              src={CameraIcon}
              className="w-full object-contain"
            />
          </div>
          <input
            id="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            className="sr-only"
          />
        </label>
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <TextInput
            type="text"
            name="firstName"
            id="firstName"
            size="sm"
            label="First name*"
            onChange={handleChange}
            value={auth.user.first_name}
            required
          />
          <TextInput
            type="text"
            name="lastName"
            id="lastName"
            size="sm"
            label="Last name*"
            onChange={handleChange}
            value={auth.user.last_name}
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
            error && error.field === "password" ? "border-2 border-warning" : ""
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
          <Button variant="action" buttonStyle="solid" type="submit" size="md">
            Register
          </Button>
        </div>
      </form>
      {formState === "successful" ? (
        <Toast
          message="Successfully updated!"
          type="success"
          isVisible={isVisible}
        />
      ) : (
        formState === "error" && (
          // Todo: handle exceptions
          <Toast
            message="There was an error while updating your profile."
            type="error"
            isVisible={isVisible}
          />
        )
      )}
    </div>
  );
}

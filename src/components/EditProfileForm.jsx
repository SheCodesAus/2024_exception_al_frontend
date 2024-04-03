import { useState } from "react";
import TextInput from "./TextInput";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import Button from "./Button";
import useToast from "../hooks/use-toast";
import Toast from "./Toast";
import { useAuthContext } from "../hooks/use-auth-context";
import CameraIcon from "../assets/icons/camera.svg";
import updateUser from "../api/update-user";

export default function EditProfileForm() {
  const { auth, setAuth } = useAuthContext();
  const [formState, setFormState] = useState("");
  const [image, setImage] = useState(null);
  const [profileDetails, setProfileDetails] = useState({
    first_name: auth.user.first_name,
    last_name: auth.user.last_name,
    password: "",
    profile_image: null,
    interests: auth.user?.interests.split("|"),
    skills: auth.user?.skills.split("|")
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
      if (profileDetails.password !== "" && profileDetails.password !== profileDetails.passwordConfirm) {
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
        const formData = new FormData();
        formData.append("first_name", profileDetails.first_name);
        formData.append("last_name", profileDetails.last_name);
        formData.append("interests", profileDetails.interests.join("|"));
        formData.append("skills", profileDetails.skills.join("|"));
        if (profileDetails.profile_image) {
          formData.append("profile_image", profileDetails.profile_image);
        }
        if (profileDetails.password !== ""){
          formData.append("password", profileDetails.first_name)
        }
        updateUser(auth.user.id, formData)
          .then((res) => {
            setAuth(prev => ({...prev, user:res}));
            setFormState("successful");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
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
          htmlFor="profile_image"
          className="block rounded-full relative w-32 h-32 m-auto bg-greyscale-300 my-8 cursor-pointer"
        >
          {auth.user?.profile_image && (
            <img
              src={auth.user.profile_image}
              className="object-cover  w-32 h-32 rounded-full"
              alt={"image of " + auth.user.first_name}
            />)}
          {image && (
            <img src={image} className="object-cover w-32 h-32 rounded-full absolute top-0 z-2" alt="selected profile image"/>
          )}
          <div className="absolute bottom-3 right-0 w-6 z-1 bg-white rounded-full p-1">
            <img
              src={CameraIcon}
              className="w-full object-contain"
              aria-hidden="true"
            />
          </div>
          <label htmlFor="profile_image" className="sr-only"></label>
          <input
            id="profile_image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            className="sr-only"
          />
        </label>
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <TextInput
            type="text"
            name="first_name"
            id="first_name"
            width="sm"
            label="First name*"
            onChange={handleChange}
            defaultValue={profileDetails.first_name}
            required
          />
          <TextInput
            type="text"
            name="last_name"
            id="last_name"
            width="sm"
            label="Last name*"
            onChange={handleChange}
            defaultValue={profileDetails.last_name}
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
          <Button buttonType="action" buttonStyle="secondary" type="submit" size="md" aria-label="save profile button">
            Save
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

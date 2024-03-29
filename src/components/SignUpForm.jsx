import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import Button from "./Button";
import postSignUp from "../api/post-signup";
import SuccessfulCard from "./SuccessfulCard";

const emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";

export default function SignUpForm() {
  const [formState, setFormState] = useState("");
  const [credentials, setCredentials] = useState({
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
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleCheckboxChange = (selectedItems, name) => {
    setCredentials((prev) => ({
      ...prev,
      [name]: selectedItems,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials) {
      if (!credentials.email.match(emailPattern)) {
        setError({
          field: "email",
          errorMessage: "Please enter a valid email address.",
        });
        window.scrollTo({
          top: 200,
          behavior: "smooth",
        });
      } else if (credentials.password !== credentials.passwordConfirm) {
        setError({ field: "password", errorMessage: "Password do not match." });
        window.scrollTo({
          top: 400,
          behavior: "smooth",
        });
      } else if (credentials.interests.length == 0) {
        setError({ field: "interests", errorMessage: "Please select one or more interests." });
        window.scrollTo({
          top: 300,
          behavior: "smooth",
        });
      } else if (credentials.skills.length == 0) {
        setError({ field: "skills", errorMessage: "Please select one or more skills." });
      } else {
        setFormState("pending");
        postSignUp(credentials)
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
    <div className="form-container">
      {formState === "pending" ? (
        <p>Submitting ...</p>
      ) : formState === "successful" ? (
        <SuccessfulCard />
      ) : formState === "error" ? (
        // Todo: handle exceptions
        <p>Error while submitting the sign up form</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12"
        >
          <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
            Register today!
          </h1>
          <div className="mb-5 text-center sm:mb-8">
            <span className="text-greyscale-600 underline">
              Already have an account?{" "}
            </span>
            <Link
              className="font-semibold text-secondary text-lg underline"
              to="/login"
            >
              Log in
            </Link>
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
            onChange={handleChange}
            required
          />
          <TextInput
            type="email"
            name="email"
            id="email"
            label="Email*"
            onChange={handleChange}
            classNames={
              error && error.field === "email" ? "border-2 border-warning" : ""
            }
            required
          />
          {error && error.field === "email" ? (
            <span className="font-warning">{error.errorMessage}</span>
          ) : (
            <></>
          )}
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
            <span className={`block text-sm font-medium mb-2 ${error && error.field === "interests" ? "text-warning" : ""}`}>
              My interests (Select one or more options)*
            </span>
            <MultiSelectCheckbox
              name="interests"
              id="interests"
              onChange={(selectedItems) =>
                handleCheckboxChange(selectedItems, "interests")
              }
            />
          </div>
          <div className="mb-4">
          <span className={`block text-sm font-medium mb-2 ${error && error.field === "skills" ? "text-warning" : ""}`}>
              My skills (Select one or more options)*
            </span>
            <MultiSelectCheckbox
              name="skills"
              id="skills"
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

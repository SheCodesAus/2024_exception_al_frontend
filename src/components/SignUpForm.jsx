import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import Button from "./Button";
//import postSignUp from "../api/post-signup";

export default function SignUpForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    interests: [],
    skills: []
  });
  const handleInterestsChange = (selectedInterests) => {
    setCredentials((prev) => ({
      ...prev,
      interests: selectedInterests,
    }));
  };
  const [error, setError] = useState({
    field: "",
    errorMessage: "",
  });
  const [formState, setFormState] = useState("");
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials) {
      if (credentials.password !== credentials.passwordConfirm) {
        setError({ field: "password", errorMessage: "Password do not match" });
      } else {
        setFormState("pending");
        // postSignUp(credentials)
        // .then((res) => {
        //   setFormState("successful");
        // })
        // .catch((err) => {
        //   console.error(err);
        //   setFormState("error");
        // });
      }
    }
  };
  return (
    <div className="form-container">
      {formState === "pending" ? (
        <p>Submitting ...</p>
      ) : formState === "successful" ? (
        <div>
          <p>Sign up was successful!</p>
          <Link to="/login">Login</Link>
        </div>
      ) : formState === "error" ? (
        <p>Error while submitting the sign up form</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12"
        >
          <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
            Register today!
          </h1>
          <div className="mb-5 sm:text-center sm:mb-8">
            <span className="text-greyscale-600 underline">
              Already have an account?{" "}
            </span>
            <Link className="font-semibold text-black underline" to="/login">
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
            />
            <TextInput
              type="text"
              name="lastName"
              id="lastName"
              size="sm"
              label="Last name*"
              onChange={handleChange}
            />
          </div>
          <TextInput
            type="text"
            name="username"
            id="username"
            label="Username"
            onChange={handleChange}
          />
          <TextInput
            type="email"
            name="email"
            id="email"
            label="Email*"
            onChange={handleChange}
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
          />
          {error && error.field === "password" ? (
            <span className="error-text">{error.errorMessage}</span>
          ) : (
            <></>
          )}
          <div className="mb-4">
            <span className="block text-sm font-medium mb-2">
              My interests (Select one or more options)*
            </span>
            <MultiSelectCheckbox
              name="interests"
              id="interests"
              onChange={handleInterestsChange}
            />
          </div>
          <div className="mb-4">
            <span className="block text-sm font-medium mb-2">
              My skills (Select one or more options)*
            </span>
            <MultiSelectCheckbox
              name="skills"
              id="skills"
              onChange={handleInterestsChange}
            />
          </div>
          <div className="my-8 text-center">
            <Button variant="action" type="submit" size="sm">
              Sign up
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

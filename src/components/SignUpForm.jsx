import { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import Button from "./Button";
import postSignUp from "../api/post-signup";
import SuccessfulCard from "./SuccessfulCard";
import LoadingSpinner from "./LoadingSpinner";
import checkUsername from "../api/get-username-check";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function SignUpForm() {
  const [formState, setFormState] = useState("");
  const [usernameCheck, setUsernameCheck] = useState(false);
  const [usernameIsUnique, setUsernameIsUnique] = useState(false);
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
  const handleUsernameCheck = (e) => {
    e.preventDefault();
    checkUsername(credentials.username).then((res) => {
      setUsernameCheck(true);
      setUsernameIsUnique(!res);
    });
  };
  const isPasswordValid = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return pattern.test(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameCheck) {
      setError({
        field: "usernameCheck",
        errorMessage: "Please check username",
      });
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    }
    if (credentials && usernameIsUnique) {
      if (!credentials.email || !emailPattern.test(credentials.email)) {
        setError({
          field: "email",
          errorMessage: "Please enter a valid email address.",
        });
        window.scrollTo({
          top: 200,
          behavior: "smooth",
        });
      } else if (!isPasswordValid(credentials.password)) {
        setError({
          field: "passwordCheck",
          errorMessage:
            "Please ensure your password includes at least 8 characters, with at least one uppercase letter, one lowercase letter, and one number.",
        });
        window.scrollTo({
          top: 400,
          behavior: "smooth",
        });
      } else if (credentials.password !== credentials.passwordConfirm) {
        setError({ field: "password", errorMessage: "Password do not match" });
        window.scrollTo({
          top: 400,
          behavior: "smooth",
        });
      } else if (credentials.interests.length == 0) {
        setError({
          field: "interests",
          errorMessage: "Please select one or more interests.",
        });
        window.scrollTo({
          top: 300,
          behavior: "smooth",
        });
      } else if (credentials.skills.length == 0) {
        setError({
          field: "skills",
          errorMessage: "Please select one or more skills.",
        });
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
    <div className="form-container pt-6">
      {formState === "successful" ? (
        <SuccessfulCard>
          <p className="text-lg">Sign up was successful!</p>
          <Button
            buttonType="link"
            href="/login"
            size="md"
            buttonStyle="secondary"
          >
            Login
          </Button>
        </SuccessfulCard>
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
              width="sm"
              label="First name*"
              onChange={handleChange}
              required
            />
            <TextInput
              type="text"
              name="lastName"
              id="lastName"
              width="sm"
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
          >
            <Button
              size="sm"
              buttonStyle="plain"
              buttonType="action"
              classes="absolute right-2 top-1/2 text-greyscale-600 hover:text-secondary "
              onClick={handleUsernameCheck}
            >
              Check username
            </Button>
          </TextInput>
          {error && error.field === "username" && (
            <span className="text-warning pb-2 block">
              {error.errorMessage}
            </span>
          )}
          {error &&
            error.field === "usernameCheck" &&
            usernameCheck &&
            !usernameIsUnique && (
              <span className="text-warning pb-2 block">
                Sorry, your username has been taken!
              </span>
            )}
          {usernameIsUnique &&
            (!usernameCheck || error.field !== "usernameCheck") && (
              <span className="text-primary-dark pb-2 block font-semibold">
                Great news! Your username is available
              </span>
            )}
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
            <span className="text-warning pb-2 block">
              {error.errorMessage}
            </span>
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
          {error && error.field === "passwordCheck" ? (
            <span className="text-warning text-sm mb-4 block">
              {error.errorMessage}
            </span>
          ) : (
            <></>
          )}
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
              onChange={(selectedItems) =>
                handleCheckboxChange(selectedItems, "skills")
              }
            />
          </div>
          <div className="my-8 text-center">
            <Button
              buttonType="action"
              buttonStyle="secondary"
              type="submit"
              size="md"
            >
              {formState === "pending" ? <LoadingSpinner /> : "Register"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

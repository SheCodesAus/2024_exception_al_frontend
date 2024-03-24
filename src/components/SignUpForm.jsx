import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
//import postSignUp from "../api/post-signup";

export default function SignUpForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
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
        <form onSubmit={handleSubmit} className="form auth-form">
          <h2>Register today!</h2>
          <div>
              Already have an account?{" "}
              <Link className="link" to="/login">
                Log in
              </Link>
            </div>
          <div className="name-wrapper">
          <TextInput type="text" name="firstName" id="firstName" size="sm" label="First name*" onChange={handleChange}/>
          <TextInput type="text" name="lastName" id="lastName" size="sm" label="Last name*" onChange={handleChange}/>
          <Dropdown type="text" name="interest" id="interest" size="sm" label="My interests (Select one or more options)" multiple={true} onChange={handleChange}>
            <option value="outdoor">Outdoor</option>
            <option value="outdoor-2">Outdoor</option>
            <option value="outdoor-3">Outdoor</option>
            <option value="outdoor">Outdoor</option>
          </Dropdown>

            <div className="form-field half-width">
              <label htmlFor="lastName">Last name: </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address: </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="passwordConfirm">Password confirm: </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={handleChange}
            />
            {error && error.field === "password" ? (
              <span className="error-text">{error.errorMessage}</span>
            ) : (
              <></>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="link-wrapper">


            <button type="submit" className="button--submit">
              Sign up
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";
import getUser from "../api/get-user";
import postLogin from "../api/post-login";
import TextInput from "./TextInput";
import Button from "./Button";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postLogin(credentials.username, credentials.password)
        .then((res) => {
          window.localStorage.setItem("token", res.token);
          setAuth(prev => ({...prev, token: res.token}))
          return getUser(res.user_id);
        })
        .then((userDetails) => {
          setAuth(prev => ({...prev, user: userDetails}))
          navigate("/");
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12 pt-6"
    >
      <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
        Login
      </h1>
      <div className="mb-5 text-center sm:mb-8">
        <span className="text-greyscale-600 underline">
          Don't have an account yet?{" "}
        </span>
        <Link className="font-semibold text-secondary text-lg underline" to="/signup">
          Sign up
        </Link>
      </div>
      <TextInput
        type="text"
        name="username"
        id="username"
        label="username*"
        onChange={handleChange}
      />
      <TextInput
        type="password"
        name="password"
        id="password"
        label="Password*"
        onChange={handleChange}
      />
      {
        errorMessage ? <span className="text-warning text-sm">{errorMessage}</span> : <></>
      }
      <div className="my-8 text-center">
        <Button variant="action" buttonStyle="solid" type="submit" size="md" onClick={() => {}}>
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;

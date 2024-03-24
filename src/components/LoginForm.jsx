import { useState } from "react";
// import postLogin from "../api/post-login";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import Button from "./Button";

// import getUser from "../api/get-user";
// import { useUserContext } from "../hooks/use-user-context";
function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  // const { setUser } = useUserContext();
  //const navigate = useNavigate();
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
      // postLogin(credentials.username, credentials.password)
      //   .then((res) => {
      //     window.localStorage.setItem("token", res.token);
      //     return getUser(res.user_id);
      //   })
      //   .then((userDetails) => {
      //     window.localStorage.setItem("user", JSON.stringify(userDetails));
      //     setUser(userDetails);
      //     navigate("/");
      //   })
      //   .catch((err) => console.error(err));
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12"
    >
      <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
        Login
      </h1>
      <div className="mb-5 sm:text-center sm:mb-8">
        <span className="text-greyscale-600 underline">
          Don't have an account yet?{" "}
        </span>
        <Link className="font-semibold text-black underline" to="/login">
          Sign up
        </Link>
      </div>
      <TextInput
        type="text"
        name="firstName"
        id="firstName"
        label="First name*"
        onChange={handleChange}
      />
      <TextInput
        type="password"
        name="password"
        id="password"
        label="Password*"
        onChange={handleChange}
      />
      <div className="my-8 text-center">
        <Button variant="action" type="submit" size="sm">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import Button from "./Button";
import postSignUp from "../api/post-signup";
import SuccessfulCard from "./SuccessfulCard";
import LoadingSpinner from "./LoadingSpinner";

const emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";


export default function ContactUsForm() {
  const [formState, setFormState] = useState("");
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    subject: "",
   
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

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
        
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
          // onSubmit={handleSubmit}
          className="m-auto w-full px-4 sm:max-w-[500px] sm:px-12"
          action="https://formspree.io/f/xbjvqzol" method="POST"
          
        >
          
          <h1 className="text-3xl font-semibold mb-3 sm:text-4xl text-center">
            Contact Us
          </h1>
          
          
          <TextInput
            type="text"
            name="name"
            id="name"
            label="Name*"
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
            type="text"
            name="subject"
            id="subject"
            label="Subject*"
            TextInputsize="md"
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
              
              {formState === "pending" ? <LoadingSpinner/> : "Submit"}              
            </Button>            
          </div>
          

          
        </form>
        
      )}
    </div>
    
  );
 
}



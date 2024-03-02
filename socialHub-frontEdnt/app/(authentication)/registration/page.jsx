"use client";
import { useContext, useState } from "react";
import "./registration.css";
import Link from "next/link";
import { AuthContext } from "@/app/Provider/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmitRegistrationForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Your password not match try again");
    }
    if (password.length < 8) {
      setError("Password must contain 8 characters");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contains an uppercase");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contains a lowercase");
      return;
    } else if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?])/.test(password)) {
      setError("Password must has at least one special character");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setError("Password must at least one number");
      return;
    }
    e.target.reset("");
    const newUser = { firstName, lastName, email, password };

    fetch("http://localhost:5000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="registration-container">
        <h2>Create an account</h2>
        <form
          onSubmit={handleSubmitRegistrationForm}
          className="registration-form"
          id="registrationForm"
        >
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <p className="text-center text-red-700 font-bold">{error}</p>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
        <p className="text-center">
          Have an Account? <Link href="/login">Login Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;

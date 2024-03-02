"use client";
import Link from "next/link";
import "./login.css";
import { useContext } from "react";
import { AuthContext } from "@/app/Provider/AuthProvider";
import Image from "next/image";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const formData = { email, password };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full h-full mt-28 flex items-center justify-center">
      <div>
        <Image
          src="/facebook-imag.svg"
          alt="facebook-logo"
          width={600}
          height={600}
        />
        <h2>
          SocialHub helps you connect and share with the people in your life.
        </h2>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLoginForm} className="login-form" id="loginForm">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button className="btn" type="submit" onclick="submitLoginForm()">
              Login
            </button>
          </div>
        </form>
        <p>
          Don`t have an Account? <Link href="/registration">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

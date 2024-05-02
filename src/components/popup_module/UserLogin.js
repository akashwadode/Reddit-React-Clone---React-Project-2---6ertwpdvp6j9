// TODO: make multiple page sign up - username suggestion

import React, { useEffect, useRef, useState } from "react";
import "./../../styles/user_login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import login_service from "../../services/login_service";
import nameValidator from "../../utils/name_validator";
import signup_service from "../../services/signup_service";
import name_validator from "../../utils/name_validator";
import { useAuth } from "../../context/AuthProvider";

const UserLogin = () => {
  // context
  const { closeLoginContainer } = useAuth();
  const { login } = useAuth();
  
  // toggles
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // ref
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userPassRef = useRef();
  const submitErrorRef = useRef();

  // data
  const [receivedData, setReceivedData] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [userNameError, setUserNameError] = useState(null);

  const handleSubmit = async (type, e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);
    const email = userEmailRef.current.value;
    const password = userPassRef.current.value;
    if (type === "signup") {
      setUserNameError(null);
      const name = userNameRef.current.value;
      console.log(name);
      const isValidate = name_validator(name);
      if (!isValidate) {
        console.log("not validate");
        submitErrorRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setUserNameError("Invalid username");
      } else {
        try {
          const response = await signup_service(name, email, password);
          setSubmitError(null);
          login(response);
          console.log("Sign up Successful", response);
        } catch (error) {
          console.log("Sign up failed", error);
          setSubmitError("Invalid email or Password");
        }
      }
    } else {
      try {
        const response = await login_service(email, password);
        setSubmitError(null);
        login(response);
        console.log("Login Succesful", response);
      } catch (error) {
        console.log("Login failed", error);
        setSubmitError("Invalid email or Password");
      }
    }
    setIsLoading(false);
  };
  const LoginPage = () => {
    return (
      <form
        onSubmit={(e) => {
          handleSubmit("login", e);
        }}
      >
        <div>
          <h2>Log In</h2>
          <p>
            By continuing, you agree to our{" "}
            <a
              href="https://www.redditinc.com/policies/user-agreement"
              target="_blank"
              className="link"
            >
              User Agreement
            </a>{" "}
            and acknowledge that you understand the{" "}
            <a
              className="link"
              href="https://www.reddit.com/policies/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div>
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              ref={userEmailRef}
            />
            <p></p>
          </div>
          <div>
            <input
              type="password"
              required
              placeholder="Password"
              ref={userPassRef}
            />
            <p></p>
          </div>
        </div>
        <div>
          <p>
            New to Reddit?{" "}
            <span
              className="link"
              onClick={() => {
                setIsLoginPage(false);
              }}
            >
              Sign Up
            </span>
          </p>
          <button type="submit" disabled={isLoading}>
            {!isLoading ? (
              <>Log In</>
            ) : (
              <>
                <FontAwesomeIcon icon={faSpinner} spin={true} />
              </>
            )}
          </button>
          {submitError && <p className="warning">{submitError}</p>}
        </div>
      </form>
    );
  };
  const SignUpPage = () => {
    return (
      <form
        onSubmit={(e) => {
          handleSubmit("signup", e);
        }}
      >
        <div>
          <h2>Sign Up</h2>
          <p>
            By continuing, you agree to our{" "}
            <a
              href="https://www.redditinc.com/policies/user-agreement"
              target="_blank"
              className="link"
            >
              User Agreement{" "}
            </a>
            and acknowledge that you understand the{" "}
            <a
              className="link"
              href="https://www.reddit.com/policies/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div>
          <div>
            <input
              type="text"
              required
              placeholder="Username"
              ref={userNameRef}
              onFocus={() => {
                setUserNameError(null);
              }}
            />
            {userNameError && <p className="warning">{userNameError}</p>}
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              ref={userEmailRef}
            />
            <p></p>
          </div>
          <div>
            <input
              type="password"
              required
              placeholder="Password"
              ref={userPassRef}
            />
            <p></p>
          </div>
        </div>
        <div>
          <p>
            Already a redditor?{" "}
            <span
              className="link"
              onClick={() => {
                setIsLoginPage(true);
              }}
            >
              Log In
            </span>
          </p>
          <button type="submit" disabled={isLoading}>
            {!isLoading ? (
              <>Sign Up</>
            ) : (
              <>
                <FontAwesomeIcon icon={faSpinner} spin={true} />
              </>
            )}
          </button>
          {submitError && (
            <p className="warning" ref={submitErrorRef}>
              {submitError}
            </p>
          )}
        </div>
      </form>
    );
  };
  return (
    <div className="user-login">
      <div className="topbar">
        <span
          className="btn"
          onClick={() => {
            closeLoginContainer();
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
      {isLoginPage ? <LoginPage /> : <SignUpPage />}
    </div>
  );
};

export default UserLogin;

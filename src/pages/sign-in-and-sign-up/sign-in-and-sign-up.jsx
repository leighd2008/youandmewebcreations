import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-in-and-sign-up.scss";

const SignInAndSignUpPage = () => (
  <div>
    <h2>Sign In</h2>
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;

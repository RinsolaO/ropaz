import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import Signup from "../../components/sign-up/Signup";
import "./SignInSignUpPage.scss";

const SignInSignUpPage = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<Signup />
		</div>
	);
};

export default SignInSignUpPage;

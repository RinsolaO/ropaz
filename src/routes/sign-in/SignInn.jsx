import React, { useState } from "react";
import Signup from "../../components/sign-up/Signup";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignInn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userRefDoc = await createUserDocumentFromAuth(user);
		console.log(userRefDoc);
	};

	return (
		<div>
			<button onClick={logGoogleUser}>Sign In</button>

			<Signup />
		</div>
	);
};

export default SignInn;

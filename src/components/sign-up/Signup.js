import React, { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./Signup.scss";

const Signup = () => {
	const defaultFormFields = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		if (password !== confirmPassword) {
			alert(`passwords don't match`);
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormField();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Email Already Exists");
			} else {
				console.log("user creation encountered an error ", error);
			}
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't Have An Account?</h2>
			<span> Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label={"Display Name"}
					type="text"
					id=""
					required
					name="displayName"
					onChange={handleChange}
					value={displayName}
				/>
				<FormInput
					label={"Email"}
					type="email"
					id=""
					required
					name="email"
					onChange={handleChange}
					value={email}
				/>
				<FormInput
					label={" Password"}
					type="password"
					id=""
					required
					name="password"
					onChange={handleChange}
					value={password}
				/>
				<FormInput
					label={"Confirm Password"}
					type="password"
					id=""
					required
					name="confirmPassword"
					onChange={handleChange}
					value={confirmPassword}
				/>
				<button type="submit"></button>
				<Button children={"Sign up"} buttonType="" />
			</form>
		</div>
	);
};

export default Signup;

import React, { Component } from "react";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await signInAuthUserWithEmailAndPassword(
				this.state.email,
				this.state.password
			);
			console.log(res);

			this.setState({ email: "", password: "" });
		} catch (error) {
			if (error.code === "auth/user-not-found") {
				alert("User Not Found");
			} else if (error.code === "auth/wrong-password") {
				alert("Wrong Password");
			} else {
				console.log("user creation encountered an error ", error);
			}
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		const userRefDoc = await createUserDocumentFromAuth(user);
		console.log(userRefDoc);
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className="sign-in">
				<h2> I already have an account</h2>
				<span> Sign in with your email and password </span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						value={email}
						name="email"
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						value={password}
						name="password"
						handleChange={this.handleChange}
						label="Password"
						required
					/>

					<div className="buttons">
						<Button type="submit"> Sign In </Button>
						<Button
							type="button"
							onClick={this.signInWithGoogle}
							buttonType="google"
						>
							{" "}
							Sign In With Google{" "}
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;

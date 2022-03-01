import React, { Component } from "react";
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import CustomButton from "../button/CustomButton";
import FormInput from "../form-input/FormInput";

import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      displayName: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, confirmPassword, email, password } = this.state;

    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        email: "",
        displayName: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, confirmPassword, email, password } = this.state;

    return (
      <div className="sign-in">
        <h2> I do not have an account</h2>
        <span> Sign up with your email and password </span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
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
          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign Up </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;

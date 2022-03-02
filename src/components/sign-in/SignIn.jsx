import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../button/CustomButton";
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
    const { email, password } = this.state;

    await auth.signInWithEmailAndPassword(email, password);

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
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
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In With Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

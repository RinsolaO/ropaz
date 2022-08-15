import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignInn.jsx";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/SignInSignUpPage";

class App extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Routes>
					<Route path="/" element={<Navigation />}>
						<Route index element={<Homepage />} />
						<Route path="/shop" element={<Shop />} />
						<Route path="/sign-in" element={<SignInSignUpPage />} />
					</Route>
				</Routes>
			</div>
		);
	}
}

export default App;
// <Header currentUser={this.state.currentUser} />

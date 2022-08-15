import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/SignInSignUpPage";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const Shop = () => {
			return <div>SHOP</div>;
		};
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route exact path="/home" element={<Homepage />}>
						<Route exact path="shop" element={<Shop />} />
					</Route>

					<Route exact path="/shop" element={<Shop />} />

					<Route exact path="/signin" element={<SignInSignUpPage />} />
				</Routes>
			</div>
		);
	}
}

export default App;

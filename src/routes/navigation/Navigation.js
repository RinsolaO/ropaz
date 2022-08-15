import React, { Fragment } from "react";
import "./Navigation.scss";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
	return (
		<Fragment>
			<div className="header">
				<Link to="/" className="logo-container">
					<Logo className="logo" />
				</Link>

				<div className="options">
					<Link to="/shop" className="option">
						SHOP
					</Link>
					<Link to="/sign-in" className="option">
						SIGN IN
					</Link>
				</div>
			</div>

			<Outlet />
		</Fragment>
	);
};

export default Navigation;

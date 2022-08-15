import React from "react";
import "./MenuItem.scss";
// import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div
			className={`menu-item ${size}`}
			onClick={() => history.push(`${match.url}${linkUrl}}`)}
		>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
				className="background-image"
			></div>
			<div className="content">
				<div className="title">{title.toUpperCase()}</div>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;

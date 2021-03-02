import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
	return (
		<div>
			<Link to="sign-up">
				<button className="btn">Sign Up</button>
			</Link>
			<Link to="our-story">
				<button className="btn2">About Us</button>
			</Link>
		</div>
	);
}

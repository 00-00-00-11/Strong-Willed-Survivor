import React from "react";
import { Link } from "react-router-dom";

export default function NF_404() {
	return (
		<div className="not_found-err">
			<h1>PAGE NOT FOUND!</h1>

			<p>
				<Link className="basic-link" to="/">
					Return to home
				</Link>{" "}
			</p>
		</div>
	);
}

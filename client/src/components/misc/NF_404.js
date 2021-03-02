import React from "react";
import { Link } from "react-router-dom";

export default function NF_404() {
	return (
		<div className="not_found-err">
			<div>
				{/* <h1>Sorry were could not find this URL</h1>
				<h3>Please go back to the home page.</h3> */}
			</div>
			<script>
				setTimeout(function()
				{(window.location.href = "/")}, 15000);
			</script>
		</div>
	);
}

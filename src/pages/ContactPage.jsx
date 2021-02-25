import React from "react";
import ReactPlayer from "react-player/youtube";
import "../styles/index.css";

function ContactPage() {
	return (
		<div>
			<h1>Contact page</h1>
			<div className="m-4 bg-white rounded overflow-hidden shadow-md">
				<ReactPlayer url="https://www.youtube.com/watch?v=y9j-BL5ocW8" />
			</div>
		</div>
	);
}

export default ContactPage;

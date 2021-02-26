import React from "react";
import ReactPlayer from "react-player/youtube";
import "../styles/index.css";
import "../styles/video.css";

function ContactPage() {
	return (
		<div>
			<h1>Contact page</h1>
			<div className="player-wrapper">
				<div className="m-4 bg-white rounded overflow-hidden shadow-md">
					<ReactPlayer
						className="react-player"
						url="https://www.youtube.com/watch?v=y9j-BL5ocW8"
					/>
				</div>
			</div>
		</div>
	);
}

export default ContactPage;

import React from "react";
import "../../App.css";
import { Button } from "../NavBar/Button";
import "./HeroSection.css";
import Video from "../../videos/video-2.mp4";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src={Video} type="video/mp4" autoPlay loop muted />
			<h1>Helping thoughs in need!</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
				>
					WATCH TRAILER <i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;

import React from "react";
import "../../App.css";
import Hero from "../HeroSection";
import Footer from "../Footer";
// import Cards from "../Cards";

export default function Home() {
	return (
		<>
			<div>
				<Hero />
				{/* <Cards /> */}
				<Footer />
			</div>
		</>
	);
}

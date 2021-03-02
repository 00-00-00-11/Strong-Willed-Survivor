import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import OurStory from "./components/pages/OurStory";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Blog from "./components/pages/Blog";
import Consulting from "./components/pages/Consulting";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/our-story" component={OurStory} />
				<Route path="/contact-us" component={ContactUs} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/Blog" component={Blog} />
				<Route path="/consulting" component={Consulting} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/b-nav/Footer";
import Home from "./components/pages/Home";
// import Thanos from "./components/pages/thanos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import OurStory from "./components/pages/OurStory";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Blog from "./components/pages/Blog";
import Consulting from "./components/pages/Consulting";
import NF_404 from "./components/misc/NF_404";

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
				{/* <Route path="/thanos" component={Thanos} /> */}
				<Route path="/consulting" component={Consulting} />
				<Route exact path="*" component={NF_404} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

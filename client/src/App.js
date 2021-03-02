import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/b-nav/Footer";
import Home from "./pages/Home";
// import Thanos from "./components/pages/thanos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Services";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import Consulting from "./pages/Consulting";
import NF_404 from "./components/misc/NF_404";
import Kidz from "./pages/Kidz";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route exact path="/services" component={Services} />
				<Route exact path="/our-story" component={OurStory} />
				<Route exact path="/contact-us" component={ContactUs} />
				<Route exact path="/sign-up" component={SignUp} />
				<Route exact path="/Blog" component={Blog} />
				{/* <Route path="/thanos" component={Thanos} /> */}
				<Route exact path="/consulting" component={Consulting} />
				<Route exact path="/kidz" component={Kidz} />
				<Route path="*" component={NF_404} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

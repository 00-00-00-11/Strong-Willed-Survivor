//? styles
import "../styles/App.css";
//! pages
import Home from "../components/pages/Home";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/pages/Services";
import Products from "../components/pages/Products";
import ContactUs from "../components/pages/ContactUs";
import SignUp from "../components/pages/SignUp";
import Marketing from "../components/pages/Marketing";
import Consulting from "../components/pages/Consulting";

// import Footer from "../components/Footer.jsx";
// If using github pages then you need HashRouter not Brower
// import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Not needed anymore
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div>
					<div>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/services" component={Services} />
							<Route path="/products" component={Products} />
							<Route path="/contact-us" component={ContactUs} />
							<Route path="/sign-up" component={SignUp} />
							<Route path="/marketing" component={Marketing} />
							<Route path="/consulting" component={Consulting} />
							{/* <Route exact path="*" component={NotFound404Error}></Route> */}
						</Switch>
					</div>
				</div>
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;

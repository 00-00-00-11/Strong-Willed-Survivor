import "../styles/App.css";
import ContactPage from "../pages/ContactPage";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import LandingPage from "../pages/LandingPage";
// If using github pages then you need HashRouter not Brower
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Not needed anymore
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div>
					<div>
						<Switch>
							{/* Using "/discordjs-guide" as root */}
							<Route path="/" exact component={LandingPage}></Route>
							<Route exact path="/contact" component={ContactPage}></Route>
							{/* <Route exact path="*" component={NotFound404Error}></Route> */}
						</Switch>
					</div>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

import React, { Component } from "react";

export default class Navbar extends Component {
	render() {
		return <div>Hello</div>;
	}
}

// Error:

// src/components/Navbar/Navbar.js
//   Line 11:29:  React Hook "useState" cannot be called in a class component. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
//   Line 12:35:  React Hook "useState" cannot be called in a class component. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks

// Search for the keywords to learn more about each error.

// import { Button } from "./NavbarButtons/Button.css";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import React, { Component, useState } from "react";
// import Dropdown from "./NavbarDropdown/Dropdown";

// export class Navbar extends Component {
// 	constructor(props) {
// 		super(props);

// 		const [click, setClick] = useState(false);
// 		const [dropdown, setDropdown] = useState(false);

// 		const handleClick = () => setClick(!click);
// 		const closeMobileMenu = () => setClick(false);

// 		const onMouseEnter = () => {
// 			if (window.innerWidth < 960) {
// 				setDropdown(false);
// 			} else {
// 				setDropdown(true);
// 			}
// 		};

// 		const onMouseLeave = () => {
// 			if (window.innerWidth < 960) {
// 				setDropdown(false);
// 			} else {
// 				setDropdown(false);
// 			}
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<nav className="navbar">
// 					<Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
// 						EPIC
// 						<i class="fab fa-firstdraft" />
// 					</Link>
// 					<div className="menu-icon" onClick={this.handleClick}>
// 						<i className={this.click ? "fas fa-times" : "fas fa-bars"} />
// 					</div>
// 					<ul className={this.click ? "nav-menu active" : "nav-menu"}>
// 						<li className="nav-item">
// 							<Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
// 								Home
// 							</Link>
// 						</li>
// 						<li
// 							className="nav-item"
// 							onMouseEnter={this.onMouseEnter}
// 							onMouseLeave={this.onMouseLeave}
// 						>
// 							<Link
// 								to="/services"
// 								className="nav-links"
// 								onClick={this.closeMobileMenu}
// 							>
// 								Services <i className="fas fa-caret-down" />
// 							</Link>
// 							{this.dropdown && <Dropdown />}
// 						</li>
// 						<li className="nav-item">
// 							<Link
// 								to="/products"
// 								className="nav-links"
// 								onClick={this.closeMobileMenu}
// 							>
// 								Products
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<Link
// 								to="/contact-us"
// 								className="nav-links"
// 								onClick={this.closeMobileMenu}
// 							>
// 								Contact Us
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								to="/sign-up"
// 								className="nav-links-mobile"
// 								onClick={this.closeMobileMenu}
// 							>
// 								Sign Up
// 							</Link>
// 						</li>
// 					</ul>
// 					<Button />
// 				</nav>
// 			</div>
// 		);
// 	}
// }

// export default Navbar;

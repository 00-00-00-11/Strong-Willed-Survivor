import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/index.css";
import "../styles/buttons.css";

class Header extends Component {
	constructor(props) {
		super(props);

		this.handleClickHome = async () => {
			this.props.history.push("/");
		};

		this.handleClickGuide = async () => {
			this.props.history.push("/");
		};
	}
	render() {
		return (
			<div>
				<div>
					<button className="btn btn-green m-4">
						<Link onClick={this.handleClickHome}>Home Page</Link>
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(Header);

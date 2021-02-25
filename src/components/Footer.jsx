import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/index.css";
import "../styles/buttons.css";

class Footer extends Component {
	constructor(props) {
		super(props);

		// this.handleClickHome = async () => {
		// 	this.props.history.push("/");
		// };

		this.handleClickContact = async () => {
			this.props.history.push("/contact");
		};
	}
	render() {
		return (
			<div>
				<div>
					<button className="btn btn-green m-4">
						<Link onClick={this.handleClickContact}>Contact Us</Link>
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(Footer);

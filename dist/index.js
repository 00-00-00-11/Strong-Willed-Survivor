import React from "react";
import ReactDOM from "react-dom";

export default function index() {
	return (
		<div>
			<h1>Hello World! - coming from react!</h1>
		</div>
	);
}

ReactDOm.render(<App></App>, document.getElementById("app"));

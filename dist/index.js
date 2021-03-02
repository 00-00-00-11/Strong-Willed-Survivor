import React from "react";
import ReactDOM from "react-dom";

export default function index() {
	return (
		<div>
			<span>Hello World! - coming from react!</span>
		</div>
	);
}

ReactDOm.render(<App></App>, document.getElementById("app"));

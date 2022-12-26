import * as React from "react";
import { Link } from "gatsby";
import "./index.scss";

export default function Button(props) {
	let size = "";

	switch (props.size) {
		case "sm":
			size = "button--sm";
			break;
		case "outline":
			size = "button--outline";
			break;
		default:
			break;
	}
	return (
		<Link className={`button ${size}`} to={props.url}>
			{props.children}
		</Link>
	);
}

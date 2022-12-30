import * as React from "react";
import { Link } from "gatsby";
import "./index.scss";
import Arrow from "../../images/arrow-right-long-solid.svg";

const Button = (props) => {
	var button_size = "";
	switch (props.size) {
		case "sm":
			button_size = "button--sm";
			break;
		case "outline":
			button_size = "button--outline";
			break;
		default:
			break;
	}
	return (
		<Link className={`button ${button_size} ${props.className}`} to={props.url}>
			{props.children} {props.arrow && <img src={Arrow} alt="" />}
		</Link>
	);
};

export default Button;

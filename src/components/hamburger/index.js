"use client";
import React from "react";
import "./index.scss";

export default function Hamburger(props) {
	return (
		<button
			class={`navigation__hamburger ${props.open ? "open" : ""}`}
			onClick={props.click}
			onKeyDown={props.click}
			ref={props.ref}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
}

"use client";
import * as React from "react";
import TypeIt from "typeit-react";

export default function Typing(props) {
	const typeoptions = {
		lifeLike: true,
		// cursor: false,
		breakLines: false,
		speed: 50,
	};
	// function typeTexts(instance) {
	// 	instance
	// 		.pause(7000)
	// 		.delete()
	// 		.pause(450)
	// 		.type("super snelle website laten maken?")
	// 		.pause(7000)
	// 		.delete()
	// 		.pause(450)
	// 		.type("mooie website laten maken?");
	// 	return instance;
	// }
	return <TypeIt options={typeoptions}>{props.children}</TypeIt>;
}

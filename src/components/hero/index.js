import * as React from "react";
import "./index.scss";
import { StaticImage } from "gatsby-plugin-image";
import curve from "../../images/curve.png";

const Hero = (props) => {
	return (
		<section className="hero">
			<div className="hero__content">
				{props.nav}
				{props.children}
			</div>
			<img className="hero__curve" src={curve} width="2000" />
			<StaticImage
				src="../../images/website.png"
				loading="eager"
				alt="snelle websites"
				className="hero__laptop"
				width="1600"
			/>
		</section>
	);
};

export default Hero;

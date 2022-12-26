import * as React from "react";
import "./index.scss";
import { Link } from "gatsby";
import Logo from "../../images/logo.png";
import Button from "../button";

const Navigation = () => {
	return (
		<section className="navigation">
			<Link className="navigation__logo" to="/">
				<img src={Logo} alt="Flitsmedia" />
			</Link>
			<nav className="navigation__nav">
				<Link className="navigation__link" to="/">
					Websites
				</Link>
				<Link className="navigation__link" to="/">
					Webshops
				</Link>
				<Link className="navigation__link" to="/">
					Prijzen
				</Link>
				<Link className="navigation__link" to="/">
					Portfolio
				</Link>
				<Link className="navigation__link" to="/">
					Informatie
				</Link>
				<Link className="navigation__link" to="/blog">
					Blog
				</Link>
			</nav>
			<Button size="sm" url="/offerte">
				Offerte aanvragen
			</Button>
		</section>
	);
};

export default Navigation;

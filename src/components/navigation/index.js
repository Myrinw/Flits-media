import React, { useState } from "react";

import "./index.scss";
import { Link } from "gatsby";
import Button from "../button";
import Hamburger from "../hamburger";
import { StaticImage } from "gatsby-plugin-image";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleClick = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="navigation">
			<Link className="navigation__logo" to="/">
				<StaticImage
					src="../../images/logo.png"
					alt="Flitsmedia"
					loading="eager"
					placeholder="blurred"
				/>
			</Link>
			<nav className="navigation__nav">
				<Link className="navigation__link" to="/">
					Websites
				</Link>
				<Link className="navigation__link" to="/">
					Voorbeelden
				</Link>
				<Link className="navigation__link" to="/">
					Informatie
				</Link>
				<Link className="navigation__link" to="/blog">
					Blog
				</Link>
			</nav>

			<Button
				className="navigation__button"
				size="sm"
				arrow={true}
				url="/offerte"
			>
				Offerte aanvragen
			</Button>
			<Hamburger click={handleClick} open={menuOpen} />
			<nav className="navigation__mobilemenu">
				<nav className="navigation__mobilenav">
					<Link className="navigation__link" to="/">
						Websites
					</Link>
					<Link className="navigation__link" to="/">
						Voorbeelden
					</Link>
					<Link className="navigation__link" to="/">
						Informatie
					</Link>
					<Link className="navigation__link" to="/blog">
						Blog
					</Link>
				</nav>
			</nav>
		</div>
	);
};

export default Navigation;

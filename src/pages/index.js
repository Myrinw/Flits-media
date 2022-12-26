import * as React from "react";
import Hero from "../components/hero/index";
import Navigation from "../components/navigation";
import Button from "../components/button";
import TypeIt from "typeit-react";

const IndexPage = () => {
	const typeoptions = {
		lifeLike: true,
		// cursor: false,
		breakLines: false,
		speed: 50,
	};
	function typeTexts(instance) {
		instance
			.pause(7000)
			.delete()
			.pause(450)
			.type("super snelle website laten maken?")
			.pause(7000)
			.delete()
			.pause(450)
			.type("mooie website laten maken?");
		return instance;
	}
	return (
		<main>
			<Hero nav={<Navigation />}>
				<div className="container">
					<h1 class="pagetitleh1">Website laten maken?</h1>
					<span className="hero__title">
						Wil jij een{" "}
						<TypeIt options={typeoptions}>
							Gloednieuwe website laten maken?
						</TypeIt>
					</span>
					<div className="hero__buttons">
						<Button>Prijs berekenen</Button>
						<Button size="outline">Contact opnemen</Button>
					</div>
				</div>
			</Hero>
			<header className="header"></header>
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

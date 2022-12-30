import * as React from "react";
import Hero from "../components/hero/index";
import Navigation from "../components/navigation";
import Button from "../components/button";
import Typing from "../components/typing";
import Usps from "../components/usps";
import Services from "../components/services";

const IndexPage = () => {
	return (
		<main>
			<Hero nav={<Navigation />}>
				<div className="container">
					<h1 class="pagetitleh1">Website laten maken?</h1>
					<span className="hero__title">
						Wil jij een <Typing>Website laten maken?</Typing>
					</span>
					<div className="hero__buttons">
						<Button>Contact opnemen</Button>
						<Button size="outline">
							Prijs berekenen{" "}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path
									fill="#6101fa"
									d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
								/>
							</svg>
						</Button>
					</div>
				</div>
			</Hero>
			{/* <Usps /> */}
			<Services />
		</main>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import your own components
import { NavBar } from "./navbar.js";

//import your own components
import { Jumbotron } from "./jumbotron.js";

//import your own components
import { Footer } from "./footer.js";

//import your own components
import { CardT } from "./tarjetas.js";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div class="container">
				<Jumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh ligula, posuere at lectus vitae, mollis dapibus lorem. Nullam quis mauris ut metus luctus consectetur dapibus vitae lectus. Cras ac dolor ac elit posuere vulputate eget nec felis."
					buttonLabel="Call to action!"
					buttonURL="#"
				/>

				<div class="card-group  row-cols-4 ">
					<div class="card">
						<CardT />
					</div>
					<div class="card">
						<CardT />
					</div>
					<div class="card">
						<CardT />
					</div>
					<div class="card">
						<CardT />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

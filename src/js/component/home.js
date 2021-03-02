import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import your own components
import { NavBar } from "./navbar.js";

//import your own components
import { Jumbotron } from "./jumbotron.js";

//import your own components
import { Card } from "./card.js";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh ligula, posuere at lectus vitae, mollis dapibus lorem. Nullam quis mauris ut metus luctus consectetur dapibus vitae lectus. Cras ac dolor ac elit posuere vulputate eget nec felis."
				buttonLabel="Call to action!"
				buttonURL="#"
			/>
			<div className="card-group">
				<div className="card-deck">
					<Card
						url="https://cdn.pixabay.com/photo/2021/01/24/20/21/cloud-5946381__340.jpg"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh ligula, posuere at lectus vitae, mollis dapibus lorem. Nullam quis mauris ut metus luctus consectetur dapibus vitae lectus. Cras ac dolor ac elit posuere vulputate eget nec felis."
						button1="Find Out More!"
						button2="#"
					/>
				</div>

				<div className="card-deck">
					<Card
						url="https://cdn.pixabay.com/photo/2021/01/24/20/21/cloud-5946381__340.jpg"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh ligula, posuere at lectus vitae, mollis dapibus lorem. Nullam quis mauris ut metus luctus consectetur dapibus vitae lectus. Cras ac dolor ac elit posuere vulputate eget nec felis."
						button1="Find Out More!"
						button2="#"
					/>
				</div>
			</div>
		</div>
	);
}

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import your own components
import { NavBar } from "./navbar.js";

//create your first component
export function Home() {
	return (

        <div>
			<NavBar />
			<h1 className="text-center">Hola, Karla</h1>
		</div>

		
	);
}

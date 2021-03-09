import React from "react";

//create your first component
export function CardT() {
	return (
		<div className="card text-center" style={{ width: "16rem" }}>
			<img
				src="https://a.storyblok.com/f/89778/1168x728/b7082a9dd9/cr_00_00_2.jpeg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}

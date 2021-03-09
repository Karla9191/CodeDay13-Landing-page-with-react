import React from "react";

//create your first component
export function CardT() {
	return (
		<div className="card text-center" style={{ width: "16rem" }}>
			<img
				src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg"
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

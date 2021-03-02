import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card col-sm-2" styles="width: 18rem;">
			<img
				className="card-img-top"
				style="width: 325px; height:500px; "
				src={props.url}
				alt="..."
			/>
			<div className="card-body">
				<p className="card-text">{props.description}</p>
				<a href={props.button2} className="btn btn-primary">
					{props.button1}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	url: PropTypes.string,
	description: PropTypes.string,
	button2: PropTypes.string,
	button1: PropTypes.string
};

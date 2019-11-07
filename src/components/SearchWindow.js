import React from "react";
import SearchResults from "../components/SearchResults";
import "../styleSheets/SearchWindow.css";
import Slider from "../components/DistanceSlider";
import "../styleSheets/Slider.css";

class SearchWindow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<div>
					<h1>The Virtual N.O.M</h1>
					<div>
						Enter your location:
						<input></input>
					</div>
					<Slider></Slider>

					<button>Click me to search</button>
					<SearchResults></SearchResults>
				</div>
			</div>
		);
	}
}

export default SearchWindow;

import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class DistanceSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <mySlider />;
	}
}

const mySlider = () => (
	<div>
		<Nouislider range={{ min: 0, max: 30 }} start={[20, 80]} connect />
	</div>
);

export default DistanceSlider;

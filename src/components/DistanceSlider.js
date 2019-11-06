import React from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

//const style = { width: 600, margin: 50 };
class CustomizedSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			min: 0,
			max: 30,
			step: 5,
			value: 5
		};
	}
	onSliderChange = value => {
		console.log(value);
		this.setState({
			value
		});
	};
	onAfterChange = value => {
		console.log(value); //eslint-disable-line
	};
	render() {
		return (
			<div className="sliderContainer">
				<Slider
					dots
					value={this.state.value}
					min={this.state.min}
					step={this.state.step}
					onChange={this.onSliderChange}
					onAfterChange={this.onAfterChange}
				/>
			</div>
		);
	}
}

export default CustomizedSlider;

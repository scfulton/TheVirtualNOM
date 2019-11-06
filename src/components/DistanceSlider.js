import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

//const style = { width: 600, margin: 50 };
class CustomizedSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			min: 1,
			max: 50,
			step: 1,
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
				{/* <div id="min">
					<label>{this.state.min}</label>
				</div> */}

				<Slider
					value={this.state.value}
					marks={({ 1: this.state.min }, { 100: this.state.max })}
					step={null}
					// min={this.state.min}
					step={this.state.step}
					onChange={this.onSliderChange}
					onAfterChange={this.onAfterChange}
				/>

				{/* <div id="max">
					<label>{this.state.max}</label>
				</div> */}
			</div>
		);
	}
}

export default CustomizedSlider;

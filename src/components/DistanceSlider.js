import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

//const style = { width: 600, margin: 50 };
const minMark = 1;
const maxMark = 50;
const marks = {
	1: { label: `${minMark}` },
	50: { label: `${maxMark}` }
};
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
		this.props.handleSliderChange(value);
		
		console.log(value); //eslint-disable-line
	};
	render() {
		return (
			<div className="sliderContainer">
				<Slider
					value={this.state.value}
					min={this.state.min}
					max={this.state.max}
					marks={marks}
					step={null}
					// min={this.state.min}
					step={this.state.step}
					onChange={this.onSliderChange}
					onAfterChange={this.onAfterChange}
					
				/>
			</div>
		);
	}
}

export default CustomizedSlider;

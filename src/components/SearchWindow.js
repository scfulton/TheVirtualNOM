import React from "react";
import SearchResults from "../components/SearchResults";
import "../styleSheets/SearchWindow.css";
import Slider from "../components/DistanceSlider";
import "../styleSheets/Slider.css";

class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      sliderValue: 5
    };
  }
  handleChange = event => {
    this.setState({ address: event.target.value });
    console.log(this.state.address);
  };

  handleSliderChange = event => {
	this.setState({ sliderValue: event });
	// console.log("event : ", event)
  };

  alertFunction(e) {
    // e.preventDefault();
    alert(e);
  }
  render() {
    return (
      <div>
        <div>
          <h1>The Virtual N.O.M</h1>
          <div>
            Enter your location:
            <input
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
            ></input>
          </div>
          <Slider handleSliderChange = {this.handleSliderChange}></Slider>
          <button
            onClick={
              this.state.address
                ? () => this.alertFunction(this.state.address)
                : null
            }
          >
            Search
          </button>
          <SearchResults></SearchResults>
        </div>
      </div>
    );
  }
}

export default SearchWindow;

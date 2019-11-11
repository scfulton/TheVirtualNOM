import React from "react";
import SearchResults from "../components/SearchResults";
import "../styleSheets/SearchWindow.css";
import Slider from "../components/DistanceSlider";
import "../styleSheets/Slider.css";

class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: null,
      names: null
    };
  }

  callAPI() {
    // fetch("https://thevirtualnomapiproduction.herokuapp.com/search")
    fetch("http://localhost:9000/search")
      .then(res => res.text())
      //   .then(res => JSON.parse(res))
      .then(res =>
        this.setState({
          apiResponse: res,
          names: res.name
        })
      );
  }
  componentDidMount() {
    this.callAPI();
  }
  render() {
    console.log("pre: " + this.state.apiResponse);
    const apiResponse = this.state.apiResponse;
    // const jsonRes = JSON.parse(apiResponse);
    // console.log("post: " + typeof jsonRes);
    // const list =
    //   this.state.apiResponse === null ? (
    //     {}
    //   ) : (
    //     apiResponse.map(value => {
    //       //   this.setState({names: name})

    //       // console.log(name.name)
    //       return <li>{value.value.name}</li>;
    //     })
    //   );

    const rList = ({ apiResponse }) => {
      if (!apiResponse) {
        return null;
      }
      const listItems = apiResponse.value[0].map(item => (
        <li> name: {item.name}</li>
      ));
      return (
        <div>
          <div> {listItems} </div>
        </div>
      );
    };
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
          {/* <SearchResults>{this.state.apiResponse}</SearchResults> */}
		  <SearchResults>{rList}</SearchResults>
        </div>
      </div>
    );
  }
}

export default SearchWindow;

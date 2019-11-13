import React from "react";
import RestaurantCard from "../components/RestaurantCard";

import "../styleSheets/SearchResults.css";


var json = [];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = { apiResponse: "" };
  }

  callAPI() {
    // fetch("https://thevirtualnomapiproduction.herokuapp.com/search/")
    fetch("http://localhost:9000/search")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }))
  }
  componentDidMount() {
    this.callAPI();
  }


  render() {
    var resObj = this.state.apiResponse.slice();
    console.log("asdf2",resObj)
    for (var key in resObj) {
        json.push(resObj[key]);
    }
    // console.log(json);

    return (
      <div className="resultContainer">
          <ul>
            {json.map((item, i) => {
              return (
                <li key={i}>
                  {/* <RestaurantCard>{item.name}</RestaurantCard> */}
                  <RestaurantCard>{item}</RestaurantCard>
                </li>
              );
            })}
            {/* <RestaurantCard>{json}</RestaurantCard> */}
          </ul>
      </div>
    );
  }
}

export default SearchResults;

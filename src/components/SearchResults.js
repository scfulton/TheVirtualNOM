import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import "../styleSheets/SearchResults.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("https://thevirtualnomapiproduction.herokuapp.com/search/")
    //   fetch("http://localhost:9000/search")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentDidMount() {
    this.callAPI();
  }

  renderCard(e) {
      
    const rList = this.state.apiResponse.map(item => {
      console.log("rlist: " + JSON.stringify(rList));
      return <RestaurantCard>{item.name}</RestaurantCard>;
    });

  }

  render() {
    return (
      <div className="resultContainer">
        <div>
          {/* <p>{JSON.stringify(this.state.apiResponse[0])}</p> */}
          {console.log("[1] " + JSON.stringify(this.state.apiResponse[0]))}
        </div>
    {/* <RestaurantCard>{JSON.stringify(this.state.apiResponse[0])}</RestaurantCard> */}
    <RestaurantCard>{(this.state.apiResponse.id)}</RestaurantCard>

      </div>
    );
  }
}

export default SearchResults;

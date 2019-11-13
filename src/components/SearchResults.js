import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import ListItem from "./listItem";

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
    // this.renderCard()
  }

  // renderCard() {
  //   const rList = this.state.apiResponse.map((item, index) => {
  //     console.log("rlist: " + JSON.stringify(rList));
  //     // return <RestaurantCard>{item.name}</RestaurantCard>;
  //     return (<li key = {index}>
  //       <p>{item.name}</p>
  //     </li>
  //     )
  //   });
  //   return <ul>{rList}</ul>

  // }

  // renderListNames(){
  //   Object.values(this.state.apiResponse).map((type) =>{
  //     console.log(type);
  //     return (
  //       <li>Name : {type}</li>
  //     )
  //   })
  // }

  looper() {
    var json = [];
    var resObj = this.state.apiResponse.slice();
    console.log("asdf",resObj)
    for (var key in resObj) {
      if (resObj[key].name == "Dish Society") {
        json.push(resObj[key]);
        console.log(json)
      }
    }
    console.log(json);
  }

  render() {
    var resObj = this.state.apiResponse.slice();
    console.log("asdf",resObj)
    for (var key in resObj) {
      // if (resObj[key].name == "Dish Society") 
      {
        json.push(resObj[key]);
      }
    }
    console.log(json);

    return (
      <div className="resultContainer">
        <div>
          <ul>
            {json.map((item, i) => {
              return (
                <li>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
          {/* <ListItem>{this.state.apiResponse}</ListItem> */}
          {/* <ul>{this.renderCard}</ul> */}
          {/* <p>{JSON.stringify(this.state.apiResponse[0])}</p> */}
          {/* {console.log("[1] " + JSON.stringify(this.state.apiResponse[0]))} */}
        </div>
        {/* <RestaurantCard>{JSON.stringify(this.state.apiResponse[0])}</RestaurantCard> */}
        {/* <RestaurantCard>{(this.state.apiResponse.id)}</RestaurantCard> */}
      </div>
    );
  }
}

export default SearchResults;

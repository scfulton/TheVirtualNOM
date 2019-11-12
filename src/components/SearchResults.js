import React from "react";
import "../styleSheets/SearchResults.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch("https://thevirtualnomapiproduction.herokuapp.com/search")
      // fetch("http://localhost:9000/search")
      .then(res => {
        return res.text();
      })
      .then(data => {
        this.setState({ apiResponse: data });
      });
    //.then(res => this.setState({ apiResponse: res }));
  }

  myParse(a) {
    let names = a.map(name => {
      //console.log(name.value);
      return (
        <div>
          <p> = {names.value.name} </p>
        </div>
      );
    });
  }

  componentDidMount() {
    this.callAPI();
    this.myParse(this.state.apiResponse);
  }

  render() {
    //this.myParse(this.state.apiResponse);
    return (
      <div className="resultContainer">
        <div>{this.state.apiResponse}</div>
        {/* <ol className='resultsList'>
                    <li>Ordered</li>   
                    <li>List</li> 
                    <li>here</li> 
                    <li>of</li> 
                    <li>results</li> 

                </ol> */}
      </div>
    );
  }
}

export default SearchResults;

import React from "react";
import "../styleSheets/SearchResults.css";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
//     this.state = { 
//         apiResponse: null,
//         names: null,    
//     };
//   }

//   callAPI() {
//     fetch("https://thevirtualnomapiproduction.herokuapp.com/search")
//       // fetch("http://localhost:9000/search")
//       .then(res => res.text())
//       //   .then(res => JSON.parse(res))
//       .then(res => this.setState({ 
//           apiResponse: res
//      }));
//   }
//   componentDidMount() {
//     this.callAPI();
//   }
//   componentWillUpdate(){
//       this.callAPI()
  }

  render() {
    // console.log("pre: " + this.state.apiResponse);
    // const apiResponse = this.state.apiResponse;
    // const jsonRes = JSON.parse(apiResponse);
    // console.log("post: " + typeof jsonRes);

    // if (this.state.apiResponse === null) {
    //     console.log('in the if')
    // } else {
        // console.log('in the else')
    //   const list = this.state.apiResponse === null ? {} : jsonRes.map(name => {
    //     //   this.setState({names: name})

    //     console.log(name.name)
    //     return <li>{name.name}</li>;
    //   });
    // }

    // const namesList = jsonRes.map(name => {
    //     this.setState({names: name.name})
    // })


    return (
      <div className="resultContainer">
          <li>{this.props.children}</li>
          {/* <ul>{list}</ul> */}
        {/* <div>{this.state.apiResponse}</div> */}
        {/* <ul>{this.state.names}</ul> */}
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

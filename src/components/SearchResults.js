import React from 'react'
import '../styleSheets/SearchResults.css'


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    callAPI() {
        fetch("http://thevirtualnomapiproduction.herokuapp.com/search")
        // fetch("http://localhost:9000/search")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
    }
    componentDidMount(){
        this.callAPI()
    }
    render() { 
        return ( 
            <div className='resultContainer'>
                <div> 
                    {this.state.apiResponse}
                </div>
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
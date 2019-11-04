import React from 'react'


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <ol>
                    <li>Ordered</li>   
                    <li>List</li> 
                    <li>here</li> 
                    <li>of</li> 
                    <li>results</li> 

                </ol>
            </div>
         );
    }
}
 
export default SearchResults;
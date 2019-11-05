import React from 'react'
import '../styleSheets/SearchResults.css'


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='resultContainer'>
                <ol className='resultsList'>
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
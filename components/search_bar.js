import React, { Component } from 'react';
// { Component } means the React.Component will be saved as component

class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = { term: ''}; 
    }
    
    render() {
        return (
            <div className="search-bar"> 
            <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
     
}

/* THIS COULD BE A LESS SIMPLE VERSION OF THE RENDER WITH SAME RESULTS:
render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
    
    
}  
*/

export default SearchBar;
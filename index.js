//lodash import for the search bar delay
import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// importing the SearchBar component from its file location
import SearchBar from './components/search_bar';

// importing YouTube API search
import YTSearch from 'youtube-api-search';

// API KEY FOR MY YOUTUBE SEARCH
const API_KEY = 'AIzaSyA3v5UGnpDrMA7ZTMWduHe2G6wryf-xpik';

//importing video list
import VideoList from './components/video_list';

//importing VideoDetail
import VideoDetail from './components/video_detail';


// creating a new component that will produce HTML
class App extends Component { 
    constructor(props){
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('surfing');
       
    }
    
    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
         this.setState({ 
             videos:videos,
             selectedVideo: videos[0]
         });
        // this.setState({ videos: videos}) when property and value name are the same in ES6. easier.
        });   
    }
    
    
    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300) ;
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoClick={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
} 


//Render this component's HTML and put it on the page (in the DOM)
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyClDgiRvveun52tkWib-FDTtTp3Tq68kXQ';

// if you're familiar with jquery/ajax, this is similar? =>
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.search('surfboards');
	}

	search(searchTerm) {
		YTSearch({ key: API_KEY, term: searchTerm}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				 	onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

// Put component into page
ReactDOM.render(<App />, document.querySelector('.container'));

// Notes:
// Differences between instances and types

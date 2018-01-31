import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // defining a key for a list of items makes updates much more efficient!
  const videoItems = props.videos.map( (video) => {
    return(
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  // Stay away from for loops
  // use built-in maps iterator
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
import React from 'react';
import VideoItem from '../VideoItem';

const VideoList = ({ videos }) => {
  const renderedVideos = videos.map((video) => {
    console.log(video);
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return <ul className="list-unstyled">{renderedVideos}</ul>;
};
export default VideoList;

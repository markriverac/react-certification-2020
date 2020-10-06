import React from 'react';
import VideoItem from '../VideoItem';

const VideoList = ({ videos }) => {
  const renderedVideos = videos.map((video) => {
    const id = video.id.videoId || video.id;
    return <VideoItem key={id} video={video} />;
  });

  return <ul className="list-unstyled">{renderedVideos}</ul>;
};
export default VideoList;

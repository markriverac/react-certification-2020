/* istanbul ignore file */
import React, { useState } from 'react';
import VideoContext from './Video.context';

function VideoProvider({ children }) {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [searchingVideo, setSearchingVideo] = useState('');

  return (
    <VideoContext.Provider
      value={{
        videoList,
        selectedVideo,
        searchingVideo,
        setCurrentVideo: setSelectedVideo,
        setSearchingVideo,
        setCurrentList: setVideoList,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export default VideoProvider;

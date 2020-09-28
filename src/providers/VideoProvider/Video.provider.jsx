import React, { useState } from 'react';
import VideoContext from './Video.context';
import { videoData } from './Video.data';

function VideoProvider({ children }) {
  const [videoState, setvideoState] = useState(videoData);

  function setCurrentVideo(actualVideo) {
    setvideoState({ ...videoState, selectedVideo: actualVideo });
  }
  function setCurrentList(list) {
    setvideoState({ ...videoState, videoList: list });
  }
  function setSearchingVideo(query) {
    setvideoState({ ...videoState, searchingVideo: query });
  }

  return (
    <VideoContext.Provider
      value={{ videoState, setCurrentVideo, setSearchingVideo, setCurrentList }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export default VideoProvider;

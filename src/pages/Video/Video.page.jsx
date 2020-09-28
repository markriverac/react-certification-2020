import React, { useContext } from 'react';
import './Video.styles.css';
import Container from 'react-bootstrap/Container';
import VideoList from '../../components/VideoList';
import VideoDetail from '../../components/VideoDetail/VideoDetail.component';
import VideoContext from '../../providers/VideoProvider/Video.context';

function VideoPage() {
  const { videoState } = useContext(VideoContext);
  return (
    <Container className="wrapper">
      <VideoDetail />
      <div className="list-container">
        <VideoList videos={videoState.videoList} />
      </div>
    </Container>
  );
}

export default VideoPage;

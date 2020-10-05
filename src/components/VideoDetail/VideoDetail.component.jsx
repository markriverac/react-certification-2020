import React, { useContext } from 'react';
import './VideoDetail.styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavoriteButton from '../FavoriteButton';
import UserContext from '../../providers/UserProvider/User.context';
import VideoContext from '../../providers/VideoProvider/Video.context';

function VideoDetail() {
  const { userState } = useContext(UserContext);
  const { videoState } = useContext(VideoContext);

  if (!videoState.selectedVideo.id) {
    return <></>;
  }

  const video = videoState.selectedVideo;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-container">
      <div className="frame-container">
        <iframe className="video" src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <Row className="header">
        <Col>
          <h4> {video.snippet.title}</h4>
        </Col>
        <Col xs="auto">
          {userState.isAuth && (
            <FavoriteButton video={video} variant="outline-warning">
              Add to favorite
            </FavoriteButton>
          )}
        </Col>
      </Row>
      <p> {video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;

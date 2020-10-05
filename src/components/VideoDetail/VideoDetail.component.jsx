import React, { useContext } from 'react';
import './VideoDetail.styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavoriteButton from '../FavoriteButton';
import UserContext from '../../providers/UserProvider/User.context';

function VideoDetail({ videoDetail }) {
  const { userState } = useContext(UserContext);

  if (!videoDetail.id) {
    return null;
  }
  const videoSrc = `https://www.youtube.com/embed/${videoDetail.id}`;
  return (
    <div className="video-container">
      <div className="frame-container">
        <iframe className="video" src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <Row className="header">
        <Col>
          <h4> {videoDetail.snippet.localized.title}</h4>
        </Col>
        <Col xs="auto">
          {userState.isAuth && (
            <FavoriteButton video={videoDetail} variant="outline-warning">
              Add to favorite
            </FavoriteButton>
          )}
        </Col>
      </Row>
      <p className="video-description"> {videoDetail.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;

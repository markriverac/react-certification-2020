import React from 'react';
import './videoItem.styles.css';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const VideoItem = ({ video }) => {
  const videoId = video.id.videoId || video.id;
  return (
    <Link to={`/video/${videoId}`}>
      <div className="video-item item" aria-hidden="true">
        <Card body style={{ width: '100%' }}>
          <Media as="li">
            <img
              width={350}
              height={180}
              className="mr-3"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.description}
            />
            <Media.Body>
              <div className="video-description">
                <h5 className="video-title">{video.snippet.title}</h5>
                <p className="video-info">{video.snippet.description}</p>
              </div>
            </Media.Body>
          </Media>
        </Card>
      </div>
    </Link>
  );
};
export default VideoItem;

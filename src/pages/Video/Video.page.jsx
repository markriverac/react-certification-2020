import React, { useState, useEffect } from 'react';
import './Video.styles.css';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import VideoList from '../../components/VideoList';
import VideoDetail from '../../components/VideoDetail/VideoDetail.component';
import youtube from '../../api/youtube';

async function getVideoDetails(videoId) {
  const videoDetail = await youtube.get('/videos', {
    params: {
      part: 'snippet',
      id: videoId,
    },
  });

  return videoDetail;
}

async function getReccomendations(videoId) {
  const videoDetail = await youtube.get('/search', {
    params: {
      part: 'snippet',
      relatedToVideoId: videoId,
      type: 'video',
    },
  });
  return videoDetail;
}

function VideoPage() {
  const { videoId } = useParams();
  const [videoDetail, setvideoDetail] = useState({});
  const [relatedVideos, setrelatedVideos] = useState({});

  useEffect(() => {
    console.log('trying to change video detail');
    if (!videoDetail.id || videoId !== videoDetail.id) {
      getVideoDetails(videoId).then((result) => {
        setvideoDetail(result.data.items[0]);
      });
    } else {
      console.log(videoDetail);
      getReccomendations(videoDetail.id).then((reccomendations) => {
        setrelatedVideos(reccomendations.data.items);
      });
    }
  }, [videoId, videoDetail]);
  return (
    <Container className="wrapper">
      <VideoDetail videoDetail={videoDetail} />
      <div className="list-container">
        {relatedVideos.length && <VideoList videos={relatedVideos} />}
      </div>
    </Container>
  );
}

export default VideoPage;

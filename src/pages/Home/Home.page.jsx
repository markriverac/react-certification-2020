import React, { useRef, useContext } from 'react';
import './Home.styles.css';
import SearchBar from '../../components/SearchBar';
import VideoList from '../../components/VideoList';
import youtube from '../../api/youtube';
import VideoContext from '../../providers/VideoProvider/Video.context';

function HomePage() {
  const videoContext = useContext(VideoContext);

  const sectionRef = useRef(null);

  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar,
      },
    });
    if (termFromSearchBar) {
      videoContext.setCurrentList(response.data.items);
    } else {
      videoContext.setCurrentList([]);
    }
  };

  return (
    <section className="homepage" ref={sectionRef}>
      <div className="ui container">
        <SearchBar handleFormSubmit={handleSubmit} />
        <div>
          <VideoList videos={videoContext.videoState.videoList} />
        </div>
      </div>
    </section>
  );
}

export default HomePage;

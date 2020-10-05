import React, { useRef, useState } from 'react';
import './Home.styles.css';
import SearchBar from '../../components/SearchBar';
import VideoList from '../../components/VideoList';
import youtube from '../../api/youtube';

function HomePage() {
  const sectionRef = useRef(null);
  const [videoList, setvideoList] = useState([]);

  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar,
        type: 'video',
      },
    });
    if (termFromSearchBar) {
      setvideoList(response.data.items);
    } else {
      setvideoList([]);
    }
  };

  return (
    <section className="homepage" ref={sectionRef}>
      <div className="ui container">
        <SearchBar handleFormSubmit={handleSubmit} />
        <div>
          <VideoList videos={videoList} />
        </div>
      </div>
    </section>
  );
}

export default HomePage;

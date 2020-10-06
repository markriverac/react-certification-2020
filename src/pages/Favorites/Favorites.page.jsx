import React, { useContext } from 'react';
import UserContext from '../../providers/UserProvider/User.context';
import VideoList from '../../components/VideoList';
import NotFoundPage from '../NotFound/NotFound.page';

function FavoritesPage() {
  const { userState } = useContext(UserContext);
  const videos = userState.favorites;
  return videos.length > 0 ? <VideoList videos={videos} /> : <NotFoundPage />;
}

export default FavoritesPage;

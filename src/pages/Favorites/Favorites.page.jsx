import React, { useContext } from 'react';
import UserContext from '../../providers/UserProvider/User.context';
import VideoList from '../../components/VideoList';

function FavoritesPage() {
  const { userState } = useContext(UserContext);
  const videos = userState.favorites;
  return <VideoList videos={videos} />;
}

export default FavoritesPage;

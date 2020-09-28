import { useState, useEffect, useContext } from 'react';
import UserContext from '../../providers/UserProvider/User.context';

function useVideoStatus(video) {
  const [videoFavorite, setvideoFavorite] = useState(false);
  const { userState } = useContext(UserContext);
  const { favorites } = userState;

  // const manageVideoStatus = useCallback(() => {}, [favorites, video]);

  useEffect(() => {
    if (favorites.indexOf(video) > -1) {
      setvideoFavorite(true);
    } else {
      setvideoFavorite(false);
    }
  }, [userState, favorites, video]);

  return videoFavorite;
}

export default useVideoStatus;

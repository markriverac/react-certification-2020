import { useContext } from 'react';
import UserContext from '../../providers/UserProvider/User.context';

function useVideoStatus(video) {
  const { userState } = useContext(UserContext);
  const { favorites } = userState;
  return favorites.indexOf(video) > -1;
}

export default useVideoStatus;

import { useContext } from 'react';
import _ from 'lodash';
import UserContext from '../../providers/UserProvider/User.context';

function useVideoStatus(video) {
  const { userState } = useContext(UserContext);
  const { favorites } = userState;
  const result = _.filter(favorites, (obj) => {
    console.log(obj, video);
    return obj.id === video.id;
  });
  return result.length > 0;
}

export default useVideoStatus;

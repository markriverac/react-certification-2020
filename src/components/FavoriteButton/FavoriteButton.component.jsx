import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import UserContext from '../../providers/UserProvider/User.context';
import useVideoStatus from '../../utils/hooks/useVideoStatus';

function FavoriteButton({ video }) {
  const { addFavorite, removeFavorite } = useContext(UserContext);
  const videoStatus = useVideoStatus(video);
  /* istanbul ignore next */
  function addNewFavorite() {
    addFavorite(video);
  }
  /* istanbul ignore next */
  function removeFromFavorites() {
    removeFavorite(video);
  }

  const buttonAdd = (
    <Button onClick={addNewFavorite} variant="outline-info">
      Add to favorite
    </Button>
  );
  const buttonRemove = (
    <Button onClick={removeFromFavorites} variant="outline-dark">
      Remove from Favorites
    </Button>
  );

  return videoStatus ? buttonRemove : buttonAdd;
}

export default FavoriteButton;

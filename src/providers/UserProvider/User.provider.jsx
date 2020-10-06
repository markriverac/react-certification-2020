/* istanbul ignore file */
import React, { useState } from 'react';
import _ from 'lodash';
import UserContext from './User.context';
import { userData } from './User.data';

function UserProvider({ children }) {
  const [userState, setuserState] = useState(userData);

  function logIn(username) {
    setuserState({ ...userState, name: username, isAuth: true });
  }
  function logOut() {
    setuserState({ ...userState, isAuth: false });
  }
  function addFavorite(video) {
    const newFavorites = userState.favorites;
    newFavorites.push(video);
    setuserState({ ...userState, favorites: newFavorites });
  }
  function removeFavorite(video) {
    const favoriteVideos = _.filter(userState.favorites, (fav) => {
      return fav.id !== video.id;
    });
    setuserState({ ...userState, favorites: favoriteVideos });
  }

  return (
    <UserContext.Provider
      value={{ userState, logIn, logOut, addFavorite, removeFavorite }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

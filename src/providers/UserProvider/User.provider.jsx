import React, { useState } from 'react';
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
    const favoriteVideos = userState.favorites;
    const videoIndex = favoriteVideos.indexOf(video);
    if (videoIndex > -1) {
      favoriteVideos.splice(videoIndex, 1);
      setuserState({ ...userState, favorites: favoriteVideos });
    }
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

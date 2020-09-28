import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private';
import Layout from '../Layout';
import Navigation from '../Navigation/Navigation.component';
import VideoPage from '../../pages/Video';
import UserProvider from '../../providers/UserProvider/User.provider';
import VideoProvider from '../../providers/VideoProvider/Video.provider';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navigation />
        <Layout>
          <Switch>
            <VideoProvider>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/video/:videoId">
                <VideoPage />
              </Route>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
            </VideoProvider>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

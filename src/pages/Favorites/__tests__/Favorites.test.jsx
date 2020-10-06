import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import UserContext from '../../../providers/UserProvider/User.context';
import FavoritesPage from '../Favorites.page';

Enzyme.configure({ adapter: new Adapter() });

it('renders without exploding if not videos', () => {
  const userState = { favorites: [] };
  const favorites = renderer.create(
    <UserContext.Provider value={{ userState }}>
      <FavoritesPage />
    </UserContext.Provider>
  );
  const tree = favorites.toJSON();
  expect(tree.props.className).toEqual('not-found');
});

it('renders favorite videos', () => {
  const videos = [
    {
      id: {
        videoId: 'id',
      },
      snippet: {
        thumbnails: {
          medium: {
            url: 'url',
          },
        },
        title: 'title',
        description: 'description',
      },
    },
  ];
  const userState = { favorites: videos };
  const favorites = renderer.create(
    <BrowserRouter>
      <UserContext.Provider value={{ userState }}>
        <FavoritesPage />
      </UserContext.Provider>
    </BrowserRouter>
  );
  const tree = favorites.toJSON();
  expect(tree.type).toEqual('ul');
});

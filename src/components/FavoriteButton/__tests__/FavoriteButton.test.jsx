import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserProvider from '../../../providers/UserProvider/User.provider';
import FavoriteButton from '../FavoriteButton.component';
import UserContext from '../../../providers/UserProvider/User.context';

Enzyme.configure({ adapter: new Adapter() });

it('Renders button without exploding', () => {
  const video = {};
  const button = renderer.create(
    <UserProvider>
      <FavoriteButton video={video} />
    </UserProvider>
  );
  const tree = button.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders add to favorite button', () => {
  const video = {};
  const button = renderer.create(
    <UserProvider>
      <FavoriteButton video={video} />
    </UserProvider>
  );
  const tree = button.toJSON();
  expect(tree.children).toEqual(['Add to favorite']);
});

it('renders remove from favorite button', () => {
  const video = {};
  const userState = { favorites: [video] };
  const button = renderer.create(
    <UserContext.Provider value={{ userState }}>
      <FavoriteButton video={video} />
    </UserContext.Provider>
  );
  const tree = button.toJSON();
  expect(tree.children).toEqual(['Remove from Favorites']);
});

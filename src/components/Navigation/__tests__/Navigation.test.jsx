import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from '../../../providers/UserProvider/User.provider';
import Navigation from '../Navigation.component';
import UserContext from '../../../providers/UserProvider/User.context';

Enzyme.configure({ adapter: new Adapter() });

it('Renders button without exploding', () => {
  const navigation = renderer.create(
    <BrowserRouter>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </BrowserRouter>
  );
  const tree = navigation.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders login form if not in', () => {
  const navigation = renderer.create(
    <BrowserRouter>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </BrowserRouter>
  );
  const tree = navigation.toJSON();
  expect(tree.children[3].type).toEqual('form');
});

it('renders username when logged in', () => {
  const userState = { isAuth: true };
  const navigation = renderer.create(
    <BrowserRouter>
      <UserContext.Provider value={{ userState }}>
        <Navigation />
      </UserContext.Provider>
    </BrowserRouter>
  );
  const tree = navigation.toJSON();
  expect(tree.children[3].type).toEqual('span');
});

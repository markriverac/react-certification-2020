import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import Private from '../Private.component';
import UserContext from '../../../providers/UserProvider/User.context';

Enzyme.configure({ adapter: new Adapter() });

it('Renders without exploding', () => {
  const userState = { isAuth: false };
  const notFound = renderer.create(
    <BrowserRouter>
      <UserContext.Provider value={{ userState }}>
        <Private />
      </UserContext.Provider>
    </BrowserRouter>
  );
  const tree = notFound.toJSON();
  expect(tree).toMatchSnapshot();
});

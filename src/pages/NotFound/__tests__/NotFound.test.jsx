import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NotFoundPage from '../NotFound.page';

Enzyme.configure({ adapter: new Adapter() });

it('Renders without exploding', () => {
  const notFound = renderer.create(<NotFoundPage />);
  const tree = notFound.toJSON();
  expect(tree).toMatchSnapshot();
});

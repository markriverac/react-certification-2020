import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.component';

Enzyme.configure({ adapter: new Adapter() });

it('Renders without exploding', () => {
  const notFound = renderer.create(<App />);
  const tree = notFound.toJSON();
  expect(tree).toMatchSnapshot();
});

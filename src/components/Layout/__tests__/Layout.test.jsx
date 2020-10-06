import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from '../Layout.component';

Enzyme.configure({ adapter: new Adapter() });

it('Renders button without exploding', () => {
  const button = renderer.create(<Layout>children</Layout>);
  const tree = button.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Searchbar from '../SearchBar.component';

Enzyme.configure({ adapter: new Adapter() });

it('Renders button without exploding', () => {
  const searchBar = renderer.create(<Searchbar />);
  const tree = searchBar.toJSON();
  expect(tree).toMatchSnapshot();
});

it('executes submit', () => {
  const wrapper = mount(<Searchbar />);
  const input = wrapper.find('#searchBar');
  console.log(input);
});

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Searchbar from '../SearchBar.component';

Enzyme.configure({ adapter: new Adapter() });

it('Renders button without exploding', () => {
  const video = {};
  const searchBar = renderer.create(<Searchbar video={video} />);
  const tree = searchBar.toJSON();
  expect(tree).toMatchSnapshot();
});

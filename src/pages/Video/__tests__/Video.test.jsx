import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import VideoPage from '../Video.page';

Enzyme.configure({ adapter: new Adapter() });

it('Renders without exploding', () => {
  const notFound = renderer.create(
    <BrowserRouter>
      <VideoPage />
    </BrowserRouter>
  );
  const tree = notFound.toJSON();
  expect(tree).toMatchSnapshot();
});

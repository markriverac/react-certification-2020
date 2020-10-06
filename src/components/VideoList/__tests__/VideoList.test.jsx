import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import VideoList from '../VideoList.component';

Enzyme.configure({ adapter: new Adapter() });

it('Renders without exploding', () => {
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
  const button = renderer.create(
    <BrowserRouter>
      <VideoList videos={videos} />
    </BrowserRouter>
  );
  const tree = button.toJSON();
  expect(tree).toMatchSnapshot();
});

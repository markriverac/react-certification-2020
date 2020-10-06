import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserContext from '../../../providers/UserProvider/User.context';
import VideoDetail from '../VideoDetail.component';
import UserProvider from '../../../providers/UserProvider/User.provider';

Enzyme.configure({ adapter: new Adapter() });
const videoDetail = {
  id: 'id',
  snippet: {
    localized: { title: 'title' },
    description: 'description',
  },
};

it('Renders without exploding', () => {
  const videoDetailComponent = renderer.create(
    <UserProvider>
      <VideoDetail videoDetail={videoDetail} />
    </UserProvider>
  );
  const tree = videoDetailComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders favorite button when logged in', () => {
  const userState = { isAuth: true, favorites: [] };
  const videoDetailComponent = renderer.create(
    <UserContext.Provider value={{ userState }}>
      <VideoDetail videoDetail={videoDetail} />
    </UserContext.Provider>
  );
  const tree = videoDetailComponent.toJSON();
  expect(tree.children[1].children[1].children[0].type).toEqual('button');
});

it('does not render favorite button when not logged in', () => {
  const userState = { isAuth: false };
  const videoDetailComponent = renderer.create(
    <UserContext.Provider value={{ userState }}>
      <VideoDetail videoDetail={videoDetail} />
    </UserContext.Provider>
  );
  const tree = videoDetailComponent.toJSON();
  expect(tree.children[1].children[1].children).toEqual(null);
});

it('Renders without exploding when no videodetailid', () => {
  const videoNull = videoDetail;
  videoNull.id = null;
  const videoDetailComponent = renderer.create(
    <UserProvider>
      <VideoDetail videoDetail={videoNull} />
    </UserProvider>
  );
  const tree = videoDetailComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

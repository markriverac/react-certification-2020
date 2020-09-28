import axios from 'axios';

const KEY = 'AIzaSyCpa8FM3BcvzKiCsg1_yAAFpW6Vvzoa2EM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

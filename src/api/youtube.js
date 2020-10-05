import axios from 'axios';

const KEY = 'AIzaSyCL0fGlNL_fKWHYcmpc03kabYuGmGd1wHg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

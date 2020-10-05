import axios from 'axios';

const KEY = 'AIzaSyCV9cD23BXYQW6umzE6W_Qb4tbSSbG6Ohw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

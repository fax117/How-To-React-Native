import axios from 'axios';

const postRequest = async (urlToShorten: string) =>
  await axios.post('https://url-shortener-server.onrender.com/api/alias', {
    url: urlToShorten,
  });

export default postRequest;

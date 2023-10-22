import axios from 'axios';
import md5 from 'md5';

const MAX_BEFORE_TIMEOUT = 3000;

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: MAX_BEFORE_TIMEOUT,
});

// https://developer.marvel.com/documentation/authorization
const baseQueryParams = () => {
  const ts = Date.now();

  return {
    ts,
    apikey: process.env.REACT_APP_MARVEL_API_KEY,
    hash: md5(`${ts}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_API_KEY}`),
  };
};

const get = (url, query) => instance.get(url, {
  params: {
    ...query,
    ...baseQueryParams(),
  },
}).catch((error) => {
  throw new Error(error.message);
});

export { instance as api, get };

import axios from 'axios';

async function httpRequest(method, url, request) {
  try {
    const response = await axios[method](url, request);
    return response;
  } catch (err) {
    console.error({ [method]: err.message });
  }
}

export default {
  get(url, request) {
    return httpRequest('get', url, request);
  },

  delete(url, request) {
    return httpRequest('delete', url, request);
  },

  post(url, request) {
    return httpRequest('post', url, request);
  },

  put(url, request) {
    return httpRequest('put', url, request);
  },

  patch(url, request) {
    return httpRequest('patch', url, request);
  }
};

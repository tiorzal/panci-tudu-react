import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3003/',
});

// instance.interceptors.request.use(function (err) {console.log(err)});
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error);
  return Promise.reject(error);
});

export default instance
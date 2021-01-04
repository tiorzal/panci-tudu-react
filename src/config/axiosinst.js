import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3003/',
});

// instance.interceptors.request.use(function (err) {console.log(err)});
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(error.response);
  // Promise.reject(error).catch(err => console.log(err))

  return Promise.resolve();
});

export default instance
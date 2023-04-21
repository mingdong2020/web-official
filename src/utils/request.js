import axios from 'axios';
import qs from 'qs';

export default function request(url, method, params) {
  return new Promise((ret, rej) => {
    const instance = axios.create({
      baseURL: 'https://mdqygl.cn/',
      timeout: 8000,
      headers: {}
    })
    const config = {
      url,
      method,
      data: qs.stringify({
        ...params
      })
    }
    instance.interceptors.request.use(function(config) {
      return config;
    }, function(err) {
      console.log(err)
    })
    instance.request(config)
    .then((res) => {
      console.log(res, '@res');
      if (res.status === 200) {
        ret(res.data);
      } else {
        rej(res);
      }
    })
    .catch((err) => {
      rej(err);
    })
  })
}
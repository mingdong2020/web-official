import request from '../utils/request';

export function apiMail(params) {
  return request('/api/send', 'post', params);
}

export function initData(params) {
  return request('/api/abc.json', 'get', params);
}
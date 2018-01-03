/**
 * Created by junji on 2017/12/27.
 */

import Vue from 'vue'
import Axios from 'axios'
import $ from 'jquery'

import { Message } from 'element-ui'

import Fuc from './common'

Vue.prototype.Fuc = Fuc;

// 添加一个请求拦截器
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log(config)

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
Axios.interceptors.response.use(function (response) {

  Message('这是一条消息提示')

  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


Vue.prototype.$http = Axios;


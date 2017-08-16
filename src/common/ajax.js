'use strict';

var reqwest = require('reqwest');
var ajax = {};

var Util = require('./util.js');
// const baseUrl = 'http://localhost:8005';
// const baseUrl = 'http://haomams-dev.hz.netease.com';
const baseUrl = '';

ajax.request = function(opt) {
    var oldError = opt.error,
        oldSuccess = opt.success,
        oldComplete = opt.complete,
        oldOtherError = opt.otherError;

    opt.url =  baseUrl + opt.url;
    opt.data = opt.data || {};
    opt.timeout = opt.timeout || 20000;
    opt.crossOrigin = true; // 允许跨域请求
    opt.withCredentials = true;  // 允许带cookie的跨域请求

    if(opt.method === 'get') {
        opt.data.t = new Date().getTime(); // get请求加上时间戳
        opt.data = Util.object2query(opt.data); // get请求参数序列化
    }
    if(opt.contentType === 'application/json') {
        opt.data = JSON.stringify(opt.data);
    }

    if(opt.contentType === 'application/x-www-form-urlencoded'){
        opt.data = Util.object2query(opt.data);
    }

    opt.success = function(res) {
        // 根据后端返回的状态码
        if(!res.state){
            oldOtherError && oldOtherError();
        } else if(res.state === 'success'){
            oldSuccess && oldSuccess(res.data);
        } else {
            // 错误情况: res.state: fail和error. 将所有信息返回，包括exceptionCode
            oldError && oldError(res);
        }

    }

    opt.error = function(res) {
        // 如果有otherError回调则回调otherError
        if(oldOtherError){
            // 请求超时
            oldOtherError();
        }else{
            oldError && oldError(res);
        }
    }

    opt.complete = function(res) {
        oldComplete && oldComplete(res);
    }

    reqwest(opt);
}

/**
 * get请求
 *
 * @param {string} url 不带域名端口号的url地址
 * @param {object} data 参数对象
 * @param {function} success 请求成功回调
 * @param {function} error 请求失败回调
 */
ajax.get = function(url, data, success, error, otherError) {
    ajax.request({
        url: url,
        data: data,
        method: 'get',
        type: 'json',
        success: success,
        error: error,
        otherError: otherError
    });
}

/**
 * post请求
 *
 * @param {string} url 不带域名端口号的url地址
 * @param {object} data 参数对象
 * @param {function} success 请求成功回调
 * @param {function} error 请求失败回调
 */
ajax.post = function(url, data, success, error, otherError) {
    ajax.request({
        url: url,
        data: data,
        method: 'post',
        type: 'json',
        contentType: 'application/json',
        success: success,
        error: error,
        otherError: otherError
    })
}

ajax.postUrlencode = function(url, data, success, error, otherError){
    ajax.request({
        url: url,
        data: data,
        method: 'post',
        type: 'json',
        contentType: 'application/x-www-form-urlencoded',
        success: success,
        error: error,
        otherError: otherError
    })
}


/**
 *  post 请求 content-type: multipart/form-data
 */
ajax.postForm = function(url, data, success, error, otherError){
    ajax.request({
        url: url,
        data: data,
        method: 'post',
        type: 'json',
        processData: false,
        success: success,
        error: error,
        otherError: otherError
    })
}

module.exports = ajax;

'use strict';

var Util = {
    isTypeOf: function (_data, _type) {
        try {
            _type = _type.toLowerCase();
            if (_data === null) return _type == 'null';
            if (_data === undefined) return _type == 'undefined';
            return Object.prototype.toString.call(_data).toLowerCase() == '[object ' + _type + ']';
        } catch (e) {
            return !1;
        }
    },
    isFunction: function (_data) {
        return this.isTypeOf(_data, 'function');
    },
    isData: function (_data) {
        return this.isTypeOf(_data, 'date');
    },
    isArray: function (_data) {
        return this.isTypeOf(_data, 'array');
    },
    isObject: function (_data) {
        return this.isTypeOf(_data, 'object');
    },
    object2string: function (_object, _split, _encode) {
        if (!_object) return '';
        var _arr = [];
        for (var i in _object) {
            if(_object.hasOwnProperty(i)){
                var _value = _object[i];
                if (this.isFunction(_value)) {
                    _value = '';
                }
                if (this.isData(_value)) {
                    _value = _value.getTime();
                } else if (this.isArray(_value)) {
                    _value = _value.join(',');
                } else if (this.isObject(_value)) {
                    _value = JSON.stringify(_value);
                }
                if (!!_encode) {
                    _value = encodeURIComponent(_value);
                }
                _arr.push(encodeURIComponent(i) + '=' + _value);
                }
        }
        return _arr.join(_split || ',');
    },
    object2query: function (_object) {
        return this.object2string(_object, '&', !0);
    },
    /**
     * @method getUrlParam(_url, _key) 获取url参数值
     * @public
     * @param  {string, string}
     * @return {void}
     */
    getUrlParam: function (_url, _key) {
        var _u = _url;
        if (_u.indexOf('?') != -1 && _u.indexOf(_key) != -1) {
            // _u = decodeURIComponent(_u);
            var _s = _u.split('?')[1].split('&');
            for (var i = 0, _l = _s.length; i < _l; i++) {
                if (_s[i].indexOf(_key + '=') === 0) {
                    return _s[i].split('=')[1];
                }
            }
        } else {
            return "";
        }
    },

    /**
     * @method getScrollTop() 获取滚动条的滚动距离
     * @public
     * @param  {void}
     * @return {void}
     */
    getScrollTop: function () {
        var scrollTop = 0, bodyst = 0, documentst = 0;
        if (document.body) {
            bodyst = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentst = document.documentElement.scrollTop;
        }
        scrollTop = (bodyst - documentst > 0) ? bodyst : documentst;
        return scrollTop;
    },
    /**
     * @method getScrollTop() 获取文档的高度
     * @public
     * @param  {void}
     * @return {void}
     */
    getScrollHeight: function () {
        var scrollHeight = 0, bodysh = 0, documentsh = 0;
        if (document.body) {
            bodysh = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentsh = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodysh - documentsh > 0) ? bodysh : documentsh;
        return scrollHeight;
    },
    /**
     * @method getScrollTop() 获取浏览器的可视高度
     * @public
     * @param  {void}
     * @return {void}
     */
    getWindowHeight: function () {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    },
    /**
     * cookie操作,获取指定名字的cookie
     * @param  {String} name cookie名
     * @return {String}      查询cookie值结果
     */
    getCookie: function (name) {
        var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");

        if(arr = document.cookie.match(reg))

            return decodeURIComponent(arr[2]);
        else
            return null;
    },
    /**
     * 设置cookie
     * @param {Object} opt 设置参数
     * @return 无
     */
    setCookie: function (opt) {
        var cookieText = encodeURIComponent(opt.name) + '=' +
            encodeURIComponent(opt.value);
        if (this.type(opt.expires) == 'date') {
            cookieText += " ; expires=" + opt.expires.toGMTString();
        }
        if (opt.path) {
            cookieText += " ; path=" + opt.path;
        }
        if (opt.domain) {
            cookieText += " ; domain=" + opt.domain;
        }
        if (opt.secure) {
            cookieText += " ; secure";
        }
        document.cookie = cookieText;
    },
    /**
     * 重置cookie
     * @param {Object} opt 设置参数
     * @return 无
     */
    unsetCookie: function (opt) {
        opt.value = "";
        opt.expires = new Date(0);
        this.setCookie(opt);
    },
    preventDefault: function (ev){
        if(ev.preventDefault&&typeof ev.preventDefault == 'function'){
            ev.preventDefault();
        }else{
            window.event.returnValue = false;
        }
    }

}
module.exports = Util;



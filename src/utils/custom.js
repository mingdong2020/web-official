/**
 * 【共用方法】设置cookie
 */
 export function setCookie(name, value, hours) {
  var exp = new Date();
  exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
  document.cookie = name + "="+ encodeURI (value) + ";expires=" + exp.toGMTString();
}
/**
 * 【共用方法】读取cookie
 */
export function getCookie(name) {
  let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (document.cookie.match(reg)) {
    let arr = document.cookie.match(reg);
    return decodeURI(arr[2]);
  } else {
    return null;
  }
}
/**
 * 【共用方法】删除cookie
 */
export function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if(cval != null)
    document.cookie= name + "=" + cval + ";expires=" + exp.toGMTString();
}
/**
 * 【共用方法】是否为safari浏览器
 */
export function isSafari() {
  if ((/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))) {
    return true;
  } else {
    return false;
  }
}
/**
 * 【共用方法】异步加载js文件
 */
export function insertFile(url, type = false) {
  return new Promise((ret, rej) => {
    let fileSdk = document.createElement("script");
    fileSdk.type = "text/javascript";
    fileSdk.src = url;
    type ? document.head.appendChild(fileSdk) : document.body.appendChild(fileSdk)
    fileSdk.onload = fileSdk.onreadystatechange = function () {
      if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
        ret(true);
      } else {
        rej(false);
      }
      fileSdk.onload = fileSdk.onreadystatechange = null;
    }
  })
}
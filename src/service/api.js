import Taro from "@tarojs/taro";
import {COOKIE_KEY} from "../constants/common";
import BASE_URL from "./config";
import interceptors from "./interceptors";

interceptors.forEach(i => Taro.addInterceptor(i));

export default {
  baseOptions(params, method = "GET") {
    // 获取cookie内容
    let cookie = Taro.getStorageSync(COOKIE_KEY);

    let {url, data} = params;
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    const option = {
      url: url.indexOf("http") !== -1 ? url : BASE_URL + url,
      data: data,
      method: method,
      header: {
        "content-type": contentType,
        "Cookie": cookie
        // Authorization: Taro.getStorageSync("Authorization")
      }
    };
    return Taro.request(option);
  },
  get(url, data = "") {
    let option = {url, data};
    return this.baseOptions(option);
  },
  post: function (url, data, contentType) {
    let params = {url, data, contentType};
    return this.baseOptions(params, "POST");
  },
  put(url, data = "") {
    let option = {url, data};
    return this.baseOptions(option, "PUT");
  },
  delete(url, data = "") {
    let option = {url, data};
    return this.baseOptions(option, "DELETE");
  }
};

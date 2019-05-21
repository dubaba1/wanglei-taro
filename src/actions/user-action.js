import Taro from "@tarojs/taro";
import {userActionTypes} from '../constants/action-type'
import API from '../service/api'
import {isHttpSuccess} from "../utils/common";

const changeUserStatus = (status) => {
  return {
    type: userActionTypes.CHANGE_LOGIN_STATUS,
    status
  }
};

const code2session = (code) => {
  let codeUrl = '/weChat/applet/login/code2session/' + code;
  // 返回函数，异步dispatch
  return async dispatch => {
    let result = await API.get(codeUrl).catch(() => {
      Taro.showToast({
        title: '服务请求错误',
        icon: 'none'
      })
    });
    if (isHttpSuccess(result)) {
      // 请求成功
      dispatch({
        type: userActionTypes.SET_CODE2SESSION_RES,
        code2sessionRes:result.data
      });
      // 判断是否注册，如果没有注册则调到登陆注册界面，如果注册了就登陆
      if(result.data.isRegister){
        // 登陆
      } else{
        // 跳转到欢迎页面
        Taro.redirectTo({
          url:'/pages/welcome/register/index'
        })
      }
    }
  };
};


export default {
  changeUserStatus,
  code2session
}

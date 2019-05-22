import Taro from "@tarojs/taro";
import {userActionTypes} from '../constants/action-type'
import API from '../service/api'
import {isHttpSuccess} from "../utils/common";
import {COOKIE_KEY} from "../constants/common";

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
        code2sessionRes: result.data
      });
      // 判断是否注册，如果没有注册则调到登陆注册界面，如果注册了就登陆
      if (result.data.isRegister) {
        // 登陆
        dispatch(login(result.data.openid));
      } else {
        // 跳转到欢迎页面
        Taro.redirectTo({
          url: '/pages/welcome/register/index'
        })
      }
    }
  };
};

const register = (userInfo) => {
  return async dispatch => {
    let result = await API.post("/weChat/user/register",userInfo).catch(() => {
      Taro.showToast({
        title: '服务请求错误',
        icon: 'none'
      })
    });
    if (isHttpSuccess(result)) {
      // 请求成功
      dispatch({
        type: userActionTypes.USER_REGISTER_SUCCESS,
        userInfo: result.data
      });
      // 调用用户登录的接口
      dispatch(login(result.data.wechatOpenId));
    }
  };
};
//select by openId
const select = (openId) => {
  return async dispatch => {
    let result = await API.post("/weChat/user/select"+openId).catch(() => {
      Taro.showToast({
        title: '服务请求错误',
        icon: 'none'
      })
    });
    if (isHttpSuccess(result)) {
      // 请求成功
      dispatch({
        type: userActionTypes.USER_SELECT_SUCCESS,
        userInfo: result.data
      });
      // 调用用户登录的接口
      dispatch(login(result.data.wechatOpenId));
    }
  };
};



const login =(openId)=>{
  return async dispatch => {
    let result = await API.get("/weChat/applet/login/byOpenId/"+openId).catch(() => {
      Taro.showToast({
        title: '服务请求错误',
        icon: 'none'
      })
    });
    if (isHttpSuccess(result)) {
      Taro.setStorageSync(COOKIE_KEY, `JSESSIONID=${result.sessionId}`);
      // 请求成功
      dispatch({
        type: userActionTypes.USER_LOGIN_SUCCESS,
        userInfo: result.data
      });
      //  {
      //           "text": "找工作",
      //           "pagePath": "pages/deliver/deliver",
      //           "iconPath": "assets/icon/未选公司.png",
      //           "selectedIconPath": "assets/icon/公司.png"
      //         },
      //         {
      //           "text": "找人才",
      //           "pagePath": "pages/employer/employer",
      //           "iconPath": "assets/icon/未选人才.png",
      //           "selectedIconPath": "assets/icon/人才.png"
      //         },
      Taro.switchTab({
        url:'/pages/index/index'
      });
      setTimeout(()=>{
        const text = result.data.type == 0?'找工作':'找人才';
        const iconPath = result.data.type == 0?'assets/icon/未选公司.png':'assets/icon/未选人才.png';
        const selectedIconPath = result.data.type == 0?'assets/icon/公司.png':'assets/icon/人才.png';
        Taro.setTabBarItem({
          index:1,
          text:text,
          iconPath:iconPath,
          selectedIconPath:selectedIconPath
        });
      },500);
    }
  };
};

export default {
  changeUserStatus,
  code2session,
  register,
  login,
  select
}

import Taro from "@tarojs/taro";
import {userActionTypes} from '../constants/action-type'
import API from '../service/api'
import {isHttpSuccess} from "../utils/common";
import {COOKIE_KEY} from "../constants/common";


const isCollection = (isCollection) =>{
  return{
    type:userActionTypes.IS_COLLECTION,
    isCollection
  }
};
const changeUserStatus = (status) => {
  return {
    type: userActionTypes.CHANGE_LOGIN_STATUS,
    status
  }
};

const changeUserInfo = (userInfo) => {
  return {
    type: userActionTypes.CHANGE_USER_INFO,
    userInfo,
  }
};

const changeComInfo = (companyInfo) => {
  return {
    type: userActionTypes.CHANGE_COM_INFO,
    companyInfo,
  }
};
const ShowCompanyList = (companyList) => {
  return {
    type: userActionTypes.COMPANY_LIST,
    companyList
  }
}
const ShowUserList = (userList) => {
  return {
    type: userActionTypes.USER_LIST,
    userList
  }
}

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
    let result = await API.post("/weChat/user/register", userInfo).catch(() => {
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

const login = (openId) => {
  return async dispatch => {
    let result = await API.get("/weChat/applet/login/byOpenId/" + openId).catch(() => {
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
      Taro.switchTab({
        url: '/pages/index/index'
      });

      if (result.data.type == 0) {
        API.get("/weChat/com/detail/" + result.data.userId).then(res => {
          if (res.code == 0) {
            dispatch(changeComInfo(res.data));
          }
        })
        API.post("/weChat/com/companyList", {}).then(res => {
          if (res.code == 0) {
            dispatch(ShowCompanyList(res.data));
          }
        })
      } else{
        API.post("/weChat/com/userList", {}).then(res => {
          if (res.code == 0) {
            dispatch(ShowUserList(res.data));
          }
        })
      }


    }
  };
};

const setCompanyDetail=(companyDetail)=>{
  return {
    type:userActionTypes.CHANGE_COMPANY_DETAIL,
    companyDetail
  }
}

const setUserDetail=(userDetail)=>{
  return {
    type:userActionTypes.CHANGE_USER_DETAIL,
    userDetail
  }
}

export default {
  changeUserStatus,
  code2session,
  register,
  login,
  changeUserInfo,
  changeComInfo,
  ShowCompanyList,
  ShowUserList,
  isCollection,
  setCompanyDetail,
  setUserDetail
}

import {userActionTypes} from '../constants/action-type'

const INITIAL_STATE = {
  status: 0,//登录状态,0未登录，1已经登陆
  userInfo: {},//用户信息
  code2sessionRes: {},//
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case userActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case userActionTypes.CHANGE_LOGIN_STATUS:
      return {
        ...state,
        status: action.status
      };
    case userActionTypes.SET_CODE2SESSION_RES:
      return {
        ...state,
        code2sessionRes: action.code2sessionRes
      };
    case userActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.data,
        status: 1
      };
    default:
      return state
  }
}

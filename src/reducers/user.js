import {userActionTypes} from '../constants/action-type'

const INITIAL_STATE = {
  status: 0,//登录状态,0未登录，1已经登陆
  userInfo: {
    workList: [],
    educationList: []
  },//用户信息
  code2sessionRes: {},//
  companyInfo: {},
  companyList: [],
  userList:[],
  isCollection: {},
  companyDetail:{},
  userDetail: {},
  setUserDetail:{}
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
    case userActionTypes.USER_SELECT_SUCCESS:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case userActionTypes.SET_CODE2SESSION_RES:
      return {
        ...state,
        code2sessionRes: action.code2sessionRes
      };
    case userActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.userInfo,
        status: 1
      };
    case userActionTypes.CHANGE_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case userActionTypes.CHANGE_COM_INFO:
      return {
        ...state,
        companyInfo: action.companyInfo
      };
    case userActionTypes.COMPANY_LIST:
      return {
        ...state,
        companyList: action.companyList
      };
    case userActionTypes.USER_LIST:
      return {
        ...state,
        userList: action.userList
      };
    case userActionTypes.IS_COLLECTION:
      return{
        ...state,
        isCollection: action.isCollection
      };
    case userActionTypes.CHANGE_COMPANY_DETAIL:
      return {
        ...state,
        companyDetail: action.companyDetail
      };
    case userActionTypes.CHANGE_USER_DETAIL:
      return{
        ...state,
        userDetail:  action.userDetail
      }
    default:
      return state
  }
}

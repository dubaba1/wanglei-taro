import Taro, {Component} from '@tarojs/taro'
import {Button, View} from '@tarojs/components'

import {connect} from "@tarojs/redux";

import userActions from '../../../actions/user-action'
import './index.scss'

@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchRegisterUser(userInfo) {
      dispatch(userActions.register(userInfo));
    }
  }))
class Index extends Component {
  config = {
    navigationBarTitleText: '加入我们'
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  constructor() {
    super(...arguments);
    this.state = {};
  }

  componentWillUnmount() {
    // 如果已经能够获取用户信息直接注册账号
  }
  render() {
    return (
      <View className='index'>
        <Button className='join_btn' open-type='getUserInfo' onClick={this.getUserInfo.bind(this, 0)}
          bindgetuserinfo={this.getUserInfo.bind(this,0)}
        > 我是学生
        </Button>
        <Button className='join_btn' open-type='getUserInfo' onClick={this.getUserInfo.bind(this, 1)}
          bindgetuserinfo={this.getUserInfo.bind(this,1)}
        > 我是企业
        </Button>
      </View>
    )
  }

  getUserInfo(type, e) {
    if (e.detail.userInfo) {
      // 成功获取用户信息，进行用户信息的展示，同时注册账号
      let userInfo = e.detail.userInfo;
      userInfo.type = type;
      userInfo.nickname = userInfo.nickName;
      userInfo.wechatAvatar = userInfo.avatarUrl;
      userInfo.wechatOpenId = this.props.code2sessionRes.openid;
      this.props.dispatchRegisterUser(userInfo);
    }
  }
}

export default Index

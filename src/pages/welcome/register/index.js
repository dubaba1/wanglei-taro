import Taro, {Component} from '@tarojs/taro'
import {Button, View} from '@tarojs/components'

import './index.scss'
import {AtButton} from "taro-ui";

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

  componentDidShow() {
  }

  componentDidHide() {
  }

  onChange() {

  }

  render() {
    return (
      <View className='index'>
        <Button className='join_btn' open-type='getUserInfo' onClick={this.getUserInfo}
                bindgetuserinfo={this.getUserInfo}
        > 加入我们
        </Button>
      </View>
    )
  }

  getUserInfo(e) {
    console.log(e);
    if (e.detail.userInfo) {
      // 成功获取用户信息，进行用户信息的展示，同时注册账号

    }
  }
}

export default Index

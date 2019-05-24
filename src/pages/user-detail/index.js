import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import backgroundImg from '../../assets/imgs/图书馆背景.jpg'
import avatar from '../../assets/imgs/default-avatar.jpg'

import './index.scss'
import {connect} from "@tarojs/redux";
import userActions from "../../actions/user-action";
import {AtIcon} from "taro-ui";
import API from "../../service/api";
import {isHttpSuccess, showToast} from "../../utils/common";


@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchSelectUser(openId) {
      dispatch(userActions.select(openId));
    }
  }))
class Index extends Component {
  config = {
    navigationBarTitleText: '简历'
  };


  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  constructor() {
    super(...arguments);
    this.state = {};

  }

  render() {
    let user = this.props.userList[this.$router.params.index];
    if (user == null) user = {};

    return (
      <View className='index'>
        <View className='user-detail-header'>
          <Image src={backgroundImg} className='user-detail-header__background-image'/>
          <View className='user-detail-header__avatar'>
            <Image src={user.wechatAvatar}  />
          </View>
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>基本信息</View>
        </View>
        <View className='content-list user-detail-desc'>
          <View className='content-list__item'>
            <View className='content-list__item__label'>姓名</View>
            <View className='content-list__item__content'>{user.nickname}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>性别：</View>
            <View className='content-list__item__content'>男</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>学历：</View>
            <View className='content-list__item__content'>本科</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>年龄：</View>
            <View className='content-list__item__content'>{user.age}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>所在城市：</View>
            <View className='content-list__item__content'>{user.city}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>联系电话：</View>
            <View className='content-list__item__content'>{user.mobile}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>联系邮箱：</View>
            <View className='content-list__item__content'>{user.email}</View>
          </View>
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>学历信息</View>
        </View>
        <View className='single-list'>
          {
            user.educationList.map((item, index) => {
              return (
                <View className='single-list__item'>
                  <View>
                    <View className='dot' />
                    <Text> {item}</Text>
                  </View>

                </View>
              )
            })
          }
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>工作经历</View>
        </View>
        <View className='single-list'>
          {
            user.workList.map((item, index) => {
              return (
                <View className='single-list__item'>
                  <View>
                    <View className='dot' />
                    <Text> {item}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Index

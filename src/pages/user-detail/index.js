import Taro, {Component} from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import backgroundImg from '../../assets/imgs/图书馆背景.jpg'
import avatar from '../../assets/imgs/default-avatar.jpg'

import './index.scss'

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
    return (
      <View className='index'>
        <View className='user-detail-header'>
          <Image src={backgroundImg} className='user-detail-header__background-image'/>
          <View className='user-detail-header__avatar'>
            <Image src={avatar}  />
          </View>
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>基本信息</View>
        </View>
        <View className='content-list user-detail-desc'>
          <View className='content-list__item'>
            <View className='content-list__item__label'>姓名</View>
            <View className='content-list__item__content'>孔祥瑞</View>
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
            <View className='content-list__item__content'>18</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>所在城市：</View>
            <View className='content-list__item__content'>石家庄</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>联系电话：</View>
            <View className='content-list__item__content'>13014338982</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>联系邮箱：</View>
            <View className='content-list__item__content'>kxr224@163.com</View>
          </View>
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>学历信息</View>
        </View>
        <View className='single-list'>
          <View className='single-list__item'>
            <View className='dot' />
            2019年毕业
          </View>
          <View className='single-list__item'>
            <View className='dot' />
            2019年毕业
          </View>
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>工作经历</View>
        </View>
        <View className='single-list'>
          <View className='single-list__item'>
            <View className='dot' />
            2019年毕业
          </View>
          <View className='single-list__item'>
            <View className='dot' />
            2019年毕业
          </View>
        </View>
      </View>
    )
  }
}

export default Index

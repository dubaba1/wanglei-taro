import Taro, {Component} from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import companyImg from '../../assets/imgs/公司.jpg'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '公司详情'
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
        <View className='background-image'>
          <Image src={companyImg} />
        </View>
        <View className='divider-view' />
        <View className='content-list'>
          <View className='content-list__item'>
            <View className='content-list__item__label'>公司名称：</View>
            <View className='content-list__item__content'>河北尚云</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>联系方式：</View>
            <View className='content-list__item__content'>13014338982</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>招聘职位：</View>
            <View className='content-list__item__content'>java开发工程师</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>薪资待遇：</View>
            <View className='content-list__item__content'>9k-99k</View>
          </View>
        </View>
        <View className='divider-view' />
        <View className='company-intro'>
          <View className='company-intro__title'>公司介绍</View>
          <View className='company-intro__content'>
            我们公司并称这我们公司并称这我们公司并称这我们公司并称这
            我们公司并称这我们公司并称这我们公司并称这我们公司并称这
            我们公司并称这我们公司并称这我们公司并称这
          </View>
        </View>
      </View>
    )
  }
}

export default Index

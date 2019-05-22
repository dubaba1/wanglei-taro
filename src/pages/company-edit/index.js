import Taro, {Component} from '@tarojs/taro'
import {Image, Picker, View} from '@tarojs/components'
import companyImg from '../../assets/imgs/公司.jpg'

import './index.scss'
import {AtActionSheet, AtActionSheetItem,AtButton, AtInput} from "taro-ui";

class Index extends Component {

  config = {
    navigationBarTitleText: '公司信息编辑'
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

          <View className='panel-label__title'>基本信息</View>

        <View className='baseInfo-edit'>
          <AtInput
            name='name'
            title='公司名'
            type='text'
          />
          <AtInput
            name='place'
            title='地址'
            type='text'
          />
          <AtInput
            name='mobile'
            title='学历'
            type='text'
          />
          <AtInput
            name='jobs'
            title='工作岗位'
            type='text'
          />
        </View>

            <View className='panel-label__title'>详细介绍</View>
              <View className='intro'>
                <input></input>
              </View>

        <AtButton className='bt-t'>提交信息</AtButton>


      </View>
    )
  }
}

export default Index

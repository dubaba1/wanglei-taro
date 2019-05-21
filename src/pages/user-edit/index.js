import Taro, {Component} from '@tarojs/taro'
import {Image, Picker, Text, View} from '@tarojs/components'
import backgroundImg from '../../assets/imgs/图书馆背景.jpg'
import avatar from '../../assets/imgs/default-avatar.jpg'

import './index.scss'
import {AtActionSheet, AtActionSheetItem, AtInput} from "taro-ui";

class Index extends Component {

  config = {
    navigationBarTitleText: '个人信息编辑'
  };

  constructor() {
    super(...arguments);
    this.state = {
      isOpenGenderSelect: false,
      userInfo: {
        education:'',
        city:''
      }
    };
  }

  handleChange(e) {

  }

  openSelectGender() {
    this.setState({
      isOpenGenderSelect: true
    })
  }

  selectGender(value) {
    this.setState({
      isOpenGenderSelect: false,
      userInfo: {
        ...this.state.userInfo,
        gender: value
      }
    })
  }

  onDateChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        birthday: e.detail.value
      }
    })
  };

  render() {
    return (
      <View className='index'>
        <View className='panel-label'>
          <View className='panel-label__title'>基本信息</View>
        </View>
        <View className='baseInfo-edit'>
          <AtInput
            name='nickname'
            title='姓名'
            type='text'
            value={this.state.userInfo.nickname}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='gender'
            title='性别'
            type='text'
            editable={false}
            onClick={this.openSelectGender.bind(this)}
            value={this.state.userInfo.gender === 1 ? '男' : this.state.userInfo.gender === 2 ? '女' : ''}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='education'
            title='学历'
            type='text'
            value={this.state.userInfo.education}
            onChange={this.handleChange.bind(this)}
          />

          <View>
            <Picker mode='date' onChange={this.onDateChange}>
              <View className='picker'>
                <View className='picker__label'>生日</View>
               <View className='picker__value'> {this.state.userInfo.birthday}</View>
              </View>
            </Picker>
          </View>
          <AtInput
            name='city'
            title='所在城市'
            type='text'
            value={this.state.userInfo.city}
            onChange={this.handleChange.bind(this)}
          />
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>学历信息</View>
        </View>
        <View className='single-list'>
          <View className='single-list__item'>
            <View className='dot'/>
            2019年毕业
          </View>
          <View className='single-list__item'>
            <View className='dot'/>
            2019年毕业
          </View>
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>工作经历</View>
        </View>
        <View className='single-list'>
          <View className='single-list__item'>
            <View className='dot'/>
            2019年毕业
          </View>
          <View className='single-list__item'>
            <View className='dot'/>
            2019年毕业
          </View>
        </View>
        <AtActionSheet isOpened={this.state.isOpenGenderSelect}>
          <AtActionSheetItem onClick={this.selectGender.bind(this, 1)}>
            男
          </AtActionSheetItem>
          <AtActionSheetItem onClick={this.selectGender.bind(this, 2)}>
            女
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}

export default Index

import Taro, {Component} from '@tarojs/taro'
import {Picker, Text, View} from '@tarojs/components'
import {AtActionSheet, AtActionSheetItem, AtButton, AtFloatLayout, AtIcon, AtInput, AtTextarea} from "taro-ui";
import {connect} from "@tarojs/redux";
import API from '../../service/api'
import './index.scss'
import {removeByIndex} from "../../utils/list-utils";
import {isHttpSuccess, showToast} from "../../utils/common";
import userActions from '../../actions/user-action'

@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchChangeUserInfo(userInfo) {
      dispatch(userActions.changeUserInfo(userInfo));
    }
  }))
class Index extends Component {

  config = {
    navigationBarTitleText: '个人信息编辑'
  };

  constructor() {
    super(...arguments);
    this.state = {
      isOpenGenderSelect: false,
      isOpenAddWork: false,//是否打开添加工作
      isOpenAddEducation: false,//是否打开添加工作
      user: JSON.parse(JSON.stringify(this.props.userInfo)),
      educationExperienceValue: '',
      workExperienceValue: '',
    };
  }

  handleChange(filed, value) {
    this.setState({
      user: {
        ...this.state.user,
        [filed]: value
      }
    })
  }

  openSelectGender() {
    this.setState({
      isOpenGenderSelect: true
    })
  }

  selectGender(value) {
    this.setState({
      isOpenGenderSelect: false,
      user: {
        ...this.state.user,
        gender: value
      }
    })
  }

  onDateChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        birthday: e.detail.value
      }
    })
  };

  render() {
    const {user, isOpenAddWork, isOpenAddEducation} = this.state;
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
            value={user.nickname}
            onChange={this.handleChange.bind(this, 'nickname')}
          />
          <AtInput
            name='gender'
            title='性别'
            type='text'
            editable={false}
            onClick={this.openSelectGender.bind(this)}
            value={user.gender == 1 ? '男' : user.gender == 2 ? '女' : ''}
          />
          <AtInput
            name='education'
            title='学历'
            type='text'
            value={user.education}
            onChange={this.handleChange.bind(this, 'education')}
          />
          <AtInput
            name='city'
            title='所在城市'
            type='text'
            value={user.city}
            onChange={this.handleChange.bind(this, 'city')}
          />
          <AtInput
            name='mobile'
            title='联系电话'
            type='phone'
            value={user.mobile}
            onChange={this.handleChange.bind(this, 'mobile')}
          />
          <AtInput
            name='email'
            title='邮箱'
            type='text'
            value={user.email}
            onChange={this.handleChange.bind(this, 'email')}
          />
          <View>
            <Picker mode='date' onChange={this.onDateChange}>
              <View className='picker'>
                <View className='picker__label'>生日</View>
                <View className='picker__value'> {user.birthday}</View>
              </View>
            </Picker>
          </View>
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>学历信息</View>
          <AtButton type='primary' size='small' onClick={this.handleShowAddEducation.bind(this, true)}>添加</AtButton>
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
                  <AtIcon value='close' onClick={this.removeEducationByIndex.bind(this, index)}
                    customStyle='font-size:24rpx;' color='#F00'
                  />
                </View>
              )
            })
          }
        </View>
        <AtFloatLayout isOpened={isOpenAddEducation} title='输入教育经历'
          onClose={this.handleShowAddEducation.bind(this, false)}
        >
          <AtTextarea
            value={this.state.educationExperienceValue}
            onChange={this.changeEducationExperience.bind(this)}
            maxLength={200}
            placeholder='输入教育经历...'
          />
          <AtButton type='primary' className='add-button' onClick={this.addEducationConfirm.bind(this)}>确定</AtButton>
        </AtFloatLayout>

        <View className='panel-label'>
          <View className='panel-label__title'>工作经历</View>
          <AtButton type='primary' size='small' onClick={this.handleShowAddWork.bind(this, true)}>添加</AtButton>
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
                  <AtIcon value='close' onClick={this.removeWorkByIndex.bind(this, index)}
                    customStyle='font-size:24rpx;' color='#F00'
                  />
                </View>
              )
            })
          }
        </View>
        <AtFloatLayout isOpened={isOpenAddWork} title='输入工作经历' onClose={this.handleShowAddWork.bind(this, false)}>
          <AtTextarea
            value={this.state.workExperienceValue}
            onChange={this.changeWorkExperience.bind(this)}
            maxLength={200}
            placeholder='输入工作经历...'
          />
          <AtButton type='primary' className='add-button' onClick={this.addWorkConfirm.bind(this)}>确定</AtButton>
        </AtFloatLayout>
        <AtButton type='primary' className='add-button' onClick={this.save.bind(this)}>保存</AtButton>
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

  handleShowAddWork(flag) {
    this.setState({
      isOpenAddWork: flag
    })
  }

  changeWorkExperience(e) {
    this.setState({
      workExperienceValue: e.detail.value
    })
  }

  addWorkConfirm() {
    let workList = Object.assign([], this.state.user.workList);
    workList.push(this.state.workExperienceValue);
    this.setState({
      user:{
        ...this.state.user,
        workList
      },
      isOpenAddWork: false
    });
  }

  removeWorkByIndex(index) {
    let workList = Object.assign([], this.state.user.workList);
    removeByIndex(workList, index);
    this.setState({
      user:{
        ...this.state.user,
        workList
      },
    });
  }

  handleShowAddEducation(flag) {
    this.setState({
      isOpenAddEducation: flag
    })
  }

  changeEducationExperience(e) {
    this.setState({
      educationExperienceValue: e.detail.value
    })
  }

  addEducationConfirm() {
    let educationList = Object.assign([], this.state.user.educationList);
    educationList.push(this.state.educationExperienceValue);
    this.setState({
      user:{
        ...this.state.user,
        educationList
      },
      isOpenAddEducation: false
    });
  }

  removeEducationByIndex(index) {
    let educationList = Object.assign([], this.state.user.educationList);
    removeByIndex(educationList, index);
    this.setState({
      user:{
        ...this.state.user,
        educationList
      },
    });
  }

  save() {
    API.post('/weChat/user/save/userInfo', this.state.user).then(res => {
      if (isHttpSuccess(res)) {
        showToast("更新成功", true);
        this.props.dispatchChangeUserInfo(this.state.user);
        setTimeout(()=>{
          Taro.navigateBack();
        },500);
      }
    })
  }

}

export default Index

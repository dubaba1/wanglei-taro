import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from '@tarojs/components'
import backgroundImg from '../../assets/imgs/图书馆背景.jpg'
import avatar from '../../assets/imgs/default-avatar.jpg'

import './index.scss'
import {connect} from "@tarojs/redux";
import userActions from "../../actions/user-action";
import {AtButton, AtIcon} from "taro-ui";
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
    this.state = {
      isCollection: false}
  };

  componentWillMount() {
    // 能获取到人才的company_user_id,知道是否是收藏了的
    const {userId} = this.props.userDetail; //
    API.post('/weChat/user/selectCompanyCollection', {userId: userId}).then(res => {
      if (isHttpSuccess(res)) {
        // 如果是收藏的
        this.setState({
          isCollection: res.isCollection
        })
      }
    })
  }
  //点击收藏
  collectionUser(){
    const {userId} = this.props.userDetail; //
    API.post("/weChat/user/insertCollectList", {userId: userId}).then(res => {
      console.log(res);
      if (isHttpSuccess(res)) {
        showToast("收藏成功",true);
        // 如果是收藏的
        this.setState({
          isCollection: true
        })
      }
    })
  }
    //取消收藏
  delCollection(){
    const {userId} = this.props.userDetail; //
    API.post("/weChat/user/deleteCollectList", {userId: userId}).then(res => {
      if (isHttpSuccess(res)) {
        // 如果是收藏的
        showToast("取消成功",true);
        this.setState({
          isCollection: false
        })
      }
    })
  }
  render() {
    const userDetail = this.props.userDetail;
    const gender = this.props.userDetail.gender == 1?'男':'女';
    const {isCollection} = this.state;

    return (
      <View className='index'>
        <View className='user-detail-header'>
          <Image src={backgroundImg} className='user-detail-header__background-image'/>
          <View className='user-detail-header__avatar'>
            <Image  />
          </View>
        </View>
        <View className='panel-label'>
          <View className='panel-label__title'>基本信息</View>
        </View>
        <View className='content-list user-detail-desc'>
          <View className='content-list__item'>
            <View className='content-list__item__label'>姓名</View>
            <View className='content-list__item__content'>{userDetail.nickname}</View>
          </View>

          <View className='content-list__item'>
            <View className='content-list__item__label'>性别：</View>
            <View className='content-list__item__content'>{gender}</View>
          </View>

          <View className='content-list__item'>
            <View className='content-list__item__label'>学历：</View>
            <View className='content-list__item__content'>{userDetail.education}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>出生年月：</View>
            <View className='content-list__item__content'>{userDetail.birthday}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>所在城市：</View>
            <View className='content-list__item__content'>{userDetail.city}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>联系电话：</View>
            <View className='content-list__item__content'>{userDetail.mobile}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>联系邮箱：</View>
            <View className='content-list__item__content'>{userDetail.email}</View>
          </View>
        </View>
        {/*<View className='panel-label'>*/}
          {/*<View className='panel-label__title'>学历信息</View>*/}
        {/*</View>*/}
        {/*<View className='single-list'>*/}
          {/*{*/}
            {/*user.educationList.map((item, index) => {*/}
              {/*return (*/}
                {/*<View className='single-list__item'>*/}
                  {/*<View>*/}
                    {/*<View className='dot' />*/}
                    {/*<Text> {item.}</Text>*/}
                  {/*</View>*/}

                {/*</View>*/}
              {/*)*/}
            {/*})*/}
          {/*}*/}
        {/*</View>*/}
        {/*<View className='panel-label'>*/}
          {/*<View className='panel-label__title'>工作经历</View>*/}
        {/*</View>*/}
        {/*<View className='single-list'>*/}
          {/*{*/}
            {/*user.workList.map((item, index) => {*/}
              {/*return (*/}
                {/*<View className='single-list__item'>*/}
                  {/*<View>*/}
                    {/*<View className='dot' />*/}
                    {/*<Text> {item}</Text>*/}
                  {/*</View>*/}
                {/*</View>*/}
              {/*)*/}
            {/*})*/}
          {/*}*/}
        {/*</View>*/}
        {
          !isCollection &&
          <View>
            <AtButton className='bt-t' type='primary' onClick={this.collectionUser.bind(this)} >收藏</AtButton>
          </View>
        }
        {
          isCollection &&
          <View>
            <AtButton className='bt-t1' type='primary' onClick={this.delCollection.bind(this)}>取消收藏</AtButton>
          </View>
        }
      </View>
    )
  }
}

export default Index

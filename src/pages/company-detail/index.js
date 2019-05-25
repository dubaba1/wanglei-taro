import Taro, {Component} from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import companyImg from '../../assets/imgs/公司.jpg'
import {AtFab, AtButton} from 'taro-ui'
import './index.scss'
import {connect} from "@tarojs/redux";
import userActions from "../../actions/user-action";
import API from "../../service/api";
import {isHttpSuccess, showToast} from "../../utils/common";

@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchChangeUserInfo(userInfo) {
      dispatch(userActions.changeUserInfo(userInfo));
    },
    dispatchisCollection(isCollection) {
      dispatch(userActions.isCollection(isCollection));
    }
  }))
class Index extends Component {

  config = {
    navigationBarTitleText: '公司详情'
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  constructor() {
    super(...arguments);
    this.state = {
      isCollection: false,
      isDeliver:false
    };
  }

  componentWillMount() {
    // 能获取到company_user_id,知道是否是收藏了的
    const {userId} = this.props.companyDetail; //
    API.post('/weChat/com/selectCollection', {companyUserId: userId}).then(res => {
      if (isHttpSuccess(res)) {
        // 如果是收藏的
        this.setState({
          isCollection: res.isCollection
        })
      }
    })

    API.post('/weChat/com/selectDeliver', {companyUserId: userId}).then(res => {
      if (isHttpSuccess(res)) {
        // 如果是投递的
        this.setState({
          isDeliver: res.isDeliver
        })
      }
    })
  }
  collectionCompany() {
    const {userId} = this.props.companyDetail; //
    API.post("/weChat/com/insertCollectList", {companyUserId: userId}).then(res => {
      console.log(res);
      if (isHttpSuccess(res)) {
        console.log("收藏成功");
        showToast("收藏成功",true);
        // 如果是收藏的
        this.setState({
          isCollection: true
        })
      }
    })
  }

  delCollection(){
    const {userId} = this.props.companyDetail; //
    API.post("/weChat/com/deleteCollectList", {companyUserId: userId}).then(res => {
      if (isHttpSuccess(res)) {
        // 如果是收藏的
        console.log("取消收藏成功");
        showToast("取消成功",true);
        this.setState({
          isCollection: false
        })
      }
    })
  }

  deliverCompany() {
    const {userId} = this.props.companyDetail; //
    API.post("/weChat/com/insertDeliverList", {companyUserId: userId}).then(res => {
      if (isHttpSuccess(res)) {
        console.log("投递成功");
        showToast("投递成功",true);
        // 如果是投递的
        this.setState({
          isDeliver: true
        })
      }
    })
  }

  delDeliver(){
    const {userId} = this.props.companyDetail; //
    API.post("/weChat/com/deleteDelivertList", {companyUserId: userId}).then(res => {
      if (isHttpSuccess(res)) {
        // 如果是收藏的
        console.log("取消投递成功");
        showToast("取消成功",true);
        this.setState({
          isDeliver: false
        })
      }
    })
  }
  render() {
    const company = this.props.companyDetail;
    const {isCollection} = this.state;
    const {isDeliver} =this.state;
    return (
      <View className='index'>
        <View className='background-image'>
          <Image src={companyImg}/>
        </View>
        <View className='divider-view'/>
        <View className='content-list'>
          <View className='content-list__item'>
            <View className='content-list__item__label'>公司名称：</View>
            <View className='content-list__item__content'>{company.name}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>联系方式：</View>
            <View className='content-list__item__content'>{company.mobile}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>招聘职位：</View>
            <View className='content-list__item__content'>{company.jobs}</View>
          </View>
          <View className='content-list__item'>
            <View className='content-list__item__label'>公司地址：</View>
            <View className='content-list__item__content'>{company.place}</View>
          </View>
        </View>
        <View className='divider-view'/>
        <View className='company-intro'>
          <View className='company-intro__title'>公司介绍</View>
          <View className='company-intro__content'>
            {company.intro}
          </View>
        </View>
        {
          !isCollection &&
          <View>
            <AtButton className='bt-t' type='primary' onClick={this.collectionCompany.bind(this)}>收藏</AtButton>
          </View>
        }
        {
          isCollection &&
          <View>
            <AtButton className='bt-t1' type='primary' onClick={this.delCollection.bind(this)}>取消收藏</AtButton>
          </View>
        }
        {
          !isDeliver &&
          <View>
            <AtButton className='bt-t' type='primary' onClick={this.deliverCompany.bind(this)}>投递</AtButton>
          </View>
        }
        {
          isDeliver &&
          <View>
            <AtButton className='bt-t' type='primary' onClick={this.delDeliver.bind(this)}>取消投递</AtButton>
          </View>
        }
      </View>
    )
  }
}

export default Index

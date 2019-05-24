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
    dispatchisCollection(isCollection){
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
      ptpUserCollect:JSON.parse(JSON.stringify(this.props.isCollection))
    };
  }
  save(){
    API.post('/weChat/com/insertCollectList', this.state.company)
    if(isHttpSuccess(res)){
      showToast("收藏成功", true);
      this.props.dispatchChangeUserInfo(this.state.company);
      setTimeout(()=>{
        Taro.navigateBack();
      },500);
    }
  }
  cancle(){
    API.post('/weChat/com/deleteCollectList', this.state.company)
    if(isHttpSuccess(res)){

    }
  }
  componentWillMount(){
    API.post('/weChat/com/selectCollection', this.state.ptpUserCollect).then(res => {
      if (isHttpSuccess(res)) {
        this.props.dispatchisCollection(res.data);
      }
    })

  }

  render() {
    const company = this.props.companyList[this.$router.params.index];

    const isList = this.props.isCollection === 0;

    return (
      <View className='index'>
        <View className='background-image'>
          <Image src={companyImg} />
        </View>
        <View className='divider-view' />
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
        <View className='divider-view' />
        <View className='company-intro'>
          <View className='company-intro__title'>公司介绍</View>
          <View className='company-intro__content'>
            {company.intro}
          </View>
        </View>
        {
          isList &&
      <View>
        <AtButton className='bt-t' type='primary' >收藏</AtButton>
      </View>
        }
        {
          !isList &&
          <View>
            <AtButton className='bt-t1' type='primary' >取消收藏</AtButton>
          </View>
        }
      </View>
    )
  }
}

export default Index

import Taro, {Component} from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import {add, minus, asyncAdd} from '../../actions/counter'
import {AtButton, AtList, AtListItem} from 'taro-ui'
import './mine.scss'
import userdetail from '../../assets/icon/user-detail.png'
import zhua from '../../assets/imgs/zhua.jpg'
import userActions from "../../actions/user-action";
import {Image, View} from "@tarojs/components";



@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchSelectUser(openId) {
      dispatch(userActions.select(openId));
    }
  }))
class mine extends Component {

  config = {
    navigationBarTitleText: '牧星校园'
  };

  todeliver() {
    Taro.navigateTo({
      url: '/pages/deliver/deliver'
    })
  }

  tocollection() {
    Taro.navigateTo({
      url: '/pages/collection/collection'
    })
  }

  skip(url){
    Taro.navigateTo({
      url: url
    })
  }

  companyEdit(){
    Taro.navigateTo({
      url:'/pages/company-edit/index'
    })
  }




  render() {
    const userOrCompany=this.props.userInfo.type==0;
    return (
      <View>
        <View className='head'>
          <View>
            <Image class='head-pic' src={this.props.userInfo.wechatAvatar}></Image>
          </View>
          {this.props.userInfo.nickname}
        </View>
        <AtList>
          {
            userOrCompany &&
            <AtListItem
              title='学生信息'
              arrow='right'
              thumb={userdetail}
              onClick={this.skip.bind(this, '/pages/user-edit/index')}
            />
          }
          {
            ! userOrCompany &&
          <AtListItem
            title='企业信息'
            arrow='right'
            thumb={userdetail}
            onClick={this.companyEdit}
          />
          }
          {
            userOrCompany &&
            <AtListItem
              title='投递列表'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              onClick={this.todeliver}
            />
          }
          <AtListItem
            title='收藏列表'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            onClick={this.tocollection}
          />
        </AtList>
      </View>
    )
  }
}

export default mine


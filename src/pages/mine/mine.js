import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtButton,AtList, AtListItem } from 'taro-ui'
import './mine.scss'
import userdetail from '../../assets/icon/user-detail.png'
import zhua from '../../assets/imgs/zhua.jpg'
import userActions from "../../actions/user-action";



@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchSelectUser(openId) {
      dispatch(userActions.select(openId));
    }
  }))
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class mine extends Component {
  todeliver(){
    Taro.navigateTo({
      url: '/pages/deliver/deliver'
    })
  }
  tocollection(){
    Taro.navigateTo({
      url: '/pages/collection/collection'
    })
  }
  UserEdit(){
    Taro.navigateTo({
      url: '/pages/user-edit/index'
    })
  }
  companyEdit(){
    Taro.navigateTo({
      url:'/pages/company-edit/index'
    })
  }
    config = {
    navigationBarTitleText: '牧星校园'
  }

  componentWillReceiveProps (nextProps) {

    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View className='head'>
          <View>
            <Image class='head-pic' src={this.props.userInfo.wechatAvatar}></Image>
          </View>
          {this.props.userInfo.nickname}
        </View>
        <AtList>
          <AtListItem
            title='编辑信息'
            arrow='right'
            thumb={userdetail}
            onClick={this.UserEdit}
          />
          <AtListItem
            title='企业信息'
            arrow='right'
            thumb={userdetail}
            onClick={this.companyEdit}
          />
          <AtListItem
            title='投递列表'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
           onClick={this.todeliver}/>
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


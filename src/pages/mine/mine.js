import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtButton,AtList, AtListItem } from 'taro-ui'
import './mine.scss'
import userdetail from '../../assets/icon/user-detail.png'


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
        <View >头像信息</View>
        <AtList>
          <AtListItem
            title='编辑信息'
            arrow='right'
            thumb={userdetail}
          />
          <AtListItem
            title='投递列表'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='收藏列表'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
        </AtList>
        <AtButton className='button' type='primary' size='normal'>退出登录</AtButton>
      </View>
    )
  }
}

export default mine

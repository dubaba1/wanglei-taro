import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";
import {AtCard} from "taro-ui"
import './collection.scss'

class deliver extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: 2
    }
  }
  handleChange (value) {
    this.setState({
      value
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
      <View >
        <View className='head'>收藏列表</View>
        <AtCard className='de-card'
          title='谷歌公司'
          note='公司地址：放大科技园'
          extra='[公司详情]' onClick={this.tocollection}
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        <AtCard className='de-card'
          title='谷歌公司'
          extra='公司详情' onClick={this.tocollection}
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        <AtCard className='de-card'
          title='谷歌公司'
          extra='公司详情' onClick={this.tocollection}
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        <AtCard className='de-card'
          title='谷歌公司'
          extra='公司详情' onClick={this.tocollection}
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        <AtCard className='de-card'
          title='谷歌公司'
          extra='公司详情' onClick={this.tocollection}
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        <AtCard className='de-card'
          title='谷歌公司'
          extra='公司详情' onClick={this.tocollection}
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>

      </View>

    )
  }
}

export default deliver

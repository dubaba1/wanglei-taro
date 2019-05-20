import Taro, { Component } from '@tarojs/taro'
import {Swiper,SwiperItem} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import zhua from '../../assets/imgs/zhua.jpg'
import three from '../../assets/imgs/three.jpg'
import join from '../../assets/imgs/jion.jpg'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

export default  class TextUI extends Component {

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
      <view>
        {this.props.title}
      </view>
    )
  }
}


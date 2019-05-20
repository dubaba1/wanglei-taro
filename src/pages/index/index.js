import Taro, { Component } from '@tarojs/taro'
import {Swiper,SwiperItem} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import zhua from '../../assets/imgs/zhua.jpg'
import three from '../../assets/imgs/three.jpg'
import join from '../../assets/imgs/jion.jpg'
import { add, minus, asyncAdd } from '../../actions/counter'
import TextUI from '../../component/test/index'
import './index.scss'


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
class Index extends Component {

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
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={false}
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <image src={zhua} />
        </SwiperItem>
        <SwiperItem>
          <image src={three} />
        </SwiperItem>
        <SwiperItem>
          <image src={join} />
        </SwiperItem>
      </Swiper>
        <TextUI title='asdfs'/>
        <View>fsdf</View>
      </view>
    )
  }
}

export default Index

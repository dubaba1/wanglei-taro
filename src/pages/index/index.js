import Taro, {Component} from '@tarojs/taro'
import {Swiper, SwiperItem} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import zhua from '../../assets/imgs/zhua.jpg'
import three from '../../assets/imgs/three.jpg'
import join from '../../assets/imgs/jion.jpg'
import {add, minus, asyncAdd} from '../../actions/counter'
import TextUI from '../../component/test/index'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '牧星校园'
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
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
            <Image src={zhua}/>
          </SwiperItem>
          <SwiperItem>
            <Image src={three}/>
          </SwiperItem>
          <SwiperItem>
            <Image src={join}/>
          </SwiperItem>
        </Swiper>

      </view>
    )
  }
}

export default Index

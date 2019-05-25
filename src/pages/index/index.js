import Taro,{Component} from '@tarojs/taro'
import {Image, Swiper, SwiperItem, View} from '@tarojs/components'
import zhua from '../../assets/imgs/zhua.jpg'
import three from '../../assets/imgs/three.jpg'
import join from '../../assets/imgs/jion.jpg'
import {AtCard} from "taro-ui"
import './index.scss'
import {connect} from "@tarojs/redux";
@connect(({user}) => ({...user}))
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
componentWillMount() {

  setTimeout(() => {
    const text = this.props.userInfo.type == 0 ? '找工作' : '找人才';
    const iconPath = this.props.userInfo.type == 0 ? 'assets/icon/Noselect-c.png' : 'assets/icon/Noselect-t.png';
    const selectedIconPath = this.props.userInfo.type == 0 ? 'assets/icon/company.png' : 'assets/icon/select-t.png';
    Taro.setTabBarItem({
      index: 1,
      text: text,
      iconPath: iconPath,
      selectedIconPath: selectedIconPath
    });
  }, 500);

}

  render() {
    return (
      <View>
      <View>
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
            <Image className='img' src={zhua} />
          </SwiperItem>
          <SwiperItem>
            <Image className='img' src={three} />
          </SwiperItem>
          <SwiperItem>
            <Image className='img' src={join} />
          </SwiperItem>
        </Swiper>

      </View>
        <View>
          <AtCard className='de-card'
            title='牧星校园简介'
            note='@2019王磊'

          >
            <View>
              牧星校园面向的是河北科技大学在校的学生开发的一款校园兼职小程序平台；

            </View>
            <view>
             我们提供的是大学生就业全生命周期服务，让大学生可以通过我们的平台，从兼职到实习再到就业。
            </view>
          </AtCard>
        </View>
      </View>
    )
  }
}

export default Index

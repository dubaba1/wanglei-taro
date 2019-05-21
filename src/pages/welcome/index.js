import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'

import {AtActivityIndicator} from "taro-ui";
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '欢迎页'
  };
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  constructor() {
    super(...arguments);
    this.state = {
    };
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onChange() {

  }

  render() {
    return (
      <View className='index'>
        <AtActivityIndicator mode='center' size={45} content='加载中...' />
      </View>
    )
  }
}

export default Index

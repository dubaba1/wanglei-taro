import Taro, {Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtList, AtListItem  } from 'taro-ui'
import './employer.scss'


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
class employer extends Component {

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
        <Input type='text' className='input' placeholder='请搜索求职者' focus/>
        <AtList>
          <AtListItem className="list"
                      title='公司：华为技术有限公司'
                      note='基本信息：华为技术有限公司是一家生产销售通信设备的民营通信科技公司'
                      extraText='详细信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                      arrow='right'
          />
          <AtListItem className="list"
                      title='公司：华为技术有限公司'
                      note='基本信息：华为技术有限公司是一家生产销售通信设备的民营通信科技公司'
                      extraText='详细信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                      arrow='right'
          />
          <AtListItem className="list"
                      title='公司：华为技术有限公司'
                      note='基本信息：华为技术有限公司是一家生产销售通信设备的民营通信科技公司'
                      extraText='详细信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                      arrow='right'
          />
          <AtListItem className="list"
                      title='公司：华为技术有限公司'
                      note='基本信息：华为技术有限公司是一家生产销售通信设备的民营通信科技公司'
                      extraText='详细信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                      arrow='right'
          />
          <AtListItem className="list"
                      title='公司：华为技术有限公司'
                      note='基本信息：华为技术有限公司是一家生产销售通信设备的民营通信科技公司'
                      extraText='详细信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                      arrow='right'
          />
          <AtListItem className="list"
                      title='公司：华为技术有限公司'
                      note='基本信息：华为技术有限公司是一家生产销售通信设备的民营通信科技公司'
                      extraText='详细信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                      arrow='right'
          />
          <AtListItem className="list"
                      title='公司：华为技术有限公司'
                      note='基本信息：华为技术有限公司是一家生产销售通信设备的民营通信科技公司'
                      extraText='详细信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                      arrow='right'
          />
        </AtList>
      </view>

    )
  }
}

export default employer

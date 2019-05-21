import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import { Input } from '@tarojs/components'
import search from '../../assets/icon/search_normal.png'
import { AtList, AtListItem  } from 'taro-ui'

import './employee.scss'


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
class employee extends Component {

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
        <view className='r-input'>
        <Input type='text' className='input' placeholder='公司/职位' focus/>
          <AtList>
            <AtListItem className="list"
                        title='公司：华为技术有限公司'
                        note='基本信息：华dd通信设备的民营通信科技公司'
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
            <AtListItem className="list"
                        title='公司：华为技术有限公司'
                        note='基本信息：华为技术有限公司是一家生产销售通信设备的民营通信科技公司'
                        extraText='详细信息'
                        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        arrow='right'
            />
            <AtListItem className="list"
                            title='姓名：二蛋'
                            note='基本信息：河北科技大学大三学生'
                            extraText='详细信息'
                            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                            arrow='right'
          />
            <AtListItem className="list"
                        title='姓名：二蛋'
                        note='基本信息：河北科技大学大三学生'
                        extraText='详细信息'
                        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        arrow='right'
            />
            <AtListItem className="list"
                        title='姓名：二蛋'
                        note='基本信息：河北科技大学大三学生'
                        extraText='详细信息'
                        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        arrow='right'
            />
            <AtListItem className="list"
                        title='姓名：二蛋'
                        note='基本信息：河北科技大学大三学生'
                        extraText='详细信息'
                        thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                        arrow='right'
            />
          </AtList>
        </view>
      </view>
    )
  }
}

export default employee

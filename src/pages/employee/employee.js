import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import { Input } from '@tarojs/components'
import search from '../../assets/icon/search_normal.png'
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
          <view className='icon'>
            <image className='icon-search' src={search}/>
          </view>
        </view>
      </view>
    )
  }
}

export default employee

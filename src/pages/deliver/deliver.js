import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './deliver.scss'
import React from "react";
import {View} from "@tarojs/components";
import {AtCard, AtListItem} from "taro-ui"

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
class deliver extends Component {

    config = {
    navigationBarTitleText: '牧星校园'
  }
  tocollection(){
  Taro.navigateTo({
                    url: '/pages/collection/collection'
                  })
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
        <View className='head'>投递列表</View>
        < AtCard className='de-card'
          title='谷歌公司'
                extra='[查看]' onClick={this.tocollection}
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        < AtCard className='de-card'
                 title='谷歌公司'
                 extra='[查看]' onClick={this.tocollection}
                 thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        < AtCard className='de-card'
                 title='谷歌公司'
                 extra='[查看]' onClick={this.tocollection}
                 thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        < AtCard className='de-card'
                 title='谷歌公司'
                 extra='[查看]' onClick={this.tocollection}
                 thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        < AtCard className='de-card'
                 title='谷歌公司'
                 extra='[查看]' onClick={this.tocollection}
                 thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        < AtCard className='de-card'
                 title='谷歌公司'
                 extra='[查看]' onClick={this.tocollection}
                 thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
        < AtCard className='de-card'
                 title='谷歌公司'
                 extra='[查看]' onClick={this.tocollection}
                 thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        >
          职位：掏粪
        </AtCard>
      </View>

    )
  }
}

export default deliver

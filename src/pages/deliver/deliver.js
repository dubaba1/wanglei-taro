import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './deliver.scss'
import React from "react";
import {View} from "@tarojs/components";
import {AtCard, AtListItem} from "taro-ui"
import API from "../../service/api";
import {isHttpSuccess} from "../../utils/common";
import userActions from "../../actions/user-action";

@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchChangeCompanyDetail(companyDetail) {
      dispatch(userActions.setCompanyDetail(companyDetail));
    }
  }))
class deliver extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      value: 2,
      deliverList: []
    }
  }
    config = {
    navigationBarTitleText: '牧星校园'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillMount() {
    API.get("/weChat/com/list/deliverCompany").then(res => {
      if (isHttpSuccess(res)) {
        // 如果是投递的
        console.log(res);
        this.setState({
          deliverList: res.data
        })
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  toDeliver(index){
    this.props.dispatchChangeCompanyDetail(this.state.deliverList[index]);
    Taro.navigateTo({
      url: '/pages/company-detail/index'
    })
  }

  render () {
    const {deliverList} = this.state;


    return (
      <View>
        <View className='head'>投递列表</View>
        {
          deliverList.map((item,index) => {
            return (
              <AtCard className='de-card'
                      title={item.name}
                      note={item.place}
                      extra='[公司详情]' onClick={this.toDeliver.bind(this,index)}
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              >
                职位：{item.jobs}
              </AtCard>
            )
          })
        }
      </View>

    )
  }
}

export default deliver

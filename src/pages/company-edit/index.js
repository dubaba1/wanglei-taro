import Taro, {Component} from '@tarojs/taro'
import {Image, Picker, View} from '@tarojs/components'
import companyImg from '../../assets/imgs/公司.jpg'

import './index.scss'
import {AtActionSheet, AtActionSheetItem,AtButton, AtInput} from "taro-ui";
import API from "../../service/api";
import {isHttpSuccess, showToast} from "../../utils/common";
import {connect} from "@tarojs/redux";
import userActions from "../../actions/user-action";


@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchChangeComInfo(comInfo) {
      dispatch(userActions.changeComInfo(comInfo));
    }
  }))
class Index extends Component {

  config = {
    navigationBarTitleText: '公司信息编辑'
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  constructor() {
    super(...arguments);
    this.state = {
      company:JSON.parse(JSON.stringify(this.props.companyInfo))
    };
  }
  save() {
    API.post('/weChat/com/save/comInfo', this.state.company).then(res => {
      if (isHttpSuccess(res)) {
        showToast("更新成功", true);
        this.props.dispatchChangeComInfo(res.data);
        setTimeout(()=>{
          Taro.navigateBack();
        },500);
      }
    })
  }
  handleChange(filed, value) {
    this.setState({
      company: {
        ...this.state.company,
        [filed]: value
      }
    })
  }

  render() {
    const {company} = this.state;
    return (
      <View className='index'>

          <View className='panel-label__title'>基本信息</View>

        <View className='baseInfo-edit'>
          <AtInput
            name='name'
            title='公司名'
            type='text'
            value={company.name}
            onChange={this.handleChange.bind(this,'name')}
          />
          <AtInput
            name='place'
            title='地址'
            type='text'
            value={company.place}
            onChange={this.handleChange.bind(this,'place')}
          />
          <AtInput
            name='mobile'
            title='电话'
            type='text'
            value={company.mobile}
            onChange={this.handleChange.bind(this,'mobile')}
          />
          <AtInput
            name='jobs'
            title='工作岗位'
            type='text'
            value={company.jobs}
            onChange={this.handleChange.bind(this,'jobs')}
          />
        </View>

            <View className='panel-label__title'>详细介绍</View>
        <AtInput
          name='intro'
          title='详细介绍'
          type='text'
          value={company.intro}
          onChange={this.handleChange.bind(this,'intro')}
        />

        <AtButton className='bt-t' onClick={this.save.bind(this)}>提交信息</AtButton>


      </View>
    )
  }
}

export default Index

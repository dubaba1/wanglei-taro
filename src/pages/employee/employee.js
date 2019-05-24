import Taro, {Component} from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import {add, minus, asyncAdd} from '../../actions/counter'
import {Input} from '@tarojs/components'
import search from '../../assets/icon/search_normal.png'
import {AtList, AtListItem, AtSearchBar} from 'taro-ui'

import './employee.scss'
import userActions from "../../actions/user-action";
import API from "../../service/api";

@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchChangeCompanyDetail(companyDetail) {
      dispatch(userActions.setCompanyDetail(companyDetail));
    }
  }))
class employee extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: ''
    }
  }

  config = {
    navigationBarTitleText: '牧星校园'
  }

  companydetail(index) {
    this.props.dispatchChangeCompanyDetail(this.props.companyList[index]);
    Taro.navigateTo({
      url: '/pages/company-detail/index'
    })
  }

  userdetail(index) {
    Taro.navigateTo({
      url: '/pages/user-detail/index?index=' + index
    })
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }

  onActionClick() {
    console.log('开始搜索')
  }

  //公司搜索人
  search1(index) {
    API.post('/weChat/com/selectUserByUserName', index)
  }

  //人搜索公司
  search2(index) {
    API.post('/weChat/com/selectCompanyByName', index)

  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  // componentWillMount() {
  //     this.$router.params
  // }

  render() {
    const {companyList} = this.props
    const {userList} = this.props

    const isCompany = this.props.userInfo.type == 0;
    return (
      <View>
        {
          isCompany &&
          <View className='r-input'>
            <AtSearchBar
              showActionButton
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />
            <AtList>
              {
                companyList.map((item, index) => {
                  return (
                    <AtListItem className="list"
                                title={item.name}
                                note={item.intro}
                                extraText='详细信息'
                                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                                arrow='right'
                                onClick={this.companydetail.bind(this, index)}
                    />
                  )
                })
              }
            </AtList>
          </View>
        }
        {
          !isCompany &&
          <View className='r-input'>
            <View>
              <AtSearchBar
                showActionButton
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                onActionClick={this.onActionClick.bind(this)}
              />
            </View>
            <AtList>
              {
                userList.map((item, index) => {
                  return (
                    <AtListItem className="list1"
                                title={item.nickname}
                                note={item.education}
                                extraText='详细信息'
                                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                                arrow='right'
                                onClick={this.userdetail.bind(this, index)}
                    />
                  )
                })
              }
            </AtList>
          </View>
        }
      </View>
    )
  }
}

export default employee

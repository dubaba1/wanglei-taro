import Taro, {Component} from '@tarojs/taro'
import {View} from "@tarojs/components";
import {AtCard} from "taro-ui"
import './collection.scss'
import API from "../../service/api";
import {isHttpSuccess, showToast} from "../../utils/common";
import {connect} from "@tarojs/redux";
import userActions from "../../actions/user-action";

@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchChangeCompanyDetail(companyDetail) {
      dispatch(userActions.setCompanyDetail(companyDetail));
    },
  dispatchChangeUserDetail(userDetail) {
    dispatch(userActions.setUserDetail(userDetail));
  }

  }),

)
class collection extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: 2,
      companyList: [],
      userList: []

    }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  config = {
    navigationBarTitleText: '牧星校园'
  };

  componentWillMount() {
    API.get("/weChat/com/list/collectCompany").then(res => {
      if (isHttpSuccess(res)) {
        // 如果是收藏的
        console.log(res);
        this.setState({
          companyList: res.data
        })
      }
    })
    API.get("/weChat/user/list/collectUser").then(res => {
      if (isHttpSuccess(res)) {
        // 获取收藏的人才列表
        console.log(res);
        this.setState({
          userList: res.data
        })
      }
    })
  }

  toCollection(index){
    this.props.dispatchChangeCompanyDetail(this.state.companyList[index]);
    Taro.navigateTo({
      url: '/pages/company-detail/index'
    })
  }
  toCollectionUser(index){
    this.props.dispatchChangeUserDetail(this.state.userList[index]);
    Taro.navigateTo({
      url: '/pages/user-detail/index'
    })
  }

  render() {
    const {companyList} = this.state;
    const {userList} = this.state;
    const isCompany = this.props.userInfo.type == 0;

    return (
      <View>
        <View className='head'>收藏列表</View>
        {
            isCompany &&
          companyList.map((item,index) => {
            return (
              <AtCard className='de-card'
                      title={item.name}
                      note={item.place}
                      extra='[公司详情]' onClick={this.toCollection.bind(this,index)}
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              >
                职位：{item.jobs}
              </AtCard>
            )
          })
        }
        {
          !isCompany &&
          userList.map((item,index) => {
            return (
              <AtCard className='de-card'
                      title={item.nickname}
                      note={item.education}
                      extra='[人才信息]' onClick={this.toCollectionUser.bind(this,index)}
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              >
                城市：{item.city}
              </AtCard>
            )
          })
        }
      </View>

    )
  }
}

export default collection

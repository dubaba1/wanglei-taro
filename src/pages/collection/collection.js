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
    }
  }))
class deliver extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: 2,
      companyList: []
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
  }

  toCollection(index){
    this.props.dispatchChangeCompanyDetail(this.state.companyList[index]);
    Taro.navigateTo({
      url: '/pages/company-detail/index'
    })
  }

  render() {
    const {companyList} = this.state;
    return (
      <View>
        <View className='head'>收藏列表</View>
        {
          companyList.map((item,index) => {
            return (
              <AtCard className='de-card'
                      title={item.name}
                      note={item.place}
                      extra='[公司详情]' onClick={this.toCollection.bind(this,index)}
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
              >
                职位：掏粪
              </AtCard>
            )
          })
        }
      </View>

    )
  }
}

export default deliver

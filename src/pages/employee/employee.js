import Taro, {Component} from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import {AtList, AtListItem, AtSearchBar,AtModal, AtModalContent, AtModalAction} from 'taro-ui'
import './employee.scss'
import userActions from "../../actions/user-action";
import API from "../../service/api";
@connect(({user}) => ({...user}),
  dispatch => ({
    dispatchChangeCompanyDetail(companyDetail) {
      dispatch(userActions.setCompanyDetail(companyDetail));
    },
    dispatchShowCompanyList(companyList){
      dispatch(userActions.ShowCompanyList(companyList));
    },
    dispatchShowUserList(userList){
      dispatch(userActions.ShowUserList(userList));
    },
    dispatchChangeUserDetail(userDetail){
      dispatch(userActions.setUserDetail(userDetail));
    }
  }),
)
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
    this.props.dispatchChangeUserDetail(this.props.userList[index]);
    Taro.navigateTo({
      url: '/pages/user-detail/index'
    })
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }
  //企业搜索学生
  onActionClickUse() {
    API.post('/weChat/user/selectUserByName', {nickname : this.state.value}).then(res => {
      this.props.dispatchShowUserList(res.data)
      console.log(res.data)
    })
  }
  //学生搜索企业    公司名或者工作岗位
  onActionClick(){
    API.post('/weChat/com/selectCompanyByName', {name : this.state.value}).then(res => {
      this.props.dispatchShowCompanyList(res.data)

      console.log(res.data)
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  // componentWillMount() {
  //     this.$router.params
  // }

  render() {
    const {companyList} = this.props;
    const {userList} = this.props;
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
            {/*{*/}
              {/*companyList==false &&*/}
              {/*<AtModal isOpened>*/}
                {/*<AtModalContent>*/}
                  {/*这里是正文内容，欢迎加入京东凹凸实验室*/}
                {/*</AtModalContent>*/}
                {/*<AtModalAction> <Button>取消</Button> <Button>确定</Button> </AtModalAction>*/}
              {/*</AtModal>*/}
            {/*}*/}
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
                onActionClick={this.onActionClickUse.bind(this)}
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

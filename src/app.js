import '@tarojs/async-await'
import Taro, {Component} from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

import {Provider} from '@tarojs/redux'


import Index from './pages/index'
import configStore from './store'
import './app.scss'
import userActions from './actions/user-action'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {

  config = {
    pages: [
      'pages/welcome/index',
      'pages/welcome/register/index',
      'pages/user-edit/index',
      'pages/user-detail/index',
      'pages/company-detail/index',
      'pages/company-edit/index',
      'pages/index/index',
      'pages/employee/employee',
      'pages/mine/mine',
      'pages/deliver/deliver',
      'pages/collection/collection',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#2BA345',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },

    tabBar: {
      "color": "#c2cfcc",
      "selectedColor": "#2BA345",
      "backgroundColor": "#f6f6f6",
      "position": "bottom",
      list: [{
        text: "首页",
        pagePath: "pages/index/index",
        "iconPath": "assets/icon/主页1.png",
        "selectedIconPath": "assets/icon/主页.png"
      },
        {
          "text": "找工作",
          "pagePath": "pages/employee/employee",
          "iconPath": "assets/icon/Noselect-c.png",
          "selectedIconPath": "assets/icon/company.png"
        },

        {
          "text": "我的",
          "pagePath": "pages/mine/mine",
          "iconPath": "assets/icon/我的.png",
          "selectedIconPath": "assets/icon/我的1.png"
        }
      ]
    }
  };

  componentDidMount() {
    // 调用微信登陆接口，获取code
    Taro.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        store.dispatch(userActions.code2session(res.code));
      }
    });
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

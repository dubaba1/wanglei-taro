import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import employee from './pages/employee'
import employer from './pages/employer'
import mine from './pages/mine'


import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/employee/employee',
      'pages/employer/employer',
      'pages/mine/mine'
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
           "iconPath": "assets/icon/未选公司.png",
           "selectedIconPath": "assets/icon/公司.png"
         },
         {
           "text": "找人才",
           "pagePath": "pages/employer/employer",
           "iconPath": "assets/icon/未选人才.png",
           "selectedIconPath": "assets/icon/人才.png"
         },
         {
           "text": "我的",
           "pagePath": "pages/mine/mine",
           "iconPath": "assets/icon/我的.png",
           "selectedIconPath": "assets/icon/我的1.png"
         }
    ]
  }  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
        <employee />
        <employer />
        <mine />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

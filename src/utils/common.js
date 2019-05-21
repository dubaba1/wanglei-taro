import Taro from "@tarojs/taro";

export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

export const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

export const formatTimeYMD = dateParam => {
  let date;
  // string 类型
  if (typeof dateParam === 'string') {
    date = new Date(dateParam.replace(/-/g, '/'));
  }else if (dateParam instanceof Date){// 日期类型
    date = dateParam;
  } else{
    console.error("未知数据类型");
    return 0;
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    [year, month, day].map(formatNumber).join("/")
  );
};
export const formatTimeYMDSimplify = dateParam => {
  // 处理日期参数，兼容android和ios
  let date;
  // string 类型
  if (typeof dateParam === 'string') {
    date = new Date(dateParam.replace(/-/g, '/'));
  }else if (dateParam instanceof Date){// 日期类型
    date = dateParam;
  } else{
    console.error("未知数据类型");
    return 0;
  }
  const year = (date.getFullYear() + '').substr(2, 2);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    [year, month, day].map(formatNumber).join("/")
  );
};

export const formatTimeHMS = dateParam => {
  // 处理日期参数，兼容android和ios
  let date;
  // string 类型
  if (typeof dateParam === 'string') {
    date = new Date(dateParam.replace(/-/g, '/'));
  }else if (dateParam instanceof Date){// 日期类型
    date = dateParam;
  } else{
    console.error("未知数据类型");
    return 0;
  }
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [hour, minute, second].map(formatNumber).join(":")
  );
};


export const logError = (name, action, info) => {
  if (!info) {
    info = "empty";
  }
  try {
    let deviceInfo = Taro.getSystemInfoSync();
    var device = JSON.stringify(deviceInfo);
  } catch (e) {
    console.error("not support getSystemInfoSync api", e.message);
  }
  let time = formatTime(new Date());
  console.error(time, name, action, info, device);
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if (typeof info === "object") {
    info = JSON.stringify(info);
  }
};

/*获取当前页url*/
export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages();
  let currentPage = pages[pages.length - 1];
  let url = currentPage.route;
  return url;
};

/**
 * 判断请求是否成功，不成功则输出错误信息
 * @param res 结果
 * @returns {boolean}
 */
export const isHttpSuccess = (res) => {
  if (res.code === 0) {
    return true;
  } else {
    Taro.showToast({
      title: res.msg,
      icon: 'none'
    })
  }
};

export const formatDuration = (sections) => {
  if (sections == null) return '0秒';
  let hour = 0;
  let minute = 0;
  let section = 0;
  if (sections < 60) {
    return sections + '秒';
  } else if (sections < 3600) {
    minute = parseInt(sections / 60);
    section = sections % 60;
  } else {
    hour = parseInt(sections / 3600);
    minute = parseInt(sections % 3600 / 60);
    section = sections % 3600 % 60;
  }
  let str = '';
  if (hour != 0) str += `${hour}小时`;
  if (minute != 0) str += `${minute}分钟`;
  // if (section != 0) str += `${section}秒`;
  return str;
};

export const formatDurationMinute = (sections) => {
  if (sections == null) return '0分钟';
  let minute = parseInt(sections / 60);
  return minute + '分钟';
};


/**
 * 封装了提示框
 * @param title
 * @param success
 */
export const showToast = (title, success) => {
  if (success) {
    Taro.showToast({
      title: title,
    })
  } else {
    Taro.showToast({
      title: title,
      icon: 'none'
    })
  }
};

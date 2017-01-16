//app.js
App({
  //程序初始化的时候执行执行onLaunch里面的代码
  onLaunch() {
    //调用API从本地缓存中获取数据
    var lists = wx.getStorageSync('lists') || []
    lists.unshift(Date.now())
    wx.setStorageSync('lists', lists)
  },
  //定义的全局方法在pages里面的都是可以调用
  getUserInfo(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //定义的全局属性
  globalData:{
    userInfo:null
  }
})

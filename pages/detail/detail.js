//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    imgUrls: [
      'https://img.tourongjia.com/data/uploads/img/2017/01/06/586f4a5f7f5fa.jpg',
      'https://img.tourongjia.com/data/uploads/img/2017/01/03/586b7416e4bb4.jpg',
      'https://img.tourongjia.com/data/uploads/img/2016/08/05/57a466227fb3e.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    dotsClass: ['active','','']
  },
  // swiper组件改变事件
  swiperChange: function(event) {
    var dotsClass = ['','','','',''];
    dotsClass[event.detail.current] = 'active';
    this.setData({
      dotsClass
    });
  },
  onLoad() {
    console.log('app', app);
  },
  //事件处理函数
  goIndex() {
    wx.navigateTo({
      url: '../user/user'
    })
  }
})

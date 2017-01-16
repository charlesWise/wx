//logs.js
import util from '../../utils/util';
Page({
  data: {
    lists: []
  },
  onLoad() {
    this.setData({
      lists: (wx.getStorageSync('lists') || []).map(function (list) {
        return util.formatTime(new Date(list))
      })
    })
  },
  onHide() {
    wx.clearStorageSync('lists');
  },
  goDetail() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})

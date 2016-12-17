//index.js

var app = getApp()
Page({
  bindChange: function(e) {
        app.current_pos = e.detail.value
        console.log("current"+app.current_pos)
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../destination/destination'
    })
  },
})
 
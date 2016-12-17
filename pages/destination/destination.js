//destination.js

var app = getApp()
Page({
  onLoad: function () {
    var number_index = {
        1: '出发1',
        2: '洗手间'
      };
    for (var key in number_index) {
    if(app.current_pos==key){
      var detail_pos=number_index[app.current_pos]
    }
  }
  this.setData({
      detail_pos: detail_pos
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../route/route'
    })
  },
  bindChange: function(e) {
        app.dest_pos = e.detail.value
        console.log("dest"+app.dest_pos)
        if(app.dest_pos=='洗手间')
        {
          app.dest_pos = '2';
          console.log("＊＊＊＊"+app.dest_pos)
        }

  },
})
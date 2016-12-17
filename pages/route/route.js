var app=getApp()
Page({
  onLoad: function () {
    var route=''
    if(app.current_pos=='1'&&app.dest_pos=='2'){
      route="此刻您面对1，请向左转，经过3、5后左转，到达电梯，乘电梯上二楼，出电梯后右转，经过6后左转走到底，继续右转，直走，到达目的地"
    }
    else if(app.current_pos=='2'&&app.dest_pos=='1'){
      route="向南行100米，沿扶梯上楼后，右拐，直走到达目的地。"
    }
    else{
        route="未找到路径，请重新输入！"
    }
  this.setData({
      route: route
    })
  },
})
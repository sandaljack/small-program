Page({
  onTap:function(){
    // 有子集，原来的被隐藏
    // wx.navigateTo({
    //   url: '../posts/post',
    // });

    // 直接跳转，不能跳回
    wx.redirectTo({
      url: '../posts/post',
    });
  },

})
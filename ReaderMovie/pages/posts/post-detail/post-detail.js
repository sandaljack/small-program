var postsData = require("../../../data/posts-data.js");

Page({
  onLoad:function(option){
    var postId = option.id;
    var postData = postsData.postList[postId];
    //如果在onLoad方法中，不是异步去执行一个数据绑定
    // 则不需要使用this.setData方法
    //只需要对this.data赋值即可实现数据绑定
    // this.data.postData = postData;
    // console.log(postData);
    this.setData({
      postData:postData
    })

    // 设置缓存
    wx.setStorageSync('key', {game:'LOL',developer:'风暴英雄'})
  },
  onCollectionTap: function (event) {
    // 获得缓存
    var game = wx.getStorageSync('key');
    console.log(game);
  },
  onShareTap:function(event) {
    // 清除指定缓存
    //缓存的上限最大不能超过10MB
    wx.removeStorageSync('key');
    // 清除所有缓存
    // wx.clearStorageSync();
  }
})
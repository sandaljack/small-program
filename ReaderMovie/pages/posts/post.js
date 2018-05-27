// 只能用相对路径
var postsData = require('../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //假设数据是从服务器那拉取的
    
    
    this.setData({
      post_key: postsData.postList
    });
  },
})
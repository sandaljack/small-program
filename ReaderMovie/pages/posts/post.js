// 只能用相对路径
var postsData = require('../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    // 而这个动作A的执行是在onLoad时间执行之后发生
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //假设数据是从服务器那拉取的
    
    // this.data.post_key = postsData.postList;这个和下面一样，但用下面的好
    this.setData({
      post_key: postsData.postList
    });
  },

  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail',
    })
  }
})
var postsData = require("../../../data/posts-data.js");

Page({
  data:{

  },
  onLoad:function(option){
    var postId = option.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    //如果在onLoad方法中，不是异步去执行一个数据绑定
    // 则不需要使用this.setData方法
    //只需要对this.data赋值即可实现数据绑定
    // this.data.postData = postData;
    // console.log(postData);
    this.setData({
      postData:postData
    })

    // 读取缓存的收藏值
    var postsCollected = wx.getStorageSync('posts_collected');
    if (postsCollected) {
      var postCollected = postsCollected[postId];
       this.setData({
         collected:postCollected
       })
    } else {
      var postsCollected = {}
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }
    
  },
  onCollectTap:function(event){
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    // 收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    // 更新文章是否的缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    // 更新数据绑定变量，从而实现切换图片
    this.setData({
      collected:postCollected
    })

    // 交互反馈
    wx.showToast({
      title: postCollected?"收藏成功":"取消收藏",
      duration:1000,
      icon:'success'
    })
  },
})
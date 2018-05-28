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
    //同步，优先使用
    this.getPostsCollectedSyc();
    //异步
    // this.getPostsCollectedAsy();    
  },

  //异步收藏方法
  getPostsCollectedAsy:function(){
    var that = this;
    wx.getStorage({
      key: "posts_collected",
      success: function (res) {
        var postsCollected = wx.getStorageSync('posts_collected');
        var postCollected = postsCollected[that.data.currentPostId];
        // 收藏变成未收藏，未收藏变成收藏
        postCollected = !postCollected;
        postsCollected[that.data.currentPostId] = postCollected;
        that.showToast(postsCollected, postCollected);
      },
    })
  },

  //同步收藏方法
  getPostsCollectedSyc:function() {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    // 收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected);
  },

  // 自定义收藏交互反馈函数
  showModal: function (postsCollected, postCollected){
    var that = this;
    // 显示模态弹框
    wx.showModal({
      title: '收藏',
      content: postCollected?'收藏该文章？':'取消收藏该文章？',
      showCancel: 'true',
      cancelText: "取消",
      cancelColor: '#333',
      confirmText: '确认',
      confirmColor: '#405f80',
      success:function(res) {
        if (res.confirm) {
          // 更新文章是否的缓存值
          wx.setStorageSync('posts_collected', postsCollected);
          // 更新数据绑定变量，从而实现切换图片
          that.setData({
            collected: postCollected
          })
        }
      }
    })
  },

  // 收藏交互反馈
  showToast: function (postsCollected, postCollected){
    // 更新文章是否的缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    // 更新数据绑定变量，从而实现切换图片
    this.setData({
      collected: postCollected
    })
       // 交互反馈
    wx.showToast({
      title: postCollected?"收藏成功":"取消收藏",
      duration:1000,
      icon:'success'
    })
  },

  // 分享交互反馈
  onShareTap:function(event){
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ];
    wx.showActionSheet({
      itemList:itemList,
      itemColor:"#405f80",
      success:function(res){
        //res.cancel 用户是不是点击了取消按钮
        //res.tapIndex 数组元素的序号，从0开始
        wx.showModal({
          title:'用户'+itemList[res.tapIndex],
          content:'用户是否取消'+res.cancel+"现在无法实现分享功能"
        })
      }
    })
  }
})
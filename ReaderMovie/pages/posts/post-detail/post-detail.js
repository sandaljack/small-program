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
  }
})
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
    var post_contents = [
      {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        content: "徐文长曾挥毫写下:“金秋菊黄蟹正肥 持螯饮酒滋筋髓。”意指秋意渐浓之际,也是食蟹的最佳时节。",
        view_num: "112",
        collect_num: "96",
        author_img: "/images/avatar/1.png",
        post_img: "/images/post/crab.png",
      },
      {
        date: "Nov 25 2016",
        title: "比利·林恩的中场故事",
        content: "李安是一位绝不会重复自己的导演，本片极富原创性<<比利林恩漫长的中场故事>>。",
        view_num: "112",
        collect_num: "96",
        author_img: "/images/avatar/2.png",
        post_img: "/images/post/bl.png",
      }

    ];
    
    this.setData({
      post_key:post_contents
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
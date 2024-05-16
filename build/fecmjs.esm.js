// 微信分享
function wxShare(_ref) {
  var requestUrl = _ref.requestUrl,
    title = _ref.title,
    desc = _ref.desc,
    link = _ref.link,
    imgUrl = _ref.imgUrl,
    successFn = _ref.successFn;
  Axios.get(requestUrl, {
    params: {
      url: window.location.href
    }
  }).then(function (res) {
    // console.log(res, 1111);
    if (res.data.ret === 0) {
      wx.config({
        debug: false,
        appId: res.data.appId,
        timestamp: res.data.timestamp,
        nonceStr: res.data.nonceStr,
        signature: res.data.signature,
        jsApiList: ['checkJsApi', 'updateTimelineShareData', 'updateAppMessageShareData']
      });
      wx.ready(function () {
        wx.updateTimelineShareData({
          title: title,
          // 分享标题
          desc: desc,
          // 分享描述
          link: link,
          // 分享链接
          imgUrl: imgUrl,
          // 分享图标
          success: function success() {
            // 用户成功分享后执行的回调函数
            successFn();
          }
        });
        wx.updateAppMessageShareData({
          title: title,
          // 分享标题
          desc: desc,
          // 分享描述
          link: link,
          // 分享链接
          imgUrl: imgUrl,
          // 分享图标
          success: function success() {
            // 用户成功分享后执行的回调函数
            successFn();
          }
        });
      });
    }
  });
}

var index = {
  wxShare: wxShare
};

export { index as default, wxShare };

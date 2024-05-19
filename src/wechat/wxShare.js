// 微信分享
export default function wxShare ({requestUrl, title, desc, link, imgUrl, successFn}) {
    Axios.get(requestUrl, {
        params: {
            url: window.location.href
        }
    })
    .then(res => {
        // console.log(res, 1111);
        if (res.data.ret === 0) {
            wx.config({
                debug: false,
                appId: res.data.appId,
                timestamp: res.data.timestamp,
                nonceStr: res.data.nonceStr,
                signature: res.data.signature,
                jsApiList: [
                    'checkJsApi',
                    'updateTimelineShareData',
                    'updateAppMessageShareData',
                ]
            });
            wx.ready(() => {
                wx.updateTimelineShareData({
                    title, // 分享标题
                    desc, // 分享描述
                    link, // 分享链接
                    imgUrl,// 分享图标
                    success() {// 用户成功分享后执行的回调函数
                        successFn();
                    },
                });
                wx.updateAppMessageShareData({
                    title, // 分享标题
                    desc, // 分享描述
                    link, // 分享链接
                    imgUrl,// 分享图标
                    success() {// 用户成功分享后执行的回调函数
                        successFn();
                    }
                });
            });
        }
    });
}
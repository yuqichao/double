weixinShare();
function weixinShare() {
    var n = encodeURIComponent(window.location.href.split("#")[0]);
    $.ajax({
        url: "http://m.haoyicn.cn/wx/basic/getWxShareInfo?&url=" + n,
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "callback5",
        success: function (n) {
            wx.config({
                debug: !1,
                appId: n.appId,
                timestamp: n.timestamp,
                nonceStr: n.nonce_str,
                signature: n.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
            });
            var e = {
                title: "神秘嘉宾邀请您参加《设计明天》原创大片观影。",
                desc: "2017武汉设计双年展 邀请函",
                imgUrl: "http://m.haoyicn.cn/double/img/share.jpg",
                link: "http://m.haoyicn.cn/double/main.html",
                type: "link",
                dataUrl: ""
            };

            $('input').on('blur', function(){
                var title = $(this).val();
                if(title) e.title = '神秘嘉宾邀请 '+ title +'先生/女士 参加《设计明天》原创大片观影。';
            });

            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: e.title, link: e.link, imgUrl: e.imgUrl, success: function () {
                    }, cancel: function () {
                    }
                }), wx.onMenuShareAppMessage({
                    title: e.title,
                    desc: e.desc,
                    link: e.link,
                    imgUrl: e.imgUrl,
                    success: function () {
                    },
                    cancel: function () {
                    }
                }), wx.onMenuShareQQ({
                    title: e.title,
                    desc: e.desc,
                    link: e.link,
                    imgUrl: e.imgUrl,
                    success: function () {
                    },
                    cancel: function () {
                    }
                })
            })
        }
    })
}
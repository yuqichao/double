
(function (win, doc) {
  // 适配多设备
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if(docEl.clientHeight > docEl.clientWidth) clientWidth = docEl.clientHeight;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);

  // 预加载图片
  function loading(source, progress) {
    var len = source.length;
    var loaded = 0;
    var images = [];
    var handle = function () {
      loaded < len && (++loaded, progress(parseInt(loaded / len * 100)));
    };
    for (var i = 0; i < len; i++) {
      images[i] = new Image();
      images[i].onload = images[i].onerror = handle;
      images[i].src = source[i];
    }
  }
  var load_list = ['./img/loading.png', './img/gl.png', './img/gr.png', './img/logo.svg', './img/p1.jpg', './img/p2.jpg', './img/p1.sprite.png'
    , './img/p2.sprite.png', './img/p3.sprite.png', './img/p4.sprite.png', './img/p5.sprite.png', './img/p8.sprite.png'
    , './img/p10.sprite.png', './img/p12.sprite.png', './img/p13.sprite.png'
  ];
  //图片预加载及背景音乐初始化
  loading(load_list, function (progress) {
    $('.loading .progress span').html(progress);
    if (progress == 100) {
      // 调用多屏滚动插件
      $('#fullpage').fullpage();
      $('.loading').remove();
      $.fn.fullpage.moveTo(0, 0);
    }
  });

  $('.link', '.p4').on('click', function(){
    var type = $(this).data('type');
    var i = $(this).data('i');
    var vr = ['http://720yun.com/t/6l5wm739p4fne9y2uj', 'http://720yun.com/t/ga4zeoqprm156w3du9', 'http://720yun.com/t/m4nqx52qx60x2mz3hd'];
    var video = ['./img/v1.mp4', './img/v2.mp4', './img/v3.mp4'];

    if(type == 0){
      if($('.popVr').length > 0) $('.popVr').remove();
      popVr(vr[i]);
    }else{
      if($('.popVod').length > 0) $('.popVod').remove();
      popVod(video[i]);
    }

  });

  function popVr(url){
    $('body').append('<a class="popVr"><a class="close" href="javascript:;"><span></span></a><iframe src="' + url + '" frameborder="0"></iframe></div>');
  }
  function popVod(url){
    $('body').append('<div class="popVod"><a class="close" href="javascript:;"><span></span></a><video src="'+url+'" controls autoplay></video></div>');
  }

  $('.box a', '.p4').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('.ctn .a').removeClass('on').eq($(this).index()).addClass('on');
  });

  $(document).on('click','.popVr .close', function(){
    $('.popVr').remove();
  });

  $(document).on('click','.popVod .close', function(){
    $('.popVod').remove();
  });

  $('.box', '.p8, .p9').on('click', function(){
    var i = $(this).data('i');
    if($('.pop').length > 0) $('.pop').remove();
    pop(data[i]);
  });

  $(document).on('click','.pop .close', function(){
    $('.pop').remove();
  });

  $('.carousel').slide();

  function pop(data){
    var html = '<div class="pop"><div class="wrap"><div class="content"><div class="c"><div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div></div><a class="close" href="javascript:;"></a><div class="ctn"><dl>';
      html += '<dt>' + data.title + '<span>' + data.sub + '</span></dt>';
      $.each(data.list, function(i,n){
          html += '<dd><div class="tit"><div class="d1"></div><div class="txt">'+n.active+'</div><div class="d2"></div></div><div class="time">'+n.time+'</div></dd>'
      });
      html +='</dl></div></div></div></div>';
    $('body').append(html);

  }

  var data = [
    {title: '翟雅阁博物馆', sub: 'zhaiyagebowuguan', list: [
      {active: '设计之都城市作品展', time: '11.11'},
      {active: '武汉优秀历史建筑展', time: '11.11'},
      {active: '工程与艺术的复合展', time: '11.11'},
      {active: '新闻发布会', time: '11.3'},
      {active: '第二届创意城市圆桌会议', time: '11.12(上午)'},
      {active: '2017武汉勘察设计行业年会', time: '11.17(下午)'},
      {active: '建筑工业化与未来城市', time: '11.18'},
      {active: '智能停车场建设高峰论坛', time: '11.19(上午)'},
      {active: '城市设计与公共生活论坛', time: '11.21'},
      {active: '武汉长江新城规划国家论坛暨闭幕式', time: '11.24'}
    ]},
    {title: '南太子湖创新谷美术馆', sub: 'nantaizihuchuangxinmeishuguan', list: [
      {active: '"一带一路"武汉工程设计摄影展', time: '11.11'},
      {active: '武汉工程设计展', time: '11.11'},
      {active: '武汉汽车工业设计展', time: '11.11'},
      {active: '中国设计红星奖展', time: '11.11'},
      {active: '武汉青少年儿童创意设计展', time: '11.11'},
      {active: '武汉动漫设计与传统文化传承创新展', time: '11.11'},
      {active: '开幕式', time: '11.11'},
      {active: '武汉动漫设计与传统文化传承创新展活动', time: '11.23~11.24'}
    ]},
    {title: '湖北美术学院美术馆', sub: 'hubeimeishuxueyuanmeishuguan', list: [
      {active: '"百年亮点"长江主轴优秀摄影作品展', time: '11.11'},
      {active: '"童画长江主轴"展', time: '11.11'},
      {active: '武汉长江新城展', time: '11.11'},
      {active: '国际滨水规划邀请展', time: '11.11'},
      {active: '"长江主轴新画卷"美术创作展览', time: '11.11'},
      {active: '武汉动漫设计与传统文化传承创新展', time: '11.11'}
    ]},
    {title: '青岛路平和打包厂', sub: 'qingdaolupinghedabaochang', list: [
      {active: '法国·圣埃蒂安设计展', time: '11.11'}
    ]},
    {title: '中南建筑设计院科研大楼', sub: 'zhongnanjianzhushejiyuankeyandalou', list: [
      {active: '佛罗伦萨设计周作品展', time: '11.11'},
      {active: '中南建筑设计院模型展', time: '11.11'},
      {active: '中设协民营设计企业分会第三届四次理事会暨2017中国民营设计企业发展论坛', time: '11.12'},
      {active: '佛罗伦萨设计周大师作品巡展大师对话', time: '11.18(上午)'},
      {active: '青年工程师先锋论坛', time: '11.22(上午)'},
      {active: '创新技术论坛', time: '11.23(上午)'}
    ]},
    {title: '中信建筑设计院大楼', sub: 'zhongxinjianzhushejiyuandalou', list: [
      {active: '优秀个人工作室展', time: '11.11'},
      {active: '大师讲堂(系列论坛)', time: '10.15~11.30'},
      {active: '优秀个人工作室论坛', time: '11.15~12.15'}
    ]}
  ]

})(window, document);

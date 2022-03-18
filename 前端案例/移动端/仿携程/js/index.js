window.addEventListener('load', function () {
  //1、 获取元素
  var focus = document.querySelector('.focus');
  var ul = focus.children[0];
  var ol = focus.children[1];
  //获得focus的宽度
  var w = focus.offsetWidth;

  //2、利用定时器自动轮播播放图片
  var index = 0;
  var timer = setInterval(function () {
    index++;
    var translatex = -index * w;
    ul.style.transition = 'all 0.3s';
    ul.style.transform = 'translateX(' + translatex + 'px)';
  }, 2000);

  //等着过渡完成之后，再去判断，监听过度完成事件
  ul.addEventListener('transitionend', function () {
    //无缝滚动
    if (index >= 3) {
      index = 0;
      //去掉过渡效果 这样才能让ul快速的跳到第一张图片 因为过渡效果是需要花费时间的
      ul.style.transition = 'none';
      //利用最新索引号乘以宽度去移动图片
      var translatex = -index * w;
      ul.style.transform = 'translateX(' + translatex + 'px)';
    } else if (index < 0) {
      index = 2;
      //去掉过渡效果 这样才能让ul快速的跳到第一张图片 因为过渡效果是需要花费时间的
      ul.style.transition = 'none';
      //利用最新索引号乘以宽度去移动图片
      var translatex = -index * w;
      ul.style.transform = 'translateX(' + translatex + 'px)';

    }

    // 小圆点跟随变化
    // 把ol 里面li带有current类名的选出来去掉类名 remove  不用for循环
    ol.querySelector('.current').classList.remove('current');
    // 让当前索引号的小li加上current
    ol.children[index].classList.add('current');
  });

  //手指滑动轮播图
  var startX = 0;
  var moveX = 0;
  var flag = false;
  ul.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX;
    //手指触摸的时候停止定时器
    clearInterval(timer);
  });

  ul.addEventListener('touchmove', function (e) {
    //计算移动距离
    moveX = startX = e.targetTouches[0].pageX - startX;
    // 移动盒子：原来的距离+手指移动的距离
    var translatex = -index * w + moveX;
    //手指拖动的时候不需要拖动效果，所以要取消拖动效果
    ul.style.transition = 'none';
    ul.style.transform = 'translateX(' + translatex + 'px)';
    flag = true; //用户手指移动
    e.defaultPrevented(); //阻止滚动屏幕的行为
  });

  // 手指离开 根据移动的距离去判断是否回弹还是播放下一张或者下一张
  ul.addEventListener('touchend', function () {
    if (flag) {
      //如果移动距离大于50像素，就播放下一张或者下一张
      if (moveX > 50) {
        //右滑 播放上一张
        if (moveX > 0) {
          index--;
        } else {
          //左滑  播放下一张
          index++;
        }
        var translatex = -index * w;
        ul.style.transition = 'all 0.3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
      } else { //像素小于50就回弹 
        var translatex = -index * w;
        ul.style.transition = 'all 0.1s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
      }
    }

    //手指离开重新开始定时器
    clearInterval(timer); //保证页面只有一个定时器运行
    var timer = setInterval(function () {
      index++;
      var translatex = -index * w;
      ul.style.transition = 'all 0.3s';
      ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
  });

  //返回顶部
  var goBack = document.querySelector('.goBack');
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= nav.offsetTop) {
      goBack.style.display = 'block';
    } else {
      goBack.style.display = 'none';
    }
  });

  //点击事件
  goBack.addEventListener('click',function() {
    window.scroll(0,0);
  });
})
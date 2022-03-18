window.addEventListener('load', function () {
  var preview_img = document.querySelector('.preview_img');
  var mask = document.querySelector('.mask');
  var big = document.querySelector('.big');
  // 1、当我们的鼠标经过preview_img  就显示和隐藏mask 和big
  preview_img.addEventListener('mouseover', function () {
    mask.style.display = 'block';
    big.style.display = 'block';
  })
  preview_img.addEventListener('mouseout', function () {
    mask.style.display = 'none';
    big.style.display = 'none';
  })
  //2、鼠标移动的时候，让黄色的盒子跟着鼠标走
  preview_img.addEventListener('mousemove', function (e) {
    //1、先计算鼠标在盒子内的坐标
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    //2、减去盒子高度和宽度的一半
    //3、我们mask 的移动距离
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    //4、如果x的坐标小于等于0 就让他停在0 的位置
    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= preview_img.offsetWidth - mask.offsetWidth) {
      maskX = preview_img.offsetWidth - mask.offsetWidth;
    }
    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
      maskY = preview_img.offsetHeight - mask.offsetHeight;
    }
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';
    // 大图片的移动距离=遮挡层的移动距离*大图片的最大移动距离/遮挡层的最大移动距离
    var bigImg = document.querySelector('.bigImg');
    var maskMax = preview_img.offsetWidth - mask.offsetWidth;
    var bigMax = bigImg.offsetWidth - big.offsetWidth;
    // 大图片移动距离
    var bigX = maskX * bigMax / maskMax;
    var bigY = maskY * bigMax / maskMax;
    bigImg.style.left = -bigX + 'px';  //要去给bigImg加定位
    bigImg.style.top = -bigY + 'px';
  })
})
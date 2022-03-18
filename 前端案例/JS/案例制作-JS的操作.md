# 案例制作（三）——JS

[TOC]

## 1. 循环精灵图背景

![image-20210326171549383](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210326171549383.png)

```html
<div class="box">
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <script>
        //1.获取所有的li
        var lis = document.querySelectorAll('li');
        for (var i = 0; i < lis.length; i++) {
            //让索引号乘以44就是每个li 的背景y坐标(index)
            var index = i * 44;
            lis[i].style.backgroundPosition = '0 -' + index + 'px';
        }
    </script>
</div>
```

```css
.box {
    width: 250px;
    margin: 100px auto;
}

.box li {
    float: left;
    width: 24px;
    height: 24px;
    margin: 15px;
    background: url(../images/taobaoSpirites.png);
    list-style: none;
}
```



## 2. 显示隐藏文本框内容

![image-20210326173345510](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210326173345510.png)

```html
<input type="text" value="嘻嘻嘻">
<script>
    //1.获取元素
    var text = document.querySelector('input');
    //2.注册事件， 获取焦点事件 onfocus
    text.onfocus = function() {
        if (this.value == '嘻嘻嘻') {
            this.value ='';
        }
        //获得焦点把里面的文字颜色加深
        this.style.color='#333';
    }
    //3.注册失去焦点事件
    text.onblur = function() {
        if(this.value ==''){
            this.value ='嘻嘻嘻';
        }
        //失去焦点把里面的文字颜色变浅
        this.style.color = '#999';
    }
</script>
```

```css
input {
     color: #999;
}
```



## 3. 密码框验证信息

![image-20210326184340066](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210326184340066.png)

![image-20210326185019059](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210326185019059.png)



## 4. 排他思想（算法）

![image-20210326191214404](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210326191214404.png)

```html
<button>按钮1</button>
<button>按钮2</button>
<button>按钮3</button>
<button>按钮4</button>
<button>按钮5</button>
<script>
    //1.获取所有按钮元素
    var btns = document.getElementsByTagName('button');
    //btns是伪数组,
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function () {
            //1.先把所有按钮的颜色去掉
            for (var i = 0; i < btns.length; i++) {
                this.style.backgroundColor = '';
            }
            //2.再把自己的颜色变化
            this.style.backgroundColor = 'pink';
        }
    }
</script>
```



## 5. 百度换肤

```html
 <ul class="baidu">
     <li><img src="../../images/n1.jpg" alt=""></li>
     <li><img src="../../images/n2.jpg" alt=""></li>
     <li><img src="../../images/n3.jpg" alt=""></li>
     <li><img src="../../images/n4.jpg" alt=""></li>
</ul>
<script>
    //1.获取元素
    var imgs = document.querySelector('.baidu').querySelectorAll('img');
    //2.循环注册事件
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function () {
            document.body.style.backgroundImage = 'url(' + this.src + ')';
        }
    }
</script>
```

```css
 * {
     margin: 0;
     padding: 0;
}
body {
    background: url(../../images/n1.jpg) no-repeat center top;
}
.baidu {
    overflow: hidden;
    margin: 100px auto;
    background-color: #fff;
    width: 410px;
    padding-top: 3px;
}
.baidu li{
    float: left;
    margin: 0 1px;
    cursor: pointer;
    list-style: none;
}
.baidu img {
    width: 100px;
}
```



## 6. 表格隔行换色

![image-20210326201118931](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210326201118931.png)

```html
<table>
    <thead>
        <tr>
            <th>代码</th>
            <th>名称</th>
            <th>最新公布净值</th>
            <th>累计净值</th>
            <th>前单位净值</th>
            <th>净值增长率</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>003564</td>
            <td>农行和换行</td>
            <td>1.075</td>
            <td>1.074</td>
            <td>1.079</td>
            <td>+0.047%</td>
        </tr>
        <tr>
            <td>003524</td>
            <td>建行</td>
            <td>1.075</td>
            <td>1.074</td>
            <td>1.079</td>
            <td>+0.047%</td>
        </tr>
        <tr>
            <td>003524</td>
            <td>工商银行</td>
            <td>1.045</td>
            <td>1.074</td>
            <td>1.079</td>
            <td>+0.037%</td>
        </tr>
    </tbody>
</table>
<script>
    //1. 获取元素
    var trs = document.querySelector('tbody').querySelectorAll('tr');
    //2.利用循环绑定事件
    for (var i = 0; i < trs.length; i++) {
        //3.鼠标经过事件 onmouseover
        trs[i].onmouseover = function () {
            this.className = 'bg';
        }
        //4.鼠标离开事件 onmouseout
        trs[i].onmouseout = function() {
            this.className='';
        }
    }
</script>
```

```css
 table {
     width: 800px;
     margin: 100px auto;
     text-align: center;
     border-collapse: collapse;
     font-size: 14px;
}

thead tr {
    height: 30px;
    background-color: skyblue;
}

tbody tr {
    height: 30px;
}

tbody td {
    border-bottom: 1px solid #d7d7d7;
    font-size: 12px;
    color: blue;
}

.bg {
    background-color: orange;
}
```



## 7. 表单全选取消案例

![image-20210326204815036](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210326204815036.png)

![image-20210326210757816](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210326210757816.png)

```html
<table>
    <thead>
        <tr>
            <th>
                <input type="checkbox" id="j_cbAll">
            </th>
            <th>商品</th>
            <th>价钱</th>
        </tr>
    </thead>
    <tbody id="j_tbs">
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>iphone</td>
            <td>8000</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>HUAWEI</td>
            <td>6000</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>IpadAir</td>
            <td>3000</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>MI</td>
            <td>5000</td>
        </tr>
    </tbody>
</table>
<script>
    //1.全选和取消的做法 让所有的复选框的checked属性跟随全选按钮
    var j_cbAll = document.getElementById('j_cbAll'); //全选按钮
    var j_tbs = document.getElementById('j_tbs').getElementsByTagName('input');
    j_cbAll.onclick = function () {
        for (var i = 0; i < j_tbs.length; i++) {
            j_tbs[i].checked = this.checked;
        }
    }
    for (var i = 0; i < j_tbs.length; i++) {
        j_tbs[i].onclick = function () {
            //flag 控制全选按钮是否选中
            var flag = true;
            //每次点击下面的复选框都要循环检查4个小按钮是否被全选中
            for (var i = 0; i < j_tbs.length; i++) {
                if (!j_tbs[i].checked) {
                    flag = false;
                    break;  //提高执行效率
                }
            }
            j_cbAll.checked=flag; //一定要放在for循环的下面
        }
    }
</script>
```

```css
 table {
      width: 300px;
      margin: 100px auto;
      text-align: center;
      border-collapse: collapse;
      font-size: 14px;
    }

    thead tr {
      height: 30px;
      background-color: skyblue;
    }

    tbody tr {
      height: 30px;
    }

    tbody td {
      border-bottom: 1px solid #d7d7d7;
      font-size: 12px;
    }
```



## 8. tab栏切换（重点）

![image-20210327092220603](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210327092220603.png)

![image-20210327095402022](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210327095402022.png)

```html
 <div class="tab">
     <div class="tab_list">
         <ul>
             <li class="current">商品介绍</li>
             <li>规格与包装</li>
             <li>售后保障</li>
             <li>商品评价</li>
             <li>手机社区</li>
         </ul>
     </div>
     <div class="tab_con">
         <div class="item" style="display: block;">
             商品介绍
         </div>
         <div class="item">
             规格与包装
         </div>
         <div class="item">
             售后保障
         </div>
         <div class="item">
             商品评价
         </div>
         <div class="item">
             手机社区
         </div>
     </div>
</div>
<script>
    //获取元素
    var tab_list = document.querySelector('.tab_list');
    var lis = tab_list.querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    //for循环绑定事件
    for (var i = 0; i < lis.length; i++) {
        //开始给5个小li设置索引号
        lis[i].setAttribute('index',i);
        lis[i].onclick = function () {
            //1.点击某一个选项卡，当前的这一个底色变成红色，其余的不变（排他思想），修改类名的方式
            //干掉所有人，其余的类清除class这个类
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            //留下我自己
            this.className = 'current';  
            //2. 下面的显示内容模块
            var index = this.getAttribute('index');
            //干掉所有人，让其余的item隐藏
            for(var i=0;i<items.length;i++) {
                items[i].style.display='none';
            }
            items[index].style.display='block';
        }
    }
</script>
```

```css
* {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.tab {
    margin: 100px auto;
    width: 600px;
}

.tab_list {
    height: 40px;
}

.tab_list li {
    float: left;
    height: 39px;
    line-height: 39px;
    padding: 0 20px;
    text-align: center;
    cursor: pointer;
}

.tab_list .current {
    background-color: #c81623;
    color: #fff;
}

.item_info {
    padding: 20px 0 0 20px;
}

.item {
    display: none;
}
```



## 9.下拉菜单

```html
 <ul class="nav">
     <li>
         <a href="#">微博</a>
         <ul>
             <li>
                 <a href="#">私信</a>
             </li>
             <li>
                 <a href="#">评论</a>
             </li>
             <li>
                 <a href="#">@我</a>
             </li>
         </ul>
     </li>
     <li>
         <a href="#">关于我</a>
         <ul>
             <li>
                 <a href="#">电话</a>
             </li>
             <li>
                 <a href="#">qq</a>
             </li>
             <li>
                 <a href="#">@me</a>
             </li>
         </ul>
     </li>
     <li>
         <a href="#">微博</a>
         <ul>
             <li>
                 <a href="#">私信</a>
             </li>
             <li>
                 <a href="#">评论</a>
             </li>
             <li>
                 <a href="#">@我</a>
             </li>
         </ul>
     </li>
     <li>
         <a href="#">微博</a>
         <ul>
             <li>
                 <a href="#">私信</a>
             </li>
             <li>
                 <a href="#">评论</a>
             </li>
             <li>
                 <a href="#">@我</a>
             </li>
         </ul>
     </li>
</ul>
<script>
    //1.获取元素
    var nav = document.querySelector('.nav');
    var lis = nav.children; //得到4个小li
    //2.循环注册事件
    for (var i=0;i<lis.length;i++) {
        lis[i].onmouseover =function () {
            this.children[1].style.display='block';
        }
        lis[i].onmouseout =function () {
            this.children[1].style.display='none';
        }
    }
</script>
```

```css
//有问题！！
* {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a {
    color: #000;
    text-decoration: none;
}

.nav {
    height: 40px;
    margin: 100px auto;
    text-align: center;
}

.nav>li>a {
    width: 50px;
    height: 100%;
    line-height: 40px;
    color: #333;
}

.nav>li>a:hover {
    background-color: #eee;
}

.nav ul {
    display: none;
    position: absolute;
    top: 41px;
    left: 0;
    width: 100%;
    border-left: 1px solid #FECC5B;
    border-right: 1px solid #FECC5B;
}

.nav ul li {
    border-bottom: 1px solid #FECC5B;
    width: 50px;
    height: 30px; 
}

.nav ul li:hover {
    background-color: #FFF5DA;
}
```



## 10. 发布留言简单版

![image-20210327140506029](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210327140506029.png)

```html
<textarea name="" id="" cols="30" rows="10">123</textarea>
<button>发布</button>
<ul></ul>
<script>
    //1.获取元素
    var btn = document.querySelector('button');
    var text = document.querySelector('textarea');
    var ul = document.querySelector('ul');
    //2.注册事件
    btn.onclick = function () {
        if (text.value == '') {
            alert('您没有输入内容！');
            return false;
        } else {
            //(1)创建元素
            var li = document.createElement('li');
            //先有li才能赋值
            li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";   //javascript:;阻止链接跳转
            //(2)添加元素
            //ul.appendChild(li); //li不加‘’
            ul.insertBefore(li,ul.children[0]);
        }

    }
</script>
```

```css
ul {
    margin-top: 50px;
}

li {
    width: 300px;
    padding: 5px;
    background-color: rgb(245, 209, 243);
    color: red;
    font-size: 14px;
    margin: 15px 0;
}

li a {
    float: right;
}
```



## 11.动态生成表格

![image-20210327141556850](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210327141556850.png)

```html
<table cellspacing="0">
    <thead>
        <tr>
            <th>姓名</th>
            <th>科目</th>
            <th>成绩</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
<script>
    //1.先去准备好数据
    var datas =[{
        name:'小小',
        subject:'机器学习',
        score:100
    },{
        name:'班尼特',
        subject:'Java',
        score:60
    },{
        name:'砂糖',
        subject:'python',
        score:96
    }];
    //2.往tbody里面创建行，有几个人（数组的长度）就创建几行
    var tbody = document.querySelector('tbody');
    for(var i=0;i<datas.length;i++) {
        //创建tr行 
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        //行里面创建单元格（跟数据有关的3个单元格）
        for (var k in datas[i]) {
            var td = document.createElement('td');
            // 把属性值给td
            td.innerHTML=datas[i][k];
            tr.appendChild(td);
        }
        //创建有删除两个字的单元格
        var td = document.createElement('td');
        td.innerHTML="<a href='javascript:;'>删除</a>";
        tr.appendChild(td);
    }
    // 删除操作
    var as = document.querySelectorAll('a');
    for(var i=0;i<as.length;i++) {
        as[i].onclick = function() {
            // 点击a 就删除a所在行（链接的爸爸td的爸爸tr）
            tbody.removeChild(this.parentNode.parentNode);
        }
    }
</script>
```

```css
 table {
     width: 500px;
     margin: 100px auto;
     border-collapse: collapse;
     text-align: center;
}

td,
th {
    border: 1px solid #333;
}

thead tr {
    height: 40px;
    background-color: #ccc;
}
```



## 12. 跟随鼠标移动的天使

![image-20210328124732962](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210328124732962.png)

```html
<img src="../../images/1.gif" alt="">
<script>
    var pic = document.querySelector('img');
    document.addEventListener('mousemove', function (e) {
        //1.只要我们的鼠标移动1px，就会触发这个事件
        var x = e.pageX;
        var y = e.pageY;
        //console.log("x:"+x,"y:"+y);
        //不要忘记left和top的单位px
        pic.style.left = (x-pic.width/2) + 'px';
        pic.style.top = (y-pic.height/2) + 'px';
    })
</script>
```

```css
img {
    position: absolute;
    width: 80px;
    height: 100px;
}
```



## 13. 按按键输入框获得焦点

![image-20210329122710314](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210329122710314.png)

```html
<input type="text" name="" id="">
<script>
    var search = document.querySelector('input');
    document.addEventListener('keyup',function(e){  //不用keydown keydown会把s也输入进输入框中
        if(e.keyCode==83) {
            search.focus();
        }
    })
</script>
```



## 14. 京东快递单号查询

![image-20210329123353189](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210329123353189.png)

![image-20210329132914383](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210329132914383.png)

```html
<div class="search">
    <div class="con"></div>
    <input type="text" placeholder="请输入您的快递单号" class='jd'>
</div>
<script>
    var con = document.querySelector('.con');
    var jd_input = document.querySelector('.jd');
    jd_input.addEventListener('keyup',function() {
        if(this.value==''){
            con.style.display='none';
        }else {
            con.style.display='block';
            con.innerHTML=this.value;  
        }
    })
    //失去焦点是，上面的提示框隐藏起来
    jd_input.addEventListener('blur',function() {
        con.style.display='none';
    })
    //失去焦点时，显示con盒子
    jd_input.addEventListener('focus',function() {
        if(this.value!='') {
            con.style.display='block';
        }
    })

</script>
```

```css
 * {
     margin: 0;
     padding: 0;
}
.search {
    position: relative;
    width: 178px;
    margin: 100px;
}
.con {
    display: none;
    position: absolute;
    top: -40px;
    width: 171px;
    border: 1px solid rgba(0,0,0,.2);
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    padding: 5px 0;
    font-size: 18px;
    line-height: 20px;
    color: #333;
}
.con::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 28px;
    left: 18px;
    border: 8px solid #000;
    border-style: solid dashed dashed;
    border-color: #fff transparent transparent;
}
```



## 15. 倒计时

![image-20210329163137082](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210329163137082.png)

![image-20210329170407020](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210329170407020.png)

```html
<div>
    <span class="hour"></span>
    <span class="minute"></span>
    <span class="second"></span>
</div>
<script>
    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var inputTime = +new Date('2021-3-30 14:00'); //返回用户输入时间的总的毫秒数
    countDown(); //先调用一次，防止第一次刷新页面出现空白
    //开启定时器
    setInterval(countDown,1000);
    function countDown(time) {
        var nowTime = +new Date(); //返回当前时间的总的毫秒数
        var times = (inputTime - nowTime) / 1000; //times 是剩余时间总的秒数
        var h = parseInt(times / 60 / 60 % 24); //小时
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h; //把剩余的小时给小时的黑色盒子
        var m = parseInt(times / 60 % 60) //分
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m; //把剩余的分钟给小时的黑色盒子
        var s = parseInt(times % 60) //当前的秒
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s; //把剩余的秒数给秒数的黑色盒子
    }
</script>

```

```css
div {
    width: 200px;
    height: 100px;
    margin: 100px auto;
}
span {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 3px;
    line-height: 50px;
    background-color: #000;
    color: #fff;
    text-align: center;
}
```



## 16. 发送短信定时器

![image-20210329170754791](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210329170754791.png)

![image-20210329171618444](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210329171618444.png)

```html
<body>
  手机号码：<input type="number"> <button>发送</button>
  <script>
    var btn = document.querySelector('button');
    var time = 5; //剩下的秒数
    btn.addEventListener('click', function () {
      btn.disabled = true;
      var timer = setInterval(function () {
        if (time == 0) {
          //清除定时器和复原按钮
          clearInterval(timer);
          btn.disabled = false;
          btn.innerHTML = '发送';
          time = 5;
        } else {
          btn.innerHTML = '还剩下' + time + '秒';
          time--;
        }
      }, 1000)
    })
  </script>
</body>
```



## 17、5秒钟后自动跳转页面

```html
<body>
  <button>点击</button>
  <div></div>
  <script>
    var btn = document.querySelector('button');
    var div = document.querySelector('div');
    var timer=5;
    btn.addEventListener('click',function() {
      setInterval(function() {
        if(timer==0){
          location.href='http://www.baidu.com';
        }else {
          div.innerHTML='您将在'+timer+'秒钟之后跳转首页';
          timer--;
        }
      },1000)
    })
  </script>
</body>
```



## 18、获取url参数

![image-20210405154015983](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210405154015983.png)

login.html

```html
<body>
  <form action="index.html">
    用户名： <input type="text" name="uname">
    <input type="submit" value="登录">
  </form>
</body>
```

index.html

```html
<body>
  <div></div>
  <script>
    //1、先去掉？ substr('起始的位置'，截取几个字符) 
    var params =location.search.substr(1); //先去掉？
    //2、利用=把字符串分割为数组 split('=')
    var arr=params.split('=');
    var div =document.querySelector('div')
    div.innerHTML=arr[1]+'欢迎您';
  </script>
</body>
```



## 19、获取鼠标在盒子内的坐标

```html
<body>
  <div class="box"></div>
  <script>
    var div = document.querySelector('.box');
    div.addEventListener('mousemove', function (e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      this.innerHTML='x的坐标是'+x+',y的坐标是'+y;
    })
  </script>
</body>
```



## 20、模态框拖拽

![image-20210405172059344](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210405172059344.png)

![image-20210407161859855](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210407161859855.png)

```html
<body>
  <div class="login-header"><a id="link" href="javascript:;">点击，弹出登录框</a></div>
  <div id="login" class="login">
    <div id="title" class="login-title">登陆会员
      <span><a href="javascipt:void(0);" id="closeBtn" class="close-login">关闭</a></span>
    </div>
    <div class="login-input-content">
      <div class="login-input">
        <label for="username">用户名：</label>
        <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="">
      </div>
      <div class="login-input">
        <label for="password">登录密码：</label>
        <input type="password" placeholder="请输入密码" name="info[password]" id="password">
      </div>
    </div>
    <div id="loginBtn" class="login-button"><a href="javascipt:void(0);" id="login-button-submit"></a></div>
  </div>
  <!-- 遮盖层 -->
  <div id="bg" class="login-bg"></div>
  <script>
    //1、获取元素
    var login= document.querySelector('.login');
    var mask= document.querySelector('.login-bg');
    var link =document.querySelector('#link');
    var closeBtn =document.querySelector('#closeBtn');
    var title=document.querySelector('#title');
    //2、点击弹出层这个链接link 让mask和login显示出来
    link.addEventListener('click',function() {
      mask.style.display='block';
      login.style.display='block';
    })
    //3、点击关闭，隐藏mask和login
    closeBtn.addEventListener('click',function() {
      mask.style.display='none';
      login.style.display='none';
    })
    //4、开始拖拽
    //1) 鼠标按下就获得鼠标在盒子内的坐标
    login.addEventListener('mousedown',function(e) {
      var x=e.pageX-login.offsetLeft;
      var y=e.pageY-login.offsetTop;
      //2) 鼠标移动的时候，把鼠标在页面中的坐标减去鼠标在盒子内的坐标就是模态框的left和top值
      document.addEventListener('mousemove',move);
      function move(e) {
        login.style.left=e.pageX-x+'px';       
        login.style.top=e.pageY-y+'px';
      }
       //3)鼠标弹起，就让鼠标移动事件移除
       document.addEventListener('mouseup',function() {
          document.removeEventListener('mousemove',move);
      })
    })
  </script>
</body>
```

```css
<style>
h6,
a {
    padding: 0;
    margin: 0;
}

.login-header {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}

a {
    text-decoration: none;
    color: #000;
}
.login {
    display: none;
    width: 512px;
    height: 280px;
    position: fixed;
    border: #ebebeb solid 1px;
    left: 50%;
    top: 50%;
    background: #ffffff;
    box-shadow: 0px 0px 20px #ddd;
    z-index: 9999;
    transform: translate(-50%, -50%);
}

.login-title {
    position: relative;
    width: 100%;
    height: 40px;
    margin: 10px 0px 0px 0px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    cursor: move;
}

.login-input-content {
    margin-top: 20px;
}

.login-button {
    width: 50%;
    margin: 30px auto 0px auto;
    line-height: 40px;
    font-size: 14px;
    border: #ebebeb 1px solid;
    text-align: center;
}

.login-bg {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, .3);
}

.login-button a {
    display: block;
}

.login-input input.list-input {
    float: left;
    width: 350px;
    height: 35px;
    line-height: 35px;
    border: #ebebeb 1px solid;
    text-indent: 5px;
}

.login-input {
    overflow: hidden;
    margin: 0px 0px 20px 0px;
}

.login-input label {
    float: left;
    width: 90px;
    height: 35px;
    line-height: 35px;
    padding-right: 10px;
    text-align: right;
    font-size: 14px;
}

.login-title span {
    position: absolute;
    font-size: 12px;
    right: -20px;
    top: -30px;
    background: #ffffff;
    border: #ebebeb solid 1px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
</style>
```



## 21、仿京东放大镜

![image-20210407163813282](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210407163813282.png)

![image-20210407171830996](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210407171830996.png)

![image-20210407171914400](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210407171914400.png)

```html
<body>
  <!-- 产品介绍模块 -->
  <div class="product_intro clearfix">
    <!-- 预览区域 -->
    <div class="preview_wrap fl">
      <div class="preview_img">
        <img src="imgs/m1_s.jpg" alt="">
        <div class="mask"></div>
        <div class="big">
          <img src="imgs/m1_big.jpg" alt="" class="bigImg">
        </div>
      </div>
  </div>
  <script></script>
</body>
```

```css
.preview_wrap {
  width: 400px;
  height: 590px;
}

.preview_img {
  position: relative;
  height: 380px;
  border: 1px solid #ccc;
  text-align: center;
}

.preview_img img {
  height: 380px;
}

.mask {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background-color: #FEDE4F;
  opacity: .5;
  border: 1px solid #ccc;
  cursor: move;
}

.big {
  display: none;
  position: absolute;
  left: 410px;
  top: 0;
  width: 500px;
  height: 500px;
  background: pink;
  z-index: 999;
  border: 1px solid #ccc;
  overflow: hidden;
}
.big img {
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
}
```

```js
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
```



## 22、仿淘宝固定侧边栏

![image-20210407232530925](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210407232530925.png)

![image-20210407233556843](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210407233556843.png)

![image-20210410141349715](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410141349715.png)

```html
<body>
  <div class="slider-bar">
    <span class="goBack">返回顶部</span>
  </div>
  <div class="header w">头部区域</div>
  <div class="banner w">banner区域</div>
  <div class="main w">主体部分</div>
  <script>
    //1、获取元素
    var sliderbar = document.querySelector('.slider-bar');
    var banner = document.querySelector('.banner');
    var bannerTop = banner.offsetTop; //被卷去头部的大小
    // 当我们侧边栏固定定位之后应该变化的数值
    var sliderbarTop = sliderbar.offsetTop - bannerTop;
    //获取mian主题元素
    var main =document.querySelector('.main');
    var goBack =document.querySelector('.goBack');
    var mainTop= main.offsetTop;

    //2、页面滚动事件 scroll
    document.addEventListener('scroll', function () {

      //windows.pageYOffset  页面被卷去的页面
      //3、当我们的页面被卷去的头部大于等于172 此时侧边栏要改为固定定位
      if (window.pageYOffset >= bannerTop) {
        sliderbar.style.position = 'fixed';
        sliderbar.style.top=sliderbarTop+'px';
      } else {
        sliderbar.style.position = 'absolute';
        sliderbar.style.top='300px';
      }

      //当我们页面滚动到main模块 就显示goBack模块
      if (window.pageYOffset >= mainTop) {
        goBack.style.display = 'block';
      } else {
        goBack.style.display = 'none';
      }

      // 当我们点击了返回顶部模块，就让窗口滚动到页面的最上方
      goBack.addEventListener('click',function() {
        //里面的x，y不加单位
        //window.scroll(0,0);
        animate(window, 0);
      })

      //动画函数
      function animate(obj, target, callback) {  //前面必须要加function关键字
        clearInterval(obj.timer)
        obj.timer = setInterval(function () {
          var step = (target - window.pageYOffset) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          if (window.pageYOffset == target) {
            //停止动画 本质停止定时器
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面
            callback && callback();
          }
      
          window.scroll(0,window.pageYOffset + step);
      
        },15);
      }
    })
  </script>
</body>
```

```css
<style>
.w {
    width: 900px;
    margin: 10px auto;
}

.slider-bar {
    position: absolute;
    top: 300px;
    right: 140px;
    height: 100px;
    width: 35px;
    background-color: purple;
}

.goBack {
    position: absolute;
    display: none;
    color: black;
}

.header {
    height: 170px;
    background-color: pink;
}

.banner {
    height: 250px;
    background-color: skyblue;
}

.main {
    height: 600px;
    background-color: yellowgreen;
}

span {
    display: none;
    position: absolute;
    bottom: 0;
}
</style>
```



## 23、侧边栏盒子左右的移动

```html
<body>
  <div class="sliderbar">
    <span>⬅</span>
    <div class="con">问题反馈</div>
  </div>

  <script>
    //1、获取元素
    var sliderbar=document.querySelector('.sliderbar');
    var con = document.querySelector('.con');
    //当鼠标经过 sliderbar 就会让con这个盒子滑动到左侧
    sliderbar.addEventListener('mouseenter',function() {
      animate(con,-160,function() {
        //当我们执行完毕就把左箭头变为右箭头
        sliderbar.children[0].innerHTML='➡';
      });
    })
    //当鼠标离开 sliderbar 就会让con这个盒子滑动到右侧
    sliderbar.addEventListener('mouseleave',function() {
      animate(con,0,function() {
          //当我们执行完毕就把➡变为⬅ 
          sliderbar.children[0].innerHTML='⬅';
      });
    })
  </script>
</body>
```

```css
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.sliderbar {
    position: absolute;
    bottom: 100px;
    right: 0;
    width: 40px;
    height: 40px;
    color: white;
    background-color: purple;
    text-align: center;
    padding-top: 10px;
}

.con {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 40px;
    text-align: left;
    background-color: purple;
    z-index: -1;
}
</style>
```

```js
function animate(obj, target, callback) {  //前面必须要加function关键字
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      //停止动画 本质停止定时器
      clearInterval(obj.timer);
      //回调函数写到定时器结束里面
      if (callback) {
        //调用函数
        callback();
      }
    }

    obj.style.left = obj.offsetLeft + step + 'px';

  },15);
}
```



## 24、放淘宝网页轮播图

![image-20210408124424728](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210408124424728.png)

![image-20210408124445363](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210408124445363.png)  

![image-20210410084324325](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410084324325.png)

![image-20210410091027493](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410091027493.png)

![image-20210410094028743](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410094028743.png)

![image-20210410122303995](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410122303995.png)

### 24.1自动播放功能

![image-20210410125553266](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410125553266.png)

### 24.2 节流阀

![image-20210410135600010](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410135600010.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>品优购商城—综合网购首选-正品低价、品质保障、配送及时、轻松购物！</title>
  <!-- 网站说明 -->
  <meta name="description" content="品优购JD.COM-专业的综合网上购物商城,销售家电、数码通讯、
    电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!">
  <!-- 关键词 -->
  <meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,品优购">
  <link rel="shortcut icon" href=" favicon.ico">
  <!-- 引入初始化样式文件 -->
  <link rel="stylesheet" href="css/base.css">
  <!-- 引入公共样式文件 -->
  <link rel="stylesheet" href="css/common.css">
  <!-- 引入首页样式 -->
  <link rel="stylesheet" href="css/index.css">
  <!-- animate.js必须写到index.js的前面 -->
  <script src="js/animate.js"></script> 
  <script src="js/index.js"></script>
</head>

<body>
  <!-- 快捷导航模块 start -->
  <section class="shortcut">
    <div class="w">
      <div class="fl">
        <ul>
          <li>品优购欢迎您！&nbsp;</li>
          <li>
            <a href="#">请登录 &nbsp;</a><a href="register.html" class="style_red">免费注册</a> <!-- 行内元素放在一行写 -->
          </li>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <li>我的订单</li>
          </li>
          <li></li>
          <li class="arrow-icon">我的品优购</li>
          <li></li>
          <li>品优购会员</li>
          <li></li>
          <li>企业采购</li>
          <li></li>
          <li class="arrow-icon">关注品优购</li>
          <li></li>
          <li class="arrow-icon">客户服务</li>
          <li></li>
          <li class="arrow-icon">网站导航</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- 快捷导航模块 end -->
  <!-- header 头部模块start -->
  <header class="header w">
    <!-- logo 模块 -->
    <div class="logo">
      <h1>
        <a href="index.html" title="品优购商城">品优购商城</a>
      </h1>
    </div>
    <!-- 列表页秒杀模块start -->
    <div class="sk">
      <img src="" alt="">
    </div>
    <!-- 列表页秒杀模块end -->
    <!-- 搜索框 -->
    <div class="search">
      <input type="search" placeholder="宇航员打怪兽">
      <button>搜索</button>
    </div>
    <!-- hotwords 模块 -->
    <div class="hotwords">
      <a href="#" class="style_red">优惠购首发</a></a>
      <a href="#">亿元优惠</a>
      <a href="#">9.9元团购</a>
      <a href="#">每满99减30</a>
      <a href="#">办公用品</a>
      <a href="#">电脑</a>
      <a href="#">通信</a>
    </div>
    <!-- 购物车模块 -->
    <div class="shopcar">
      我的购物车
      <i class="count">8</i>
    </div>
  </header>
  <!-- header 头部模块end -->
  <!-- nav 导航模块 start -->
  <nav class="nav">
    <div class="w">
      <div class="dropdown">
        <div class="dt">全部商品分类</div>
        <div class="dd">
          <ul>
            <li><a href="#">家用电器</a><a href="#"></a></li>
            <li><a href="#">手机、数码、通信</a></li>
            <li><a href="#">电脑、办公</a></li>
            <li><a href="#">家居、家具 </a></li>
            <li><a href="#">男装、女装、童装</a></li>
            <li><a href="#">化妆品、清洁用品、宠物</a></li>
            <li><a href="#">鞋靴、箱包、珠宝、奢侈品</a></li>
            <li><a href="#">运动户外、钟表</a></li>
            <li><a href="#">汽车、汽车用品</a></li>
            <li><a href="#">母婴、玩具</a></li>
            <li><a href="#">食品、酒类、生鲜、特产</a></li>
            <li><a href="#">医药保健</a></li>
            <li><a href="#">图书、音像、电子书</a></a></li>
            <li><a href="#">彩票、旅行、充值、票务</a></li>
            <li><a href="#">理财、众筹、白条、保险</a></li>
          </ul>
        </div>
      </div>
      <div class="navitems">
        <ul>
          <li><a href="#">服装城</a></li>
          <li><a href="#">美妆馆</a></li>
          <li><a href="#">超市</a></a></a></li>
          <li><a href="#">全球购</a></li>
          <li><a href="#">闪购</a></li>
          <li><a href="#">团购</a></li>
          <li><a href="#">拍卖</a></li>
          <li><a href="#">有趣</a></li>
        </ul>

      </div>
    </div>
  </nav>
  <!-- nav 导航模块 end -->
  <!-- main 模块 start -->
  <div class="w">
    <div class="main">
      <div class="focus fl">
        <!-- 左侧按钮 -->
        <a href="javascript:;" class="arrow-l"></a>
        <!-- 右侧按钮 -->
        <a href="javascript:;" class="arrow-r"></a>
        <!-- 核心的滚动区域 -->
        <ul>
          <li>
            <a href="#"><img src="images/focus.jpg" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="images/n1.jpg" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="images/n3.jpg" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="images/n4.jpg" alt=""></a>
          </li>
        </ul>
        <!-- 小圆圈 -->
        <ol class="circle">
        </ol>
      </div>
      <div class="newsflash fr">
        <div class="news">
          <div class="news_hd">
            <h5>品优购快报</h5>
            <a href="#" class="more">更多</a>
          </div>
          <div class="news_bd">
            <ul>
              <li><a href="#"><strong>【重磅】</strong>小小环游世界了！小小爱大大！!111</a></li>
              <li><a href="#"><strong>【公告】</strong>大大环游世界了！</a></li>
              <li><a href="#"><strong>【特惠】</strong>freda环游世界了！</a></li>
              <li><a href="#"><strong>【公告】</strong>martian环游世界了！</a></li>
              <li><a href="#"><strong>【重磅】</strong>Elvira环游世界了！</a></li>
            </ul>
          </div>
        </div>
        <div class="lifeservice">
          <ul>
            <li>
              <i></i>
              <p>话费</p>
            </li>
            <li>
              <i></i>
              <p>机票</p>
            </li>
            <li>
              <i></i>
              <p>酒店</p>
            </li>
            <li>
              <i></i>
              <p>彩票</p>
            </li>
            <li>
              <i></i>
              <p>话费</p>
            </li>
            <li>
              <i></i>
              <p>话费</p>
            </li>
            <li>
              <i></i>
              <p>话费</p>
            </li>
            <li>
              <i></i>
              <p>话费</p>
            </li>
            <li>
              <i></i>
              <p>话费</p>
            </li>
            <li>
              <i></i>
              <p>话费</p>
            </li>
            <li>
              <i></i>
              <p>话费</p>
            </li>
            <li>
              <i></i>
              <p>话费</p>
            </li>

          </ul>
        </div>
        <div class="bargain">
          <img src="images/bargain.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- main 模块 end -->
  <!-- 推荐模块 start -->
  <div class="w recom">
    <div class="recom_hd">
      <img src="images/clock.png" alt="">
      <h3>今日推荐</h3>
    </div>
    <div class="recom_bd">
      <ul>
        <li><img src="images/rm1.jpg" alt=""></li>
        <li><img src="images/rm2.jpg" alt=""></li>
        <li><img src="images/rm3.jpg" alt=""></li>
        <li><img src="images/rm4.jpg" alt=""></li>
      </ul>
    </div>
  </div>
  <!-- 推荐模块 end -->
  <!-- 楼层区域 start -->
  <div class="floor">
    <!-- 一楼家用电器 -->
    <div class="w jiadian">
      <div class="box_hd">
        <h3>家用电器</h3>
        <div class="tab_list">
          <ul>
            <li><a href="#" class="style_red">热门</a>|</li>
            <li><a href="#">大家电</a>|</li>
            <li><a href="#">生活电器</a>|</li>
            <li><a href="#">厨房电器</a>|</li>
            <li><a href="#">个护健康</a>|</li>
            <li><a href="#">应季电器</a>|</li>
            <li><a href="#">空气/净水</a>|</li>
            <li><a href="#">新奇特</a>|</li>
            <li><a href="#">高端电器</a></li>
          </ul>
        </div>
      </div>
      <div class="box_bd">
        <div class="tab_content">
          <div class="tab_list_item">
            <div class="col_210">
              <ul>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
              </ul>
              <a href="#">
                <img src="images/jd1.jpg" alt="">
              </a>
            </div>
            <div class="col_329">
              <a href="#">
                <img src="images/jd2.jpg" alt="">
              </a>
            </div>
            <div class="col_221">
              <a href="#" class="b_bottom"><img src="images/jd3.jpg" alt=""></a>
              <a href="#"><img src="images/jd4.jpg" alt=""></a>
            </div>
            <div class="col_221">
              <a href="#">
                <img src="images/jd5.jpg" alt="">
              </a>
            </div>
            <div class="col_219">
              <a href="#" class="b_bottom"><img src="images/jd6.jpg" alt=""></a>
              <a href="#"><img src="images/jd7.jpg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 二楼手机通讯 -->
    <div class="w jiadian">
      <div class="box_hd">
        <h3>家用电器</h3>
        <div class="tab_list">
          <ul>
            <li><a href="#" class="style_red">热门</a>|</li>
            <li><a href="#">大家电</a>|</li>
            <li><a href="#">生活电器</a>|</li>
            <li><a href="#">厨房电器</a>|</li>
            <li><a href="#">个护健康</a>|</li>
            <li><a href="#">应季电器</a>|</li>
            <li><a href="#">空气/净水</a>|</li>
            <li><a href="#">新奇特</a>|</li>
            <li><a href="#">高端电器</a></li>
          </ul>
        </div>
      </div>
      <div class="box_bd">
        <div class="tab_content">
          <div class="tab_list_item">
            <div class="col_210">
              <ul>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
                <li><a href="#">节能补贴</a></li>
              </ul>
              <a href="#">
                <img src="images/jd1.jpg" alt="">
              </a>
            </div>
            <div class="col_329">
              <a href="#">
                <img src="images/jd2.jpg" alt="">
              </a>
            </div>
            <div class="col_221">
              <a href="#" class="b_bottom"><img src="images/jd3.jpg" alt=""></a>
              <a href="#"><img src="images/jd4.jpg" alt=""></a>
            </div>
            <div class="col_221">
              <a href="#">
                <img src="images/jd5.jpg" alt="">
              </a>
            </div>
            <div class="col_219">
              <a href="#" class="b_bottom"><img src="images/jd6.jpg" alt=""></a>
              <a href="#"><img src="images/jd7.jpg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 楼层区域 end -->
  <!-- footer 底部start -->
  <footer class="footer">
    <div class="w">
      <div class="mod_service">
        <ul>
          <li>
            <h5></h5>
            <div class="service_txt">
              <h4>正品保证</h4>
              <p>正品保障，提供发票</p>
            </div>
          </li>
          <li>
            <h5></h5>
            <div class="service_txt">
              <h4>正品保证</h4>
              <p>正品保障，提供发票</p>
            </div>
          </li>
          <li>
            <h5></h5>
            <div class="service_txt">
              <h4>正品保证</h4>
              <p>正品保障，提供发票</p>
            </div>
          </li>
          <li>
            <h5></h5>
            <div class="service_txt">
              <h4>正品保证</h4>
              <p>正品保障，提供发票</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="mod_help">
        <dl>
          <dt>服务指南</dt>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">生活旅行/团购</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">大家电</a></dd>
          <dd><a href="#">联系客服</a></dd>
        </dl>
        <dl>
          <dt>配送方式</dt>
          <dd><a href="#">配送</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">生活旅行/团购</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">大家电</a></dd>
          <dd><a href="#">海外配送 </a></dd>
        </dl>
        <dl>
          <dt>支付方式</dt>
          <dd><a href="#">货到付款</a></dd>
          <dd><a href="#">在线支付</a></dd>
          <dd><a href="#">分期付款</a></dd>
          <dd><a href="#">邮局汇款</a></dd>
          <dd><a href="#">公司转载</a></dd>
        </dl>
        <dl>
          <dt>售后服务</dt>
          <dd><a href="#">售后政策</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">生活旅行/团购</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">取消订单</a></dd>
        </dl>
        <dl>
          <dt>特色服务</dt>
          <dd><a href="#">原神</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">DIY</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">大家电</a></dd>
        </dl>
        <dl>
          <dt>帮助中心</dt>
          <dd>
            <img src="images/erweima.png" alt="">
            品优购客户端
          </dd>
        </dl>

      </div>
      <div class="mod_copyright">
        <div class="links">
          <a href="#">关于我们</a> | <a href="#">联系我们</a> | <a href="#">联系客服</a> | <a href="#">商家入驻</a> | <a
            href="#">营销中心</a> | <a href="#">手机品优购</a> | <a href="#">友情链接</a> | <a href="#">销售联盟</a> | <a
            href="#">品优购社区</a> | <a href="#">品优购公益</a> | <a href="#">English Site</a> | <a href="#">Contact U</a>
        </div>
        <div class="copyright">
          地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn
          <br>京ICP备08001421号京公网安备110108007702
        </div>
      </div>
    </div>
  </footer>
  <!-- footer 底部end -->
</body>
</html>
```

```css
/*base.css*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

em,
i {
    font-style: normal;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #666;
}

a:hover {
    color: #c81623;;
}

img {
    border: 0;
}

/* 清除浮动 */
.clearfix::after {
    content: ""; /*必须写*/
    visibility: hidden;
    clear: both;
    display: block;
    height: 0;
}
.clearfix {
    *zoom: 1;
}

button,
input {
    font-family: Microsoft YaHei,Heiti SC,tahoma,Arial, Helvetica, sans-serif,"\5B8B\4F53";
    /* 默认有灰色边框，需要去掉 */
    border: 0;
    outline: none;
}

body {
    -webkit-font-smoothing:antialiased;
    background-color: #fff;
    font:12px/1.5 Microsoft YaHei,Heiti SC,tahoma,Arial, Helvetica, sans-serif,"\5B8B\4F53";
    color:#666
}
```

```css
/*common.css*/
/* 公共样式：版心宽度、清除浮动、页面文字颜色 */
/* 声明字体图标 注意要更换路径 */
@font-face {
    font-family: 'icomoon';
    src:  url('../fonts/icomoon.eot?tsqzvv');
    src:  url('../fonts/icomoon.eot?tsqzvv#iefix') format('embedded-opentype'),
      url('../fonts/icomoon.ttf?tsqzvv') format('truetype'),
      url('../fonts/icomoon.woff?tsqzvv') format('woff'),
      url('../fonts/icomoon.svg?tsqzvv#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
/* 版心 */
.w {
    width: 1200px;
    margin: 0 auto;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.style_red {
    color: #c81623;
}
/* 快捷导航 */
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}
.shortcut ul li {
    float: left;
}
/* 选择所有偶数的小li */
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0 15px;
}

.arrow-icon::after {
    content: "\e913";
    font-family: 'icomoon';
    margin-left: 6px;
}

/* 头部制作 */
.header {
    position: relative;
    height: 105px;
}
.header .logo {
    position:absolute;
    top: 25px;
    width: 175px;
    height: 61px;
}
.header .logo a {
    display: block;
    width: 175px;
    height: 61px;
    /* font-size: 0; */
    text-indent: -999px;
    overflow: hidden;
    background: url(../images/logo.png) no-repeat;
}
.header .search {
    position: absolute;
    left: 342px;
    top: 25px;
    width: 538px;
    height: 36px;
}
.search input {
    float: left;
    width: 454px;
    height: 32px;
    padding-left: 10px;
    /* border不是加给.header .search的 */
    border: 2px solid #b1191a;  
}
.search button {
    float: left;
    width: 80px;
    height: 32px;
    font-size: 15px;
    color: #fff;
    background-color: #b1191a;
}
.hotwords {
    position: absolute;
    top: 66px;
    left: 346px;
}
.hotwords a {
    margin: 0 10px;
}
.shopcar {
    position: absolute;
    right: 60px;
    top: 25px;
    width: 140px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;
}
.shopcar::before {
    content: "\e91a";
    font-family: 'icomoon';
    margin-right: 5px;
    color: #b1191a;
}
.shopcar::after {
    content: "\e90a";
    font-family: 'icomoon';
    margin-left: 10px;
}

.count {
    position: absolute;
    top: -5px;
    /* right: 25px;  最好不要写right 默认了右对齐 */
    left: 100px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    background-color: #e60012;
    padding: 0 5px;
    border-radius: 7px 7px 7px 0;
}

/* nav 导航 */
.nav {
    height: 47px;
    border-bottom: 2px solid #b1191a;
}
.nav .dropdown {
    float: left;
    width: 210px;
    height: 45px;
    background-color: #b1191a;
}
.nav .navitems {
    float: left;
}
.dropdown .dt {
    width: 100%;
    height: 100%;
    color: #fff;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
}
.dropdown .dd {
    /* display: none; */
    width: 210px;
    height: 465px;
    background-color: #c81623;
    margin-top: 2px;
}
.dropdown .dd ul li {
    position: relative;
    height: 31px;
    line-height: 31px;
    margin-left: 2px;
    padding-left: 10px;
}
.dropdown .dd ul li:hover {
    background-color: #fff;
}
.dropdown .dd ul li::after {
    position: absolute;
    top: 1px;
    right: 10px;
    color: #fff;
    content: "\e90a";
    font-family: "icomoon";
    font-size: 14px;
}
.dropdown .dd ul li a {
    font-size: 14px;
    color: #fff;
}
.dropdown .dd ul li:hover  a{  /*注意不是ul li a:hover*/
    color: #c81623;
}

.navitems ul li {
    float: left;
}
.navitems ul li a {
    display: block;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    padding: 0 25px;   /*给a 加padding 这样经过空白区域时也能被点击*/
}

/* 底部制作 */
.footer {
    height: 415px;
    background-color: #f5f5f5;
    padding-top: 30px;
}
.mod_service {
    height: 80px;
    border-bottom: 1px solid #ccc;
}
.mod_service ul li {
    float: left;
    width: 300px;
    height: 50px;
    padding-left: 35px;
}
.mod_service ul li h5 {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 8px;
    background: url(../images/icons.png) no-repeat -252px -2px;
}
.service_txt h4 {
    font-size: 14px;
}
.service_txt p {
    font-size: 12px;
}

.mod_help { 
    height: 185px;
    border-bottom: 1px solid #ccc;
    padding-top: 20px;
    padding-left: 50px;
}
.mod_help dl {
    float: left;
    width: 200px;
}
.mod_help dl:last-child {
    width: 90px;
    text-align: center;
}
.mod_help dl dt {
    font-size: 16px;
    margin-bottom: 10px;
}

.mod_copyright {
    text-align: center;
    padding-top: 20px;
}
.links {
    margin-bottom: 15px;
}
.links a {
    margin: 0 3px;
}
.copyright {
    line-height: 20px;
}
```

```css
/*index.css*/
.main {
  width: 980px;
  height: 455px;
  margin-left: 220px;
  margin-top: 10px;
}

.focus {
  position: relative;
  width: 721px;
  height: 455px;
  background-color: purple;
  overflow: hidden;
}

.focus ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 600%;
}

.focus ul li {
  float: left;
}

.arrow-l,
.arrow-r {
  display: none;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 24px;
  height: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, .3);
  text-align: center;
  color: #fff;
  font-family: 'icomoon';
  font-size: 18px;
  z-index: 2;
}

.arrow-r {
  right: 0;
}

.circle {
  position: absolute;
  bottom: 15px;
  left: 50px;
}

.circle li {
  float: left;
  width: 10px;
  height: 10px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin: 0 3px;
  border-radius: 50%;
  cursor: pointer;
}

.current {
  background-color: #fff;
}

.newsflash {
  float: right;
  width: 250px;
  height: 455px;
}

.news {
  height: 165px;
  border: 1px solid #e4e4e4;
}

.news_hd {
  height: 33px;
  line-height: 33px;
  border-bottom: 1px dotted #e4e4e4;
  padding: 0 15px;
}

.news_hd h5 {
  float: left;
  font-size: 14px;
}

.news_hd .more {
  float: right;
}

.news_hd .more::after {
  font-family: "icomoon";
  content: "\e90a";
}

.news_bd {
  padding: 5px 15px 0;
}

.news_bd ul li {
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lifeservice {
  height: 209px;
  border: 1px solid #e4e4e4;
  border-top: 0;
  overflow: hidden;
}

.lifeservice ul {
  width: 252px;
}

.lifeservice ul li {
  float: left;
  width: 63px;
  height: 71px;
  text-align: center;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}

.lifeservice ul li i {
  display: inline-block;
  width: 24px;
  height: 28px;
  margin-top: 12px;
  background: url(../images/icons.png) no-repeat -19px -15px;
}

.lifeservice ul li:nth-child(2) i {
  background: url(../images/icons.png) no-repeat -79px -15px;
}

.bargain {
  margin-top: 5px;
}

/* 推荐模块 */
.recom {
  height: 163px;
  margin-top: 12px;
  background-color: #ebebeb;
}

.recom_hd {
  float: left;
  height: 163px;
  width: 205px;
  background-color: #5c5251;
  text-align: center;
  padding-top: 30px;
}

.recom_hd img {
  height: 57px;
  width: 57px;
}

.recom_hd h3 {
  color: #fff;
  margin-top: 10px;
  font-size: 16px;
}

.recom_bd {
  float: left;
  padding-top: 10px;
}

.recom_bd ul li {
  position: relative;
  float: left;
}

/* 家用电器 */
.box_hd {
  height: 30px;
  border-bottom: 2px solid #c81623;
}

.box_hd h3 {
  float: left;
  font-size: 18px;
  color: #c81623;
  font-weight: 400;
}

.tab_list {
  float: right;
  line-height: 30px;
}

.tab_list ul li {
  float: left;
}

.tab_list ul li a {
  margin: 0 15px;
}

.floor .w {
  margin-top: 30px;
}

.box_bd {
  height: 361px;
}

.tab_list_item {
  float: left;
}

.tab_list_item>div {
  float: left;
  height: 361px;
}

.col_210 {
  width: 210px;
  height: 361px;
  background-color: #f9f9f9;
  text-align: center;
}

.col_210 ul li {
  float: left;
  width: 85px;
  height: 34px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 34px;
  margin-right: 10px;
}

.col_210 ul {
  padding-left: 12px;
}

.col_329 {
  width: 329px;
  height: 361px;
}

.col_219 {
  width: 219px;
  height: 361px;
}

.col_221 {
  width: 221px;
  height: 361px;
  border-right: 1px solid #ccc;
}

.b_bottom {
  /* 一般情况下，若a包含有宽度的盒子，需要将a转换为块级元素 */
  display: block;
  border-bottom: 1px solid #ccc;
}
```

```css
/*list.css*/

```

```css
/*register.css*/
* {
    width: 1200px;
    margin: 0 auto;
}
header {
    height: 84px;
    border-bottom: 2px solid #c81523;
}
.logo {
    padding-top: 18px;
}
.logo a img{
    width: 175px;
    height: 61px;
}
.registerarea {
    height: 522px;
    border: 1px solid #ccc;
    margin-top: 20px;
}
.registerarea .head {
    height: 42px;
    border-bottom: 1px solid#ccc;
    background-color: #ececec;
}
.registerarea h3 {
    float: left;
    height: 42px;
    width: 120px;
    line-height: 42px;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 400;
}
.login {
    float: right;
    width: 145px;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
}
.login a {
    color: #c81523;
}
.reg_form {
    width: 600px;
    margin: 50px auto 0;
}
.reg_form ul li {
    margin-bottom: 20px;
}
.reg_form ul li label {
    display: inline-block;
    width: 80px;
    text-align: right;
}
.reg_form ul li .inp {
    width: 242px;
    height: 37px;
    border: 1px solid #ccc;
}
.error {
    color: #c81523;
}
.error_icon,
.success_icon{
    display: inline-block;
    width: 27px;
    height: 27px;
    vertical-align: middle;
    margin-top: -4px;
    background: url(../images/error.png) no-repeat;
}
.success {
    color: green;
}
.success_icon {
    background: url(../images/success.png) no-repeat;
}
.safe {
    padding-left: 158px;
}
.safe em {
    padding: 0 12px;
    color: #fff;
}
.ruo {
    background-color: #de1111;
}
.zhong {
    background-color: #40b83f;
}
.qiang {
    background-color: #f79100;
}
.agree {
    padding-left: 88px;
}
.agree input {
    width: 13px;
    margin-right: 5px;
    vertical-align: middle;
}
.agree a {
    color: #1ba1e6;
}
.btn {
    width: 300px;
    height: 34px;
    background-color: #c81623;
    color: #fff;
    font-size: 14px;
    margin: 30px 0 0 60px;
}
.mod_copyright {
    text-align: center;
    padding-top: 20px;
}
.links {
    margin-bottom: 15px;
}
.links a {
    margin: 0 3px;
}
.copyright {
    line-height: 20px;
}
```

```js
window.addEventListener('load', function () {
  //1、获取元素
  var arrow_l = document.querySelector('.arrow-l');
  var arrow_r = document.querySelector('.arrow-r');
  var focus = document.querySelector('.focus');
  var focusWidth = focus.offsetWidth;

  //2、鼠标经过focus 就显示隐藏的左右按钮
  focus.addEventListener('mouseenter', function () {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    clearInterval(timer);
    timer = null; //清除定时器变量
  })
  //鼠标离开focus 就隐藏左右按钮
  focus.addEventListener('mouseleave', function () {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    timer = setInterval(function () {
      //手动调用点击事件
      arrow_r.click();
    }, 3500)
  })

  //3、动态生成小圆圈，有几张图片就有几个小圆圈
  var ul = focus.querySelector('ul');
  var ol = focus.querySelector('.circle');
  for (var i = 0; i < ul.children.length; i++) {
    //创建小li
    var li = document.createElement('li');
    // 用自定义属性记录当前小圆圈的索引号
    li.setAttribute('index', i);
    //吧小li插入到ol 里面
    ol.appendChild(li);

    // 4、小圆圈的排他思想，我们可以直接在生成小圆圈的同时直接绑定事件
    li.addEventListener('click', function () {
      // 干掉所有人 ，把所有的小li 清除current 类名
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
      }
      //留下我自己 当前的小li设置current属性
      this.className = 'current';

      // 5、点击小圆圈，移动图片 移动的是ul 不是li
      // 当我们点击了某个小li，就拿到当前li 的索引号
      var index = this.getAttribute('index');
      num = index; //没有这句话图片不会跟着小圆点变化
      circle = index; //没有这句话小圆点不会跟着变化
      animate(ul, -index * focusWidth);
    })
  }

  //吧ol 里面的第一个小li设置类名为 current
  ol.children[0].className = 'current';

  //6、克隆第一张图片放到ul最后,写在生成li的后面
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);

  //7、点击右侧按钮，图片滚动一张
  var num = 0;
  // circle 控制小圆圈的播放
  var circle = 0;
  // flag节流阀 
  var flag = true;
  arrow_r.addEventListener('click', function () {
    if (flag) {
      flag = false;
      // 如果走到了最后一张复制的图片，此时ul要快速复原left为0
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function () {
        flag = true; // 只有一张图片播放完了才展示下一张，点击多快都没有用
      });

      circle++;
      //如果circle=4，说明走到克隆的那张图片了
      if (circle == ol.children.length) {
        circle = 0;
      }

      circleChange()
    }
  })

  //左侧按钮
  arrow_l.addEventListener('click', function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1; //num=4
        ul.style.left = -num * focusWidth + 'px';
      }
      num--;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });

      circle--; //circle为序号
      // if (circle < 0) {
      //   circle = ol.children.length - 1;  //circle=3
      // }
      circle = circle < 0 ? ol.children.length - 1 : circle;

      circleChange()
    }
  })

  function circleChange() {
    // 先清除其他小圆圈的current类名，
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    // 当前的留下current
    ol.children[circle].className = 'current';
  }

  //自动播放模块
  var timer = setInterval(function () {
    //手动调用点击事件
    arrow_r.click();
  }, 2000)
})
```

```js
function animate(obj, target, callback) {  //前面必须要加function关键字
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      //停止动画 本质停止定时器
      clearInterval(obj.timer);
      //回调函数写到定时器结束里面
      // if (callback) {
      //   //调用函数
      //   callback();
      // }
      callback && callback();  //短路的思想
    }

    obj.style.left = obj.offsetLeft + step + 'px';

  },15);
}
```



## 25、筋斗云案例

![image-20210410141602317](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410141602317.png)

![image-20210410143010879](C:\Users\小萌\AppData\Roaming\Typora\typora-user-images\image-20210410143010879.png)
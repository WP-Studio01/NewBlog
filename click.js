(function(){

    var a_idx = 0;
    
    window.onclick = function(event){
    
    var a = new Array("你好",
                    "进入Github看看吧",
                    "希望你能加入开发组",
                    "帮忙找下BUG",
                    "你会React框架吗",
                    "你会jQuery吗",
                    "看看网页源码吧",
                    "试试开发HTML网页",
                    "复制网站代码,搭建自己的博客网站吧",
                    "别点了",
                    "你还在点",
                    "你还在点,对吧"
    );//点击左键后会按顺序出现的语句
    
    var heart = document.createElement("b"); //创建b元素
    
    heart.onselectstart = new Function('event.returnValue=false'); //防止拖动
    
    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    
    a_idx = (a_idx + 1) % a.length;
    
    heart.style.cssText = "position: fixed;left:-80%;"; //给p元素设置样式
    
    var f = 25, // 字体大小
    
    x = event.clientX - f / 2, // 横坐标
    
    y = event.clientY - f, // 纵坐标
    
    c = randomColor(),  // 随机颜色
    
    a = 1, // 透明度
    
    s = 1.2; // 放大缩小
    
    var timer = setInterval(function(){ //添加定时器
    
        if(a <= 0){
    
        document.body.removeChild(heart);
    
        clearInterval(timer);
    
        }else{
    
            heart.style.cssText = "font-weight:lighter;font-size:25px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
    
            y--;
    
            a -= 0.016;
    
            s += 0.002;
    
        }
    
       },12)
    
    }
    
    function randomColor() {
    
       return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";//随机的颜色
    
    }
    
    }());
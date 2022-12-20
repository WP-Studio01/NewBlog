// 浏览器标题切换  
var OriginTitile = document.title;    // 保存之前页面标题  
var titleTime;  
document.addEventListener('visibilitychange', function(){  
    if (document.hidden){  
        document.title = '快点回来!!!';  
        clearTimeout(titleTime);  
    }else{  
        document.title = '终于回来';  
        titleTime = setTimeout(function() {  
            document.title = window.OriginTitile;  
        }, 500); // 恢复原标题  
    }  
});  

//主页
function Home(props) {
    return (
        <div>
            <h1>这里是HelloWorld的新博客网站</h1>
            <p>本站使用React框架编写,我也是才学React,高手请多多指教</p>
            <p>我的博客被<img src="https://saobby.pythonanywhere.com/api/webcounter?id=bcbcj76C3lXbkRYu" />次访问</p>
        </div>
    );
}
//token:TIkE6uc2X5HwWvZNXRD2DtiAK62RfdU3YAKboND31kx95lLkO3zKUgOhNR5hh4u8
//博客
function Blog(props) {
    return (
        <div>
            <a className="blogSub" href="/blog/?id=5">我 . 光速趋势</a><br />
            <a className="blogSub" href="/blog/?id=4">正式使用Github Issue作为博客载体</a><br />
            <a className="blogSub" href="/blog/?id=3">新博客系统正式开始使用啦</a><br />
            <a className="blogSub" href="/blog/?id=2">test</a><br />
        </div>
    );
}
//存储库
function Repo(props) {
    return (
        <div>
            <p>未开发完成</p>
        </div>
    );
}
//404
function NotFound(props) {
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>找啥呢</p>
        </div>
    )
}
//主体文字
function Text(props) {
    switch(location.hash) {
        case '#/home':
            return <Home />
        case '#/blog':
            return <Blog />;
        case '#/repo':
            return <Repo />;
        case '#/code':
            return <NotFound />;
        default:
            return <NotFound />;
    }
    // return (
    //     <div>
    //         {location.hash=='#/home'?():
    //             (location.hash=='#/blog'?:
    //             (location.hash=='#/repo'?<Repo />:<NotFound />))}
    //     </div>
    // );
}
(window.onhashchange=function() {
    if(location.hash=='') {
        location.hash='#/home';
        return;
    }
    ReactDOM.render(
        <div>
            <Nav />
            <center><Text /></center>
        </div> ,
        document.getElementById('content')
    )
})();
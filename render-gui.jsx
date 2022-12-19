//导航栏
function Nav(props) {
    return (
        <div>
            <a className="navitem" href="#/home">主页</a>
            <a className="navitem" href="#/blog">博客</a>
            <a className="navitem" href="#/repo">存储库</a>
            <a className="navitem" href="#/code">代码</a>
            <a className="navitem github" href="https://github.com/WP-Studio01/NewBlog">Github</a>
        </div>
    );
}
//主页
function Home(props) {
    return (
        <div>
            <h1>这里是HelloWorld的新博客网站</h1>
            <p>本站使用React框架编写,我也是才学React,高手请多多指教</p>
        </div>
    );
}
//博客
function Blog(props) {
    return (
        <div>
            <a href="blog/1.html">1:test</a><br />
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
    return (
        <div>
            {location.hash=='#/home'?(<Home />):
                (location.hash=='#/blog'?<Blog />:
                (location.hash=='#/repo'?<Repo />:<NotFound />))}
        </div>
    );
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
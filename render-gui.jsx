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
// function Text(props) {
//     return (
//         () => {
//             switch(location.hash) {
//                 case '#/home':
//                     (<div><h1>这里是HelloWorld的新博客网站</h1><p>本站使用React框架编写,我也是才学React,高手请多多指教</p></div>);
//                     break;
//                 case '#/blog':
//                     (<div><h1>博客暂未研发完成</h1></div>);
//                     break;
//                 default:
//                     (<p>404 Not Found</p>);
//                     break;
//             }
//         }
//     );
// }
function Text(props) {
    return (
        <div>
            {location.hash=='#/home'?(
                <div>
                    <h1>这里是HelloWorld的新博客网站</h1>
                    <p>本站使用React框架编写,我也是才学React,高手请多多指教</p>
                </div>
            ):(
                <p>404 Not Found</p>
            )}
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
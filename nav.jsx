//导航栏
function Nav(props) {
    return (
        <div>
            <a className="navitem" href="/#/home">主页</a>
            <a className="navitem" href="/#/blog">博客</a>
            <a className="navitem" href="/#/repo">存储库</a>
            <a className="navitem" href="/#/code">代码</a>
            <a className="navitem github" href="https://github.com/WP-Studio01/NewBlog">Github</a>
            <a className="navitem github" href="javascript:void(0)" onClick={function(){prompt('请输入你的Github账号Token,在访问博客时使用','请输入')}}>登录/修改Github账号</a>
        </div>
    );
}
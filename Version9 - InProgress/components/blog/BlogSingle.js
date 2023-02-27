const BlogSingle = () => {
    return (
        <div class="blog-content">
            <div class="left-content">
                <h1>Left content</h1>
            </div>
            <div class="right-content">
                <h1>Right content</h1>
            </div>
        </div>
    );
}

ReactDOM.render(
    <BlogSingle />,
    document.getElementById('blog_single')
);
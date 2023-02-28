const BlogSingle = () => {
    return (
        <div class="blog-content">
            <div class="left-content">
                <img src="./assets/images/blog1.png" alt="" class="content-image" />
                <div class="title">
                    <h1>Image Similarity Using Deep CNN: Theory To Code</h1>
                </div>
                <div class="meta-details">
                    <div class="author-details">
                        <i class="bi bi-person"></i>
                        <p>DeepLobe</p>
                    </div>
                    <div class="time-details">
                        <i class="bi bi-clock-history"></i>
                        <p>December 9, 2021</p>
                    </div>
                </div>
            </div>
            <div class="right-content">
                <div class="recent-posts">
                    <p class="title">Recent Posts</p>
                    <p class="post">Top 7 No-Code AI Platforms That Are Making ML Accessible</p>
                    <p class="post">Edge AI for Secure AI Applications</p>
                    <p class="post">Geospatial AI: A Data-Centric Approach for Growth & Development</p>
                    <p class="post">Synthetic Data: The Future of Computer Vision</p>
                    <p class="post">6 Best Practices Of Data Labeling for Object Detection Models</p>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <BlogSingle />,
    document.getElementById('blog_single')
);
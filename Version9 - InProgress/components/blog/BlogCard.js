const BlogCard = () => {
    return (
        <div class="row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0 blog-card-text">Top 7 No-Code AI Platforms That Are Making ML Accessible</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto blog-card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="stretched-link blog-card-text">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                <img src="./assets/images/blog2.png" alt="Blog Image" class="img-fluid" />
            </div>
        </div>
    );
}

const blogCards = document.getElementsByName('blog_card');
for (var i = 0; i < blogCards.length; i++) {
  ReactDOM.render(<BlogCard />, blogCards.item(i));
}
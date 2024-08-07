const BlogCard = ({ id, title, description }) => {
    return (
        <div class="row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0 blog-card-text">{ title }</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto blog-card-text">{ description.length > 150 ? description.substring(0, 150) + "..." : description }</p>
                <a href={"blog-single.html?id=" + id} class="stretched-link blog-card-text">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                <img src="./assets/images/blog2.png" alt="Blog Image" class="img-fluid" />
            </div>
        </div>
    );
}

export default BlogCard;
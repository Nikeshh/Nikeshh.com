import Blog from "./Blog.js";

const Blogs = () => {
    return (
        <div class="row mt-5">
            <div class="col-12">
                <div class="row">
                    <div class="col-9">
                        <p>BLOGS LINKED</p>
                    </div>
                    <div class="col-3 ms-auto d-flex justify-content-end gap-2">
                        <a class="btn btn-primary mb-3" href="#skillsBlogsCarousel"
                            role="button" data-bs-slide="prev">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a class="btn btn-primary mb-3" href="#skillsBlogsCarousel"
                            role="button" data-bs-slide="next">
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div id="skillsBlogsCarousel" class="carousel slide"
                    data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <Blog />
                                <Blog />
                                <Blog />
                                <Blog />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <Blog />
                                <Blog />
                                <Blog />
                                <Blog />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <Blog />
                                <Blog />
                                <Blog />
                                <Blog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
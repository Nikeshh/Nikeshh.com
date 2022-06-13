import React from "react";

const BlogCard = () => {
    return (
        <>
            <div className="blog-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <h1>First Slide</h1>
                    </div>
                    <div className="swiper-slide">
                        <h1>Second Slide</h1>
                    </div>
                    <div className="swiper-slide">
                        <h1>Third Slide</h1>
                    </div>
                </div>
                <div className="blog-slider__pagination"></div>
            </div>
        </>
    );
}

export default BlogCard;
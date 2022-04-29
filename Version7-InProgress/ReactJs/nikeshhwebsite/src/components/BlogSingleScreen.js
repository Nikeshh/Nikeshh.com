import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogData } from "./blog/blog_data.js";
import EmptyList from "./blog/empty_list.js";

const BlogSingleScreen = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        let blog = blogData.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, []);

    return (
        <>
            <Link className="blog-goBack" to='/blog'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {blog ? (
                <>
                    <section className="blog">
                        <div className="blog-wrap">
                            <header>
                                <p className="blog-date">Published {blog.createdAt}</p>
                                <h1>{blog.title}</h1>
                                <div className="blog-subCategory">
                                    {blog.subCategory.map((category, i) => (
                                        <div key={i}>
                                            <p className="chip">{category}</p>
                                        </div>
                                    ))}
                                </div>
                            </header>
                            <img src={blog.cover} alt='cover' />
                            <p className="blog-desc">{blog.description}</p>
                        </div>
                        <div className="blog-footer">

                        </div>
                    </section>
                    <section className="slider">

                    </section>
                </>
            ) : (
                <EmptyList />
            )}
            <footer id="footer">
                
            </footer>
        </>
    );
}

export default BlogSingleScreen;
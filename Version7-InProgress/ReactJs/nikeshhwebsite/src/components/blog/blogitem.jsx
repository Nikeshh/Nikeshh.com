import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const BlogItem = ({
    blog: {
        description,
        title,
        createdAt,
        authorName,
        authorAvatar,
        cover,
        category,
        id
    }
}) => {
    return (
        <div className="blogItem-wrap">
            <img className="blogItem-cover" src={cover} alt='cover' />
            <p className="chip">{category}</p>
            <h3>{title}</h3>
            <p className="blogItem-desc">{description}</p>
            <footer>
                <div className="blogItem-author">
                    <img src={authorAvatar} alt='avatar' />
                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link className="blogItem-link" to={`/blog/${id}`}>
                    ➝
                </Link>
            </footer>
        </div>
    );
};

export default BlogItem;
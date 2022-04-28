import React from "react";
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
            <h1>Hello</h1>
        </div>
    );
};

export default BlogItem;
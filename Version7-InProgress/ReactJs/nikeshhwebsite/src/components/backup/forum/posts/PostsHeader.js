import React from "react";

const PostsHeader = () => {
    return (
        <div className="posts_header">
            <div className="posts__topic">Topic</div>
            <div className="posts__category">Category</div>
            <div className="posts__users">Users</div>
            <div className="posts__replies">Replies</div>
            <div className="posts__views">Views</div>
            <div className="posts__activity">Activity</div>
        </div>
    );
}

export default PostsHeader;
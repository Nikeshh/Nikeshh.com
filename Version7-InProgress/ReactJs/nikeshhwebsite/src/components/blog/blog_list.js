import BlogItem from "./blogitem";

const BlogList = ({ blogs }) => {
    return (
        <div className="blogList-wrap">
            {blogs.map((blog) => (
                <BlogItem blog={blog} />
            ))}
        </div>
    );
};

export default BlogList;
import BlogsCard from "./blog/BlogsCard.js";
import { blogs } from './data/data.js';

const BlogMainContainer = () => {
    return (
        <BlogsCard blogs={blogs} />
    );
}

ReactDOM.render(
    <BlogMainContainer />,
    document.getElementById('blog_main_container')
);
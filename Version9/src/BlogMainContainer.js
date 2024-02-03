import BlogsCard from "./blog/BlogsCard.js";
import { blogs } from './data/data.js';

var BlogMainContainer = function BlogMainContainer() {
    return React.createElement(BlogsCard, { blogs: blogs });
};

ReactDOM.render(React.createElement(BlogMainContainer, null), document.getElementById('blog_main_container'));
import BlogCard from './BlogCard.js';

var BlogsCard = function BlogsCard(_ref) {
    var _ref$blogs = _ref.blogs,
        blogs = _ref$blogs === undefined ? [] : _ref$blogs;


    var blogRows = function blogRows() {
        var blogsRow = [];
        var id = 0;
        for (var i = 0; i < blogs.length; i++) {
            var blogItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (blogs.length == 0) {
                    break;
                }
                var blog = blogs.shift();
                blogItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(BlogCard, { id: id, title: blog["title"], description: blog["description"] })
                ));
                id = id + 1;
            }
            if (i == 0) {
                blogsRow.push(React.createElement(
                    "div",
                    { "class": "boxes" },
                    blogItems
                ));
            } else {
                blogsRow.push(React.createElement(
                    "div",
                    { "class": "boxes" },
                    blogItems
                ));
            }
        }
        return blogsRow;
    };

    return React.createElement(
        "div",
        null,
        blogRows()
    );
};

export default BlogsCard;
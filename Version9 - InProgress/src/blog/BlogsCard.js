import BlogCard from './BlogCard.js';

var BlogsCard = function BlogsCard(_ref) {
    var _ref$blogs = _ref.blogs,
        blogs = _ref$blogs === undefined ? [] : _ref$blogs;


    var blogRows = function blogRows() {
        var blogsRow = [];
        var id = 0;
        var blogsData = blogs.slice();
        var numberOfThrees = blogsData.length / 3;
        for (var i = 0; i < numberOfThrees; i++) {
            var blogItems = [];
            for (var j = 0; j < 3; j++) {
                var boxNumber = j + 1;
                var boxName = "box" + boxNumber;
                if (blogsData.length == 0) {
                    break;
                }
                var blog = blogsData.shift();
                blogItems.push(React.createElement(
                    "div",
                    { "class": "box " + boxName },
                    React.createElement(BlogCard, { id: id, title: blog["title"], description: blog["description"] })
                ));
                id = id + 1;
            }
            blogsRow.push(React.createElement(
                "div",
                { "class": "boxes" },
                blogItems
            ));
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
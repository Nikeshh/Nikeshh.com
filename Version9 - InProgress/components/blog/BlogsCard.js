import BlogCard from './BlogCard.js';

const BlogsCard = ({ blogs=[] }) => {
    
    const blogRows = () => {
        var blogsRow = [];
        var id = 0;
        for(var i=0; i < blogs.length; i++) {
            var blogItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(blogs.length == 0) {
                    break;
                }
                var blog = blogs.shift();
                blogItems.push(<div class={"box " + boxName}><BlogCard id={id} title={blog["title"]} description={blog["description"]} /></div>);
                id = id + 1;
            }
            if(i == 0) {
                blogsRow.push(<div class="boxes">{ blogItems }</div>);
            } else {
                blogsRow.push(<div class="boxes">{ blogItems }</div>);
            }
        }
        return blogsRow;
    }

    return (
        <div>
            { blogRows() }
        </div>
    );
}

export default BlogsCard;
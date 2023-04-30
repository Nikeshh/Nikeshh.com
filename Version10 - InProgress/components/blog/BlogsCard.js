import BlogCard from './BlogCard.js';

const BlogsCard = ({ blogs=[] }) => {
    
    const blogRows = () => {
        var blogsRow = [];
        var id = 0;
        const blogsData = blogs.slice();
        const numberOfThrees = blogsData.length / 3;
        for(var i=0; i < numberOfThrees; i++) {
            var blogItems = [];
            for(var j=0; j<3; j++) {
                const boxNumber = j+1;
                const boxName = "box" + boxNumber;
                if(blogsData.length == 0) {
                    break;
                }
                var blog = blogsData.shift();
                blogItems.push(<div class={"box " + boxName}><BlogCard id={id} title={blog["title"]} description={blog["description"]} /></div>);
                id = id + 1;
            }
            blogsRow.push(<div class="boxes">{ blogItems }</div>);
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
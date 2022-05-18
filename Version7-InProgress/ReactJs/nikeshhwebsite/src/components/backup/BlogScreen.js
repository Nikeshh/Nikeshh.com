import React, { useState } from "react";
import { blogData } from './blog/blog_data.js';
import BlogList from "./blog/blog_list.js";
import EmptyList from "./blog/empty_list.js";

const BlogScreen = () => {

    const [blogs, setBlogs] = useState(blogData);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        const all = blogData;
        const filtered = all.filter((blog) => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
        setBlogs(filtered);
    };

    const clearSearch = () => {
        setBlogs(blogData);
        setSearchKey('');
    };

    return (
        <>
            <header className='home-header'>
                <h2>Inc. This Morning</h2>
                <h1>
                    <span>"</span> Blog <span>"</span>
                </h1>
                <p>
                    awesome place to make oneself <br /> productive and entertained through
                    daily updates.
                </p>
            </header>
            <div className='searchBar-wrap'>
                <form onSubmit={handleSearchBar}>
                    <input
                        type='text'
                        placeholder='Search By Category'
                        value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                    {searchKey && <span onClick={clearSearch}>X</span>}
                    <button>Go</button>
                </form>
            </div>
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </>
    );
}

export default BlogScreen;
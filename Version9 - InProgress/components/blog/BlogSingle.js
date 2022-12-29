const BlogSingle = () => {
    return (
        <div class="main-content w-100 h-100">
            <header class="text-bg-dark">
                <div class="container-fluid">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center gap-2 mb-2 mb-lg-0 text-white text-decoration-none">
                            <i class="fa-solid fa-arrow-left"></i> How to create a ReactJS website?
                        </a>
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ms-auto" role="search">
                            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                                aria-label="Search" />
                        </form>
                        <div class="dropdown">
                            <a href="#"
                                class="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul class="dropdown-menu text-small shadow">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div class="m-1 m-3 m-md-5">
                <div class="row">
                    <img src="./assets/images/blog/blog-banner.jpeg" alt="Blog Image" class="img-fluid" />
                </div>
                <div class="row g-5 mt-2">
                    <div class="col-md-8">
                        <article class="blog-post">
                            <h2 class="blog-post-title mb-1">How to create a ReactJS website?</h2>
                            <p class="blog-post-meta">January 1, 2023 by <a href="#">Nikeshh</a></p>
                            <div class="social-links">
                                <p class="fst-italic">Share via</p>
                                <ul class="justify-content-sm-center justify-content-md-start">
                                    <li><a href="https://github.com/Nikeshh" target="_blank"><i
                                        class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/nikeshh/" target="_blank"><i
                                        class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.instagram.com/nikeshhvijayabaskaran/" target="_blank"><i
                                        class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100003060160743"
                                        target="_blank"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/NikeshhV" target="_blank"><i
                                        class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://codepen.io/nikeshh"><i class="fab fa-codepen"
                                        target="_blank"></i></a></li>
                                    <li><a href="https://medium.com/@nikeshhvijayabaskaran"><i class="fab fa-medium"
                                        target="_blank"></i></a></li>
                                </ul>
                            </div>
                            <h3 class="pb-4 mb-4 fst-italic border-bottom">
                                From the Firehose
                            </h3>
                            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap.
                                Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                            <hr />
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available
                                space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to
                                keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <h2>Blockquotes</h2>
                            <p>This is an example blockquote in action:</p>
                            <blockquote class="blockquote">
                                <p>Quoted text goes here.</p>
                            </blockquote>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available
                                space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to
                                keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <h3>Example lists</h3>
                            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other
                                highly repetitive body text used throughout. This is an example unordered list:</p>
                            <ul>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ul>
                            <p>And this is an ordered list:</p>
                            <ol>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ol>
                            <p>And this is a definition list:</p>
                            <dl>
                                <dt>HyperText Markup Language (HTML)</dt>
                                <dd>The language used to describe and define the content of a Web page</dd>
                                <dt>Cascading Style Sheets (CSS)</dt>
                                <dd>Used to describe the appearance of Web content</dd>
                                <dt>JavaScript (JS)</dt>
                                <dd>The programming language used to build advanced Web sites and applications</dd>
                            </dl>
                            <h2>Inline HTML elements</h2>
                            <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a
                                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
                            <ul>
                                <li><strong>To bold text</strong>, use <code
                                    class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                                <li><em>To italicize text</em>, use <code
                                    class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                                <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code
                                    class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code
                                        class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                                <li>Citations, like <cite>— Mark Otto</cite>, should use <code
                                    class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                                <li><del>Deleted</del> text should use <code
                                    class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text
                                    should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                                <li>Superscript <sup>text</sup> uses <code
                                    class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses
                                    <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.
                                </li>
                            </ul>
                            <p>Most of these elements are styled by browsers with few modifications on our part.</p>
                            <h2>Heading</h2>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available
                                space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to
                                keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <h3>Sub-heading</h3>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available
                                space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to
                                keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <pre><code>Example code block</code></pre>
                            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other
                                highly repetitive body text used throughout.</p>
                        </article>
                        <article class="blog-post">
                            <h2 class="blog-post-title mb-1">Another blog post</h2>
                            <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available
                                space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to
                                keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <blockquote>
                                <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
                            </blockquote>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available
                                space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to
                                keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <h3>Example table</h3>
                            <p>And don't forget about tables in these posts:</p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Upvotes</th>
                                        <th>Downvotes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alice</td>
                                        <td>10</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td>Bob</td>
                                        <td>4</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Charlie</td>
                                        <td>7</td>
                                        <td>9</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Totals</td>
                                        <td>21</td>
                                        <td>23</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other
                                highly repetitive body text used throughout.</p>
                        </article>
                        <article class="blog-post">
                            <h2 class="blog-post-title mb-1">New feature</h2>
                            <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>
                            <p>This is some additional paragraph placeholder content. It has been written to fill the available
                                space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to
                                keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                            <ul>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ul>
                            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other
                                highly repetitive body text used throughout.</p>
                        </article>
                        <nav class="blog-pagination" aria-label="Pagination">
                            <a class="btn btn-outline-primary rounded-pill" href="#">Previous</a>
                            <a class="btn btn-outline-secondary rounded-pill disabled">Next</a>
                        </nav>
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">World</strong>
                                <h3 class="mb-0">Featured post</h3>
                                <div class="mb-1 text-muted">Nov 12</div>
                                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="#" class="stretched-link">Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                                    aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">Thumbnail</text>
                                </svg>
                            </div>
                        </div>
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success">Design</strong>
                                <h3 class="mb-0">Post title</h3>
                                <div class="mb-1 text-muted">Nov 11</div>
                                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" class="stretched-link">Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                                    aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                        dy=".3em">Thumbnail</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* Comments */}
                    <div class="col-12 col-md-4 p-3">
                        <div class="position-sticky" style={{ top: '2rem' }}>
                            <div class="row">
                                <p>COMMENTS</p>
                            </div>
                            <div class="comments">
                                <div class="row ms-2 ms-md-0 me-2 me-md-0">
                                    <div class="col-2">
                                        <img src="./assets/images/logo.png" alt="Profile Icon" class="img-thumbnail rounded-circle" />
                                    </div>
                                    <div class="col-10 comment rounded-2 d-flex flex-column">
                                        <div class="fst-italic">
                                            "That is an amazing website"
                                        </div>
                                        <span class="ms-auto mt-auto">-- JOHN DOE</span>
                                    </div>
                                </div>
                                <div class="row mt-2 ms-2 ms-md-0 me-2 me-md-0">
                                    <div class="col-2">
                                        <img src="./assets/images/logo.png" alt="Profile Icon" class="img-thumbnail rounded-circle" />
                                    </div>
                                    <div class="col-10 comment rounded-2 d-flex flex-column">
                                        <div class="fst-italic">
                                            "That is an amazing website"
                                        </div>
                                        <span class="ms-auto">-- JOHN DOE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <BlogSingle />,
    document.getElementById('blog_single')
);
const SkillSingle = () => {
    return (
        <div class="blog-content">
            <div class="left-content">
                <img src="./assets/images/blog1.png" alt="" class="img-fluid content-image" />
                <div class="title">
                    <h1>ReactJS</h1>
                </div>
                <div class="meta-details">
                    <span class="author-details">
                        <i class="bi bi-person"></i>
                        <a href="#">DeepLobe</a>
                    </span>
                    <span class="time-details">
                        <i class="bi bi-clock-history"></i>
                        <a href="#">December 9, 2021</a>
                    </span>
                </div>
                <div class="content">
                    ReactJS is a powerful open-source JavaScript library used for building interactive user interfaces. Developed by Facebook, ReactJS has quickly become one of the most popular front-end web development libraries in the industry, with its use by companies like Instagram, Airbnb, and Netflix.
                    ReactJS allows developers to create reusable UI components, making it easier to manage complex UI designs. These components can be composed of other components, resulting in a modular and reusable approach to development. This approach leads to faster development times, easier maintenance, and fewer bugs.
                    One of the primary features of ReactJS is its use of a virtual DOM. Instead of directly manipulating the actual DOM, ReactJS creates a virtual representation of it, which it updates only when there are changes. This approach allows for faster performance and reduces the amount of work required by the browser.
                    Another key feature of ReactJS is its component-based structure. ReactJS divides the UI into independent and reusable parts, allowing developers to create complex applications with ease. The modular approach to development makes it easier to maintain and update code, reducing the time required for development and minimizing the chance of bugs.
                    ReactJS also supports server-side rendering, which can improve page load times and enhance search engine optimization (SEO). Server-side rendering is the process of rendering a webpage on the server before sending it to the client. This approach results in a faster initial load time and can improve the SEO of the webpage.
                    ReactJS can also be used with other libraries, such as Redux, to manage application state. Redux is a state management library that provides a centralized store for the application's state, making it easier to manage and maintain.
                    ReactJS has a vast community support and an active development team, ensuring that it is constantly evolving and improving. The community provides numerous third-party libraries, tools, and plugins that extend the functionality of ReactJS. The community also provides extensive documentation and resources, making it easy for developers to learn and use the library.
                    ReactJS also provides tools for testing, making it easier to ensure that the code is working as expected. ReactJS has several testing tools, such as Jest and Enzyme, which are designed to work seamlessly with ReactJS.
                    In summary, ReactJS is a powerful and flexible front-end development library that allows developers to create complex and interactive user interfaces with ease. Its component-based structure, virtual DOM, and server-side rendering make it a popular choice for web developers. Its vast community support, extensive documentation, and third-party libraries make it easy for developers to learn and use. With its ability to improve page load times and enhance SEO, ReactJS is an ideal choice for creating high-performance and SEO-friendly web applications.
                </div>
                <div class="tags">
                    <span class="tag">Learning</span>
                    <span class="tag">AI</span>
                    <span class="tag">Computer Vision</span>
                </div>
                <ul class="social-icons">
                    <li class="share-via">
                        <p>Share via</p>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-pinterest"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
                <div class="comments">
                    <div class="user-comment">
                        <img src="./assets/images/avatar.png" alt="" class="img-fluid comment-image" />
                        <div class="comment-details">
                            <p class="comment">This is a amazing skill</p>
                            <p class="details">Nikeshh Vijayabaskaran <span class="timestamp">February 28, 2023 At 4:15 am</span></p>
                        </div>
                    </div>
                    <div class="user-comment">
                        <img src="./assets/images/avatar.png" alt="" class="img-fluid comment-image" />
                        <div class="comment-details">
                            <p class="comment">This is a amazing skill</p>
                            <p class="details">Nikeshh Vijayabaskaran <span class="timestamp">February 28, 2023 At 4:15 am</span></p>
                        </div>
                    </div>
                    <div class="user-comment">
                        <img src="./assets/images/avatar.png" alt="" class="img-fluid comment-image" />
                        <div class="comment-details">
                            <p class="comment">This is a amazing skill</p>
                            <p class="details">Nikeshh Vijayabaskaran <span class="timestamp">February 28, 2023 At 4:15 am</span></p>
                        </div>
                    </div>
                </div>
                <div class="leave-a-comment">
                    <p class="title">Leave A Comment</p>
                    <form>
                        <div class="form-group">
                            <textarea class="form-control" id="yourComment" rows="4" placeholder="Your comment"></textarea>
                        </div>
                        <div class="user-details">
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Comment</button>
                    </form>
                </div>
            </div>
            <div class="right-content">
                <div class="recent-posts">
                    <p class="title">Similar Skills</p>
                    <a href="#"><p class="post">Redux</p></a>
                    <a href="#"><p class="post">NextJS</p></a>
                    <a href="#"><p class="post">ExpressJS</p></a>
                    <a href="#"><p class="post">NodeJS</p></a>
                    <a href="#"><p class="post">HTML5</p></a>
                </div>
                <div class="promotion">
                    <p class="title">Download Free Ebook</p>
                    <img src="./assets/images/blog3.png" alt="" class="img-fluid promotion-image" />
                </div>
                <div class="business-contact">
                    <p class="title">Get custom ML Models for your business</p>
                    <p class="subtitle">Fill in your details below for a free consultation call.</p>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="fullName" placeholder="Full Name" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="emailAddress" placeholder="Please enter your email" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="mobile" placeholder="Mobile" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <SkillSingle />,
    document.getElementById('skill_single')
);
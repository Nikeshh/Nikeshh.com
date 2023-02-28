const BlogSingle = () => {
    return (
        <div class="blog-content">
            <div class="left-content">
                <img src="./assets/images/blog1.png" alt="" class="img-fluid content-image" />
                <div class="title">
                    <h1>Image Similarity Using Deep CNN: Theory To Code</h1>
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
                    <p>Image similarity is becoming popular in recent times. The ability of an image similarity model to find identical images with the utmost accuracy in defined data sets is helping in many ways. Finding plagiarized photos, identifying fake accounts, discovering original images of people, products, and places are a few of the image similarity real-world applications. Image similarity is often concluded as the same as image classification by many. However, the similarity model unlike image classification is completely unsupervised and operates beyond labeling images for model creation.</p>
                    <h2>Image similarity vs Image Classification</h2>
                    <p>
                        Image similarity is closely related to image classification application, as both models use the same classifier networks for the processing and delivering the expected outcomes. However, there are a few differences to consider.
                        <ul>
                            <li>Image similarity considers many dimensions while figuring out whether or not an image is found similar by considering one or possibly several discrete categories.</li>
                            <li>Image classifiers are always learned to be implicit due to poor training. If you train a classification model to recognize bicycles, scooters, and cars, and you didn’t expect to classify anything else. Then, there is a possibility that the model will predict motorcycles as bicycles or scooters, which is not acceptable.</li>
                            <li>Image similarity models are trained differently, using labels to indicate if two images are similar or not, and training networks with similarity relationships can range between every pair of images in a dataset to only between a few necessary. Thanks to constructive losses, the trained model can be flexible to recognize other images known to be similar in the data set instead of finding out only defined or fixed categories.</li>
                        </ul>
                    </p>
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
                            <p class="comment">This is a amazing blog post</p>
                            <p class="details">Nikeshh Vijayabaskaran <span class="timestamp">February 28, 2023 At 4:15 am</span></p>
                        </div>
                    </div>
                    <div class="user-comment">
                        <img src="./assets/images/avatar.png" alt="" class="img-fluid comment-image" />
                        <div class="comment-details">
                            <p class="comment">This is a amazing blog post</p>
                            <p class="details">Nikeshh Vijayabaskaran <span class="timestamp">February 28, 2023 At 4:15 am</span></p>
                        </div>
                    </div>
                    <div class="user-comment">
                        <img src="./assets/images/avatar.png" alt="" class="img-fluid comment-image" />
                        <div class="comment-details">
                            <p class="comment">This is a amazing blog post</p>
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
                    <p class="title">Recent Posts</p>
                    <p class="post">Top 7 No-Code AI Platforms That Are Making ML Accessible</p>
                    <p class="post">Edge AI for Secure AI Applications</p>
                    <p class="post">Geospatial AI: A Data-Centric Approach for Growth & Development</p>
                    <p class="post">Synthetic Data: The Future of Computer Vision</p>
                    <p class="post">6 Best Practices Of Data Labeling for Object Detection Models</p>
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
    <BlogSingle />,
    document.getElementById('blog_single')
);
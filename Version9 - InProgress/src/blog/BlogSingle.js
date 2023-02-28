var BlogSingle = function BlogSingle() {
    return React.createElement(
        "div",
        { "class": "blog-content" },
        React.createElement(
            "div",
            { "class": "left-content" },
            React.createElement("img", { src: "./assets/images/blog1.png", alt: "", "class": "img-fluid content-image" }),
            React.createElement(
                "div",
                { "class": "title" },
                React.createElement(
                    "h1",
                    null,
                    "Image Similarity Using Deep CNN: Theory To Code"
                )
            ),
            React.createElement(
                "div",
                { "class": "meta-details" },
                React.createElement(
                    "span",
                    { "class": "author-details" },
                    React.createElement("i", { "class": "bi bi-person" }),
                    React.createElement(
                        "a",
                        { href: "#" },
                        "DeepLobe"
                    )
                ),
                React.createElement(
                    "span",
                    { "class": "time-details" },
                    React.createElement("i", { "class": "bi bi-clock-history" }),
                    React.createElement(
                        "a",
                        { href: "#" },
                        "December 9, 2021"
                    )
                )
            ),
            React.createElement(
                "div",
                { "class": "content" },
                React.createElement(
                    "p",
                    null,
                    "Image similarity is becoming popular in recent times. The ability of an image similarity model to find identical images with the utmost accuracy in defined data sets is helping in many ways. Finding plagiarized photos, identifying fake accounts, discovering original images of people, products, and places are a few of the image similarity real-world applications. Image similarity is often concluded as the same as image classification by many. However, the similarity model unlike image classification is completely unsupervised and operates beyond labeling images for model creation."
                ),
                React.createElement(
                    "h2",
                    null,
                    "Image similarity vs Image Classification"
                ),
                React.createElement(
                    "p",
                    null,
                    "Image similarity is closely related to image classification application, as both models use the same classifier networks for the processing and delivering the expected outcomes. However, there are a few differences to consider.",
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Image similarity considers many dimensions while figuring out whether or not an image is found similar by considering one or possibly several discrete categories."
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Image classifiers are always learned to be implicit due to poor training. If you train a classification model to recognize bicycles, scooters, and cars, and you didn\u2019t expect to classify anything else. Then, there is a possibility that the model will predict motorcycles as bicycles or scooters, which is not acceptable."
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Image similarity models are trained differently, using labels to indicate if two images are similar or not, and training networks with similarity relationships can range between every pair of images in a dataset to only between a few necessary. Thanks to constructive losses, the trained model can be flexible to recognize other images known to be similar in the data set instead of finding out only defined or fixed categories."
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { "class": "tags" },
                React.createElement(
                    "span",
                    { "class": "tag" },
                    "Learning"
                ),
                React.createElement(
                    "span",
                    { "class": "tag" },
                    "AI"
                ),
                React.createElement(
                    "span",
                    { "class": "tag" },
                    "Computer Vision"
                )
            ),
            React.createElement(
                "ul",
                { "class": "social-icons" },
                React.createElement(
                    "li",
                    { "class": "share-via" },
                    React.createElement(
                        "p",
                        null,
                        "Share via"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", target: "_blank" },
                        React.createElement("i", { "class": "fab fa-facebook" })
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", target: "_blank" },
                        React.createElement("i", { "class": "fab fa-pinterest" })
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", target: "_blank" },
                        React.createElement("i", { "class": "fab fa-google-plus" })
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", target: "_blank" },
                        React.createElement("i", { "class": "fab fa-twitter" })
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", target: "_blank" },
                        React.createElement("i", { "class": "fab fa-linkedin" })
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { "class": "right-content" },
            React.createElement(
                "div",
                { "class": "recent-posts" },
                React.createElement(
                    "p",
                    { "class": "title" },
                    "Recent Posts"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "Top 7 No-Code AI Platforms That Are Making ML Accessible"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "Edge AI for Secure AI Applications"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "Geospatial AI: A Data-Centric Approach for Growth & Development"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "Synthetic Data: The Future of Computer Vision"
                ),
                React.createElement(
                    "p",
                    { "class": "post" },
                    "6 Best Practices Of Data Labeling for Object Detection Models"
                )
            ),
            React.createElement(
                "div",
                { "class": "promotion" },
                React.createElement(
                    "p",
                    { "class": "title" },
                    "Download Free Ebook"
                ),
                React.createElement("img", { src: "./assets/images/blog3.png", alt: "", "class": "img-fluid promotion-image" })
            )
        )
    );
};

ReactDOM.render(React.createElement(BlogSingle, null), document.getElementById('blog_single'));
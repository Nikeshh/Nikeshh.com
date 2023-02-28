var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { skillsAndServices } from '../data/data.js';

var SkillSingle = function SkillSingle() {
    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        title = _React$useState2[0],
        setTitle = _React$useState2[1];

    React.useEffect(function () {
        var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        var tooltipList = [].concat(_toConsumableArray(tooltipTriggerList)).map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // var index = getUrlValues()["index"];
        // var skill = skillsAndServices[index];
        // setTitle(skill["title"]);
    }, []);

    function getUrlValues() {
        var vars = {};
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    return React.createElement(
        'div',
        { 'class': 'blog-content' },
        React.createElement(
            'div',
            { 'class': 'left-content' },
            React.createElement('img', { src: './assets/images/blog1.png', alt: '', 'class': 'img-fluid content-image' }),
            React.createElement(
                'div',
                { 'class': 'title' },
                React.createElement(
                    'h1',
                    null,
                    'ReactJS'
                )
            ),
            React.createElement(
                'div',
                { 'class': 'meta-details' },
                React.createElement(
                    'span',
                    { 'class': 'author-details' },
                    React.createElement('i', { 'class': 'bi bi-person' }),
                    React.createElement(
                        'a',
                        { href: '#' },
                        'DeepLobe'
                    )
                ),
                React.createElement(
                    'span',
                    { 'class': 'time-details' },
                    React.createElement('i', { 'class': 'bi bi-clock-history' }),
                    React.createElement(
                        'a',
                        { href: '#' },
                        'December 9, 2021'
                    )
                )
            ),
            React.createElement(
                'div',
                { 'class': 'content' },
                'ReactJS is a powerful open-source JavaScript library used for building interactive user interfaces. Developed by Facebook, ReactJS has quickly become one of the most popular front-end web development libraries in the industry, with its use by companies like Instagram, Airbnb, and Netflix. ReactJS allows developers to create reusable UI components, making it easier to manage complex UI designs. These components can be composed of other components, resulting in a modular and reusable approach to development. This approach leads to faster development times, easier maintenance, and fewer bugs. One of the primary features of ReactJS is its use of a virtual DOM. Instead of directly manipulating the actual DOM, ReactJS creates a virtual representation of it, which it updates only when there are changes. This approach allows for faster performance and reduces the amount of work required by the browser. Another key feature of ReactJS is its component-based structure. ReactJS divides the UI into independent and reusable parts, allowing developers to create complex applications with ease. The modular approach to development makes it easier to maintain and update code, reducing the time required for development and minimizing the chance of bugs. ReactJS also supports server-side rendering, which can improve page load times and enhance search engine optimization (SEO). Server-side rendering is the process of rendering a webpage on the server before sending it to the client. This approach results in a faster initial load time and can improve the SEO of the webpage. ReactJS can also be used with other libraries, such as Redux, to manage application state. Redux is a state management library that provides a centralized store for the application\'s state, making it easier to manage and maintain. ReactJS has a vast community support and an active development team, ensuring that it is constantly evolving and improving. The community provides numerous third-party libraries, tools, and plugins that extend the functionality of ReactJS. The community also provides extensive documentation and resources, making it easy for developers to learn and use the library. ReactJS also provides tools for testing, making it easier to ensure that the code is working as expected. ReactJS has several testing tools, such as Jest and Enzyme, which are designed to work seamlessly with ReactJS. In summary, ReactJS is a powerful and flexible front-end development library that allows developers to create complex and interactive user interfaces with ease. Its component-based structure, virtual DOM, and server-side rendering make it a popular choice for web developers. Its vast community support, extensive documentation, and third-party libraries make it easy for developers to learn and use. With its ability to improve page load times and enhance SEO, ReactJS is an ideal choice for creating high-performance and SEO-friendly web applications.'
            ),
            React.createElement(
                'div',
                { 'class': 'tags' },
                React.createElement(
                    'span',
                    { 'class': 'tag' },
                    'Learning'
                ),
                React.createElement(
                    'span',
                    { 'class': 'tag' },
                    'AI'
                ),
                React.createElement(
                    'span',
                    { 'class': 'tag' },
                    'Computer Vision'
                )
            ),
            React.createElement(
                'ul',
                { 'class': 'social-icons' },
                React.createElement(
                    'li',
                    { 'class': 'share-via' },
                    React.createElement(
                        'p',
                        null,
                        'Share via'
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: '#', target: '_blank' },
                        React.createElement('i', { 'class': 'fab fa-facebook' })
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: '#', target: '_blank' },
                        React.createElement('i', { 'class': 'fab fa-pinterest' })
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: '#', target: '_blank' },
                        React.createElement('i', { 'class': 'fab fa-google-plus' })
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: '#', target: '_blank' },
                        React.createElement('i', { 'class': 'fab fa-twitter' })
                    )
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'a',
                        { href: '#', target: '_blank' },
                        React.createElement('i', { 'class': 'fab fa-linkedin' })
                    )
                )
            ),
            React.createElement(
                'div',
                { 'class': 'comments' },
                React.createElement(
                    'div',
                    { 'class': 'user-comment' },
                    React.createElement('img', { src: './assets/images/avatar.png', alt: '', 'class': 'img-fluid comment-image' }),
                    React.createElement(
                        'div',
                        { 'class': 'comment-details' },
                        React.createElement(
                            'p',
                            { 'class': 'comment' },
                            'This is a amazing skill'
                        ),
                        React.createElement(
                            'p',
                            { 'class': 'details' },
                            'Nikeshh Vijayabaskaran ',
                            React.createElement(
                                'span',
                                { 'class': 'timestamp' },
                                'February 28, 2023 At 4:15 am'
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'user-comment' },
                    React.createElement('img', { src: './assets/images/avatar.png', alt: '', 'class': 'img-fluid comment-image' }),
                    React.createElement(
                        'div',
                        { 'class': 'comment-details' },
                        React.createElement(
                            'p',
                            { 'class': 'comment' },
                            'This is a amazing skill'
                        ),
                        React.createElement(
                            'p',
                            { 'class': 'details' },
                            'Nikeshh Vijayabaskaran ',
                            React.createElement(
                                'span',
                                { 'class': 'timestamp' },
                                'February 28, 2023 At 4:15 am'
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'user-comment' },
                    React.createElement('img', { src: './assets/images/avatar.png', alt: '', 'class': 'img-fluid comment-image' }),
                    React.createElement(
                        'div',
                        { 'class': 'comment-details' },
                        React.createElement(
                            'p',
                            { 'class': 'comment' },
                            'This is a amazing skill'
                        ),
                        React.createElement(
                            'p',
                            { 'class': 'details' },
                            'Nikeshh Vijayabaskaran ',
                            React.createElement(
                                'span',
                                { 'class': 'timestamp' },
                                'February 28, 2023 At 4:15 am'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { 'class': 'leave-a-comment' },
                React.createElement(
                    'p',
                    { 'class': 'title' },
                    'Leave A Comment'
                ),
                React.createElement(
                    'form',
                    null,
                    React.createElement(
                        'div',
                        { 'class': 'form-group' },
                        React.createElement('textarea', { 'class': 'form-control', id: 'yourComment', rows: '4', placeholder: 'Your comment' })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'user-details' },
                        React.createElement(
                            'div',
                            { 'class': 'form-group' },
                            React.createElement('input', { type: 'text', 'class': 'form-control', id: 'name', placeholder: 'Your Name' })
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'form-group' },
                            React.createElement('input', { type: 'email', 'class': 'form-control', id: 'email', placeholder: 'Your Email' })
                        )
                    ),
                    React.createElement(
                        'button',
                        { type: 'submit', 'class': 'btn btn-primary' },
                        'Comment'
                    )
                )
            )
        ),
        React.createElement(
            'div',
            { 'class': 'right-content' },
            React.createElement(
                'div',
                { 'class': 'recent-posts' },
                React.createElement(
                    'p',
                    { 'class': 'title' },
                    'Similar Skills'
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'Redux'
                    )
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'NextJS'
                    )
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'ExpressJS'
                    )
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'NodeJS'
                    )
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'HTML5'
                    )
                )
            ),
            React.createElement(
                'div',
                { 'class': 'promotion' },
                React.createElement(
                    'p',
                    { 'class': 'title' },
                    'Download Free Ebook'
                ),
                React.createElement('img', { src: './assets/images/blog3.png', alt: '', 'class': 'img-fluid promotion-image' })
            ),
            React.createElement(
                'div',
                { 'class': 'business-contact' },
                React.createElement(
                    'p',
                    { 'class': 'title' },
                    'Get custom ML Models for your business'
                ),
                React.createElement(
                    'p',
                    { 'class': 'subtitle' },
                    'Fill in your details below for a free consultation call.'
                ),
                React.createElement(
                    'form',
                    null,
                    React.createElement(
                        'div',
                        { 'class': 'form-group' },
                        React.createElement('input', { type: 'text', 'class': 'form-control', id: 'fullName', placeholder: 'Full Name' })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'form-group' },
                        React.createElement('input', { type: 'email', 'class': 'form-control', id: 'emailAddress', placeholder: 'Please enter your email' })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'form-group' },
                        React.createElement('input', { type: 'text', 'class': 'form-control', id: 'mobile', placeholder: 'Mobile' })
                    ),
                    React.createElement(
                        'button',
                        { type: 'submit', 'class': 'btn btn-primary' },
                        'Submit'
                    )
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(SkillSingle, null), document.getElementById('skill_single'));
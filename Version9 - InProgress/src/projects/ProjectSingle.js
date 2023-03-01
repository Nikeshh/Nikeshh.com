var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { projects } from '../data/data.js';

var ProjectSingle = function ProjectSingle() {
    var _React$useState = React.useState({}),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        project = _React$useState2[0],
        setProject = _React$useState2[1];

    React.useEffect(function () {
        var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        var tooltipList = [].concat(_toConsumableArray(tooltipTriggerList)).map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        var urlValues = getUrlValues();
        var id = urlValues["id"];
        var data = projects[id];
        setProject(data);
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
                    project["title"]
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
                project["content"]
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
                            'This is a amazing project'
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
                            'This is a amazing project'
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
                            'This is a amazing project'
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
                    'Similar Projects'
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'Stream Lens'
                    )
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'POS (POINT OF SALE) SYSTEM'
                    )
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'RTRIX'
                    )
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'SQUID GAME'
                    )
                ),
                React.createElement(
                    'a',
                    { href: '#' },
                    React.createElement(
                        'p',
                        { 'class': 'post' },
                        'CALIBRATION SYSTEM'
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

ReactDOM.render(React.createElement(ProjectSingle, null), document.getElementById('project_single'));
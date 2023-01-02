var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { projects } from '../data/data.js';

var ProjectSingle = function ProjectSingle() {
    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        title = _React$useState2[0],
        setTitle = _React$useState2[1];

    React.useEffect(function () {
        var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        var tooltipList = [].concat(_toConsumableArray(tooltipTriggerList)).map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        var index = getUrlValues()["index"];
        var project = projects[index];
        setTitle(project["title"]);
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
        { 'class': 'main-content w-100 h-100' },
        React.createElement(
            'header',
            { 'class': 'text-bg-dark' },
            React.createElement(
                'div',
                { 'class': 'container-fluid' },
                React.createElement(
                    'div',
                    { 'class': 'd-flex flex-wrap align-items-center justify-content-center justify-content-lg-start' },
                    React.createElement(
                        'a',
                        { href: '/', 'class': 'd-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none' },
                        React.createElement('i', { 'class': 'fa-solid fa-arrow-left me-2' }),
                        ' ',
                        title
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'tag ms-2 border border-primary p-2 rounded-2 text-white-50', 'data-bs-html': 'true',
                            'data-bs-toggle': 'tooltip', 'data-bs-placement': 'bottom',
                            'data-bs-title': '<em>Tag:</em> <u><b>Web design</b></u>' },
                        'Web design'
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'tag ms-2 border border-primary p-2 rounded-2 text-white-50', 'data-bs-html': 'true',
                            'data-bs-toggle': 'tooltip', 'data-bs-placement': 'bottom', 'data-bs-title': '<em>Tag:</em> <u><b>Web</b></u>' },
                        'Web'
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'tag ms-2 border border-primary p-2 rounded-2 text-white-50', 'data-bs-html': 'true',
                            'data-bs-toggle': 'tooltip', 'data-bs-placement': 'bottom', 'data-bs-title': '<em>Tag:</em> <u><b>Android</b></u>' },
                        'Android'
                    ),
                    React.createElement(
                        'form',
                        { 'class': 'col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ms-auto', role: 'search' },
                        React.createElement('input', { type: 'search', 'class': 'form-control form-control-dark text-bg-dark', placeholder: 'Search...',
                            'aria-label': 'Search' })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'dropdown' },
                        React.createElement(
                            'a',
                            { href: '#',
                                'class': 'd-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle',
                                'data-bs-toggle': 'dropdown', 'aria-expanded': 'false' },
                            'Works / Projects'
                        ),
                        React.createElement(
                            'ul',
                            { 'class': 'dropdown-menu text-small shadow' },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { 'class': 'dropdown-item', href: '#' },
                                    'New project...'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { 'class': 'dropdown-item', href: '#' },
                                    'Settings'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { 'class': 'dropdown-item', href: '#' },
                                    'Profile'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement('hr', { 'class': 'dropdown-divider' })
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { 'class': 'dropdown-item', href: '#' },
                                    'Sign out'
                                )
                            )
                        )
                    )
                )
            )
        ),
        React.createElement(
            'div',
            { 'class': 'm-3 m-md-5' },
            React.createElement(
                'div',
                { 'class': 'd-flex flex-wrap justify-content-between align-items-center' },
                React.createElement(
                    'h1',
                    { 'class': 'display-6' },
                    title
                ),
                React.createElement(
                    'div',
                    { 'class': 'skill-level show-9 d-flex flex-wrap justify-content-md-end' },
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    ),
                    React.createElement(
                        'span',
                        null,
                        '\xA0'
                    )
                )
            ),
            React.createElement(
                'div',
                { 'class': 'row' },
                React.createElement(
                    'div',
                    { 'class': 'col-md-8 project-details shadow-lg p-3 bg-white rounded' },
                    React.createElement(
                        'div',
                        { 'class': 'd-flex gap-2 flex-wrap' },
                        React.createElement(
                            'div',
                            { 'class': 'p-2 border border-primary rounded-2' },
                            'CONTRIBUTE'
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'p-2 border border-primary rounded-2' },
                            'LINKED BLOGS'
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'p-2 border border-primary rounded-2' },
                            'LINKED PROJECTS'
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'p-2 border border-primary rounded-2' },
                            'CONTACT ME'
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'p-2 border border-primary rounded-2 ms-md-auto' },
                            'DOWNLOAD'
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'p-2 border border-danger rounded-circle' },
                            '\u2764\uFE0F'
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'overflow-scroll project-content mt-3' },
                        React.createElement(
                            'h2',
                            null,
                            'How do Food Delivery Apps work?'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'To develop a food delivery app, we will begin by first knowing how these applications function.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'At the outset, the food delivery applications are empowering. These applications work effectively and give the users full control over their choices.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'From selecting their favorite restaurant to ordering food that they like, these food delivery apps develop a huge database.'
                        ),
                        React.createElement(
                            'table',
                            null,
                            React.createElement(
                                'tbody',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        'Step 1'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'A consumer will get recommendations of nearby restaurants or some special orders for the day.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'Right from restaurant selection to checkout and payment, the consumer is at the lead.'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'The users know how to create a basket of the desired items in the food ordering app.'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        'Step 2'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'Once the items are in the cart, the user can review them and move to payment.'
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        'Step 3'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'Once the order is final, the restaurant gets a notification and starts preparing the food.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'In your journey to make a food delivery app, it is also essential to know how to connect the user with the restaurant and the delivery guy.'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        'Step 4'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'After preparation, a delivery guy takes the order and delivers it to the customer on their specified address.'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Everything has to run smoothly and without any interruptions. Be it connecting the user to the restaurant using geolocation or payment transfers.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'There are two types of delivery models that you choose. One is to create a standalone food ordering app and another it order and delivery application.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Before knowing how to make a food delivery app, do you understand the two working models of this niche?'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Read ahead to compare both types of food delivery apps and to understand how they make money.'
                        ),
                        React.createElement(
                            'table',
                            null,
                            React.createElement(
                                'tbody',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        '\xA0'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'Order Only Application'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'Order and Delivery Application'
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        'Examples working on this model'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'Before knowing how to make a food delivery app, understand its working model.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'Working on the lines of Delivery.com or Eat 24, your application will only take orders and forward them to the merchant.'
                                        )
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'Applications like Ubereats and Doordash are working on this model.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'You allow the user to generate the order and also take care of the delivery.'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        'Working Model'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'The merchant is responsible for arranging adequate transportation and delivering the order to the customer when it comes to delivery.'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'You will not only create a food ordering app, but you also have to know how to add a delivery service to it.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'Your company will be responsible for delivering food orders to the customers.'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'Bikes and cars with Ubereats banners on them, you must have seen them, right?'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'These delivery guys are under company management.'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'They are trained and provided with materials from the company itself.'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        'Revenue Generation'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'You may ask if they make a simple food ordering app, how do they work to generate money.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'The companies operating on this model charge a commission on the total order value from the restaurants. The commission may range between 10% to 30%.'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        )
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'If you create a food ordering app that has a complete system, the revenue comes as commissions and delivery charges.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'Since they set up the infrastructure of delivering the order, the commissions are also higher.'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'When it comes to delivery charges, they depend on your company structure. Either you can go for a base fee or set the price according to the distance.'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'td',
                                        null,
                                        'Any Limitations'
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'You will find a lot of competition in this segment of the market.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'Since the implementation costs are less, the majority of the companies start small with a single solution.'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'As they grow, it is easier to scale and cover the other side of the market.'
                                        )
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        'The initial cost is huge, as you have to take care of training and setting up the required infrastructure for the delivery.',
                                        React.createElement(
                                            'p',
                                            null,
                                            '\xA0'
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'However, if your wagon is on the right track and it gains speed, the sky\u2019s the limit.'
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            'As the pioneering food delivery app development company, we can help you develop any type of solution for your business.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Several functions act in unison to help deliver a single order. If this isn\u2019t magic, then what is?'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Moving forward with knowing how to make a food delivery app we will\xA0',
                            React.createElement(
                                'a',
                                {
                                    href: 'https://spdload.com/blog/idea-validation/' },
                                'test business ideas'
                            ),
                            '\xA0in the\xA0',
                            React.createElement(
                                'a',
                                {
                                    href: 'https://spdload.com/blog/project-discovery-phase/' },
                                'discovery phase'
                            ),
                            '.'
                        ),
                        React.createElement(
                            'h2',
                            null,
                            'How to Win over the Market?'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Some may say that the food delivery application market has reached satiety. But, as an experienced food delivery app development company, we know that there is always room for innovation.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'In this segment of how to create a food ordering app, we will start with the market research and discovery phase.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'The idea validation to create a food ordering app starts with knowing the idea and how to capitalize it.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'At the very outset, it is essential to do careful and in-depth market research. This will help you develop a deep understanding of how to go ahead and make your food delivery app.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'You need to analyze your:'
                        ),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                'Market audience'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Competition'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Outreach'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Revenue generation options'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Demand Gap'
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'col-12 col-md-4 p-3' },
                    React.createElement(
                        'div',
                        { 'class': 'position-sticky', style: { top: '2rem' } },
                        React.createElement(
                            'div',
                            { 'class': 'row' },
                            React.createElement(
                                'p',
                                null,
                                'COMMENTS'
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'comments' },
                            React.createElement(
                                'div',
                                { 'class': 'row ms-2 ms-md-0 me-2 me-md-0' },
                                React.createElement(
                                    'div',
                                    { 'class': 'col-2' },
                                    React.createElement('img', { src: './assets/images/logo.png', alt: 'Profile Icon', 'class': 'img-thumbnail rounded-circle' })
                                ),
                                React.createElement(
                                    'div',
                                    { 'class': 'col-10 comment rounded-2 d-flex flex-column' },
                                    React.createElement(
                                        'div',
                                        { 'class': 'fst-italic' },
                                        '"That is an amazing website"'
                                    ),
                                    React.createElement(
                                        'span',
                                        { 'class': 'ms-auto mt-auto' },
                                        '-- JOHN DOE'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'row mt-2 ms-2 ms-md-0 me-2 me-md-0' },
                                React.createElement(
                                    'div',
                                    { 'class': 'col-2' },
                                    React.createElement('img', { src: './assets/images/logo.png', alt: 'Profile Icon', 'class': 'img-thumbnail rounded-circle' })
                                ),
                                React.createElement(
                                    'div',
                                    { 'class': 'col-10 comment rounded-2 d-flex flex-column' },
                                    React.createElement(
                                        'div',
                                        { 'class': 'fst-italic' },
                                        '"That is an amazing website"'
                                    ),
                                    React.createElement(
                                        'span',
                                        { 'class': 'ms-auto' },
                                        '-- JOHN DOE'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(ProjectSingle, null), document.getElementById('project_single'));
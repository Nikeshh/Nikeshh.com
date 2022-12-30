import { projects } from './data.js';

const ProjectSingle = () => {

    const [title, setTitle] = React.useState("");

    React.useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        var index = getUrlValues()["index"];
        var project = projects[index];
        setTitle(project["title"]);
    }, []);

    function getUrlValues() { 
        var vars = {}; 
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) { 
           vars[key] = value; 
        });
        return vars;
    }
      
    return (
        <div class="main-content w-100 h-100">
            <header class="text-bg-dark">
                <div class="container-fluid">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <i class="fa-solid fa-arrow-left me-2"></i> { title }
                        </a>
                        <div class="tag ms-2 border border-primary p-2 rounded-2 text-white-50" data-bs-html="true"
                            data-bs-toggle="tooltip" data-bs-placement="bottom"
                            data-bs-title="<em>Tag:</em> <u><b>Web design</b></u>">Web design</div>
                        <div class="tag ms-2 border border-primary p-2 rounded-2 text-white-50" data-bs-html="true"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<em>Tag:</em> <u><b>Web</b></u>">Web
                        </div>
                        <div class="tag ms-2 border border-primary p-2 rounded-2 text-white-50" data-bs-html="true"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<em>Tag:</em> <u><b>Android</b></u>">
                            Android</div>
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ms-auto" role="search">
                            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                                aria-label="Search" />
                        </form>
                        <div class="dropdown">
                            <a href="#"
                                class="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Works / Projects
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
            {/* Skill Content - Part without header */}
            <div class="m-3 m-md-5">
                <div class="d-flex flex-wrap justify-content-between align-items-center">
                    <h1 class="display-6">{ title }</h1>
                    <div class="skill-level show-9 d-flex flex-wrap justify-content-md-end">
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                    </div>
                </div>
                <div class="row">
                    {/* Project Details */}
                    <div class="col-md-8 project-details shadow-lg p-3 bg-white rounded">
                        <div class="d-flex gap-2 flex-wrap">
                            <div class="p-2 border border-primary rounded-2">
                                CONTRIBUTE
                            </div>
                            <div class="p-2 border border-primary rounded-2">
                                LINKED BLOGS
                            </div>
                            <div class="p-2 border border-primary rounded-2">
                                LINKED PROJECTS
                            </div>
                            <div class="p-2 border border-primary rounded-2">
                                CONTACT ME
                            </div>
                            <div class="p-2 border border-primary rounded-2 ms-md-auto">
                                DOWNLOAD
                            </div>
                            <div class="p-2 border border-danger rounded-circle">
                                ❤️
                            </div>
                        </div>
                        <div class="overflow-scroll project-content mt-3">
                            <h2>How do Food Delivery Apps work?</h2>
                            <p>To develop a food delivery app, we will begin by first knowing how these applications function.</p>
                            <p>At the outset, the food delivery applications are empowering. These applications work effectively and
                                give the users full control over their choices.</p>
                            <p>From selecting their favorite restaurant to ordering food that they like, these food delivery apps
                                develop a huge database.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Step 1</td>
                                        <td>A consumer will get recommendations of nearby restaurants or some special orders for the day.
                                            <p>&nbsp;</p>

                                            <p>Right from restaurant selection to checkout and payment, the consumer is at the lead.</p>

                                            <p>The users know how to create a basket of the desired items in the food ordering app.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Step 2</td>
                                        <td>Once the items are in the cart, the user can review them and move to payment.</td>
                                    </tr>
                                    <tr>
                                        <td>Step 3</td>
                                        <td>Once the order is final, the restaurant gets a notification and starts preparing the food.
                                            <p>&nbsp;</p>

                                            <p>In your journey to make a food delivery app, it is also essential to know how to connect the
                                                user with the restaurant and the delivery guy.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Step 4</td>
                                        <td>After preparation, a delivery guy takes the order and delivers it to the customer on their
                                            specified address.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Everything has to run smoothly and without any interruptions. Be it connecting the user to the
                                restaurant using geolocation or payment transfers.</p>
                            <p>There are two types of delivery models that you choose. One is to create a standalone food ordering
                                app and another it order and delivery application.</p>
                            <p>Before knowing how to make a food delivery app, do you understand the two working models of this
                                niche?</p>
                            <p>Read ahead to compare both types of food delivery apps and to understand how they make money.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>Order Only Application</td>
                                        <td>Order and Delivery Application</td>
                                    </tr>
                                    <tr>
                                        <td>Examples working on this model</td>
                                        <td>Before knowing how to make a food delivery app, understand its working model.
                                            <p>&nbsp;</p>
                                            <p>Working on the lines of Delivery.com or Eat 24, your application will only take orders and
                                                forward them to the merchant.</p>
                                        </td>
                                        <td>Applications like Ubereats and Doordash are working on this model.
                                            <p>&nbsp;</p>
                                            <p>You allow the user to generate the order and also take care of the delivery.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Working Model</td>
                                        <td>The merchant is responsible for arranging adequate transportation and delivering the order to
                                            the customer when it comes to delivery.</td>
                                        <td>You will not only create a food ordering app, but you also have to know how to add a delivery
                                            service to it.
                                            <p>&nbsp;</p>
                                            <p>Your company will be responsible for delivering food orders to the customers.</p>
                                            <p>Bikes and cars with Ubereats banners on them, you must have seen them, right?</p>
                                            <p>These delivery guys are under company management.</p>
                                            <p>They are trained and provided with materials from the company itself.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Revenue Generation</td>
                                        <td>You may ask if they make a simple food ordering app, how do they work to generate money.
                                            <p>&nbsp;</p>
                                            <p>The companies operating on this model charge a commission on the total order value from the
                                                restaurants. The commission may range between 10% to 30%.</p>
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>If you create a food ordering app that has a complete system, the revenue comes as commissions
                                            and delivery charges.
                                            <p>&nbsp;</p>
                                            <p>Since they set up the infrastructure of delivering the order, the commissions are also
                                                higher.</p>
                                            <p>When it comes to delivery charges, they depend on your company structure. Either you can go
                                                for a base fee or set the price according to the distance.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Any Limitations</td>
                                        <td>You will find a lot of competition in this segment of the market.
                                            <p>&nbsp;</p>
                                            <p>Since the implementation costs are less, the majority of the companies start small with a
                                                single solution.</p>
                                            <p>As they grow, it is easier to scale and cover the other side of the market.</p>
                                        </td>
                                        <td>The initial cost is huge, as you have to take care of training and setting up the required
                                            infrastructure for the delivery.
                                            <p>&nbsp;</p>
                                            <p>However, if your wagon is on the right track and it gains speed, the sky&rsquo;s the limit.
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>As the pioneering food delivery app development company, we can help you develop any type of solution
                                for your business.</p>
                            <p>Several functions act in unison to help deliver a single order. If this isn&rsquo;t magic, then what
                                is?</p>
                            <p>Moving forward with knowing how to make a food delivery app we will&nbsp;<a
                                href="https://spdload.com/blog/idea-validation/">test business ideas</a>&nbsp;in the&nbsp;<a
                                    href="https://spdload.com/blog/project-discovery-phase/">discovery phase</a>.</p>
                            <h2>How to Win over the Market?</h2>
                            <p>Some may say that the food delivery application market has reached satiety. But, as an experienced
                                food delivery app development company, we know that there is always room for innovation.</p>
                            <p>In this segment of how to create a food ordering app, we will start with the market research and
                                discovery phase.</p>
                            <p>The idea validation to create a food ordering app starts with knowing the idea and how to capitalize
                                it.</p>
                            <p>At the very outset, it is essential to do careful and in-depth market research. This will help you
                                develop a deep understanding of how to go ahead and make your food delivery app.</p>
                            <p>You need to analyze your:</p>
                            <ul>
                                <li>Market audience</li>
                                <li>Competition</li>
                                <li>Outreach</li>
                                <li>Revenue generation options</li>
                                <li>Demand Gap</li>
                            </ul>
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
    <ProjectSingle />,
    document.getElementById('project_single')
); 